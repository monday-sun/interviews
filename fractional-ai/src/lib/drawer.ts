import { Canvas } from './canvas';

export class Drawer {
  drawLine(
    canvas: Canvas,
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): void {
    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);
    const sx = startX < endX ? 1 : -1;
    const sy = startY < endY ? 1 : -1;

    let err = dx - dy;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      canvas.setPixel(startX, startY, true);

      if (this.isEnd(startX, endX, startY, endY)) break;

      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        startX += sx;
      }
      if (e2 < dx) {
        err += dx;
        startY += sy;
      }
    }
  }

    private isEnd(startX: number, endX: number, startY: number, endY: number) {
        return startX === endX && startY === endY;
    }
}
