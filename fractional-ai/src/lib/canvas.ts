export class Canvas {
  private readonly canvas: boolean[][];

  constructor(height: number, width: number) {
    this.canvas = Array.from({ length: height }, () =>
      Array(width).fill(false)
    );
  }

  getHeight(): number {
    return this.canvas.length;
  }

  getWidth(): number {
    return this.canvas[0]?.length ?? 0;
  }

  setPixel(x: number, y: number, value: boolean): void {
    if (this.isValidPosition(x, y)) {
      this.canvas[y][x] = value;
    } else {
      throw new Error('Invalid position');
    }
  }

  getPixel(x: number, y: number): boolean {
    if (this.isValidPosition(x, y)) {
      return this.canvas[y][x];
    } else {
      throw new Error('Invalid position');
    }
  }

  private isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.getWidth() && y >= 0 && y < this.getHeight();
  }
}
