import { Canvas } from './canvas';

export class CanvasRenderer {
  render(canvas: Canvas): void {
    // Top border
    console.log('_'.repeat(canvas.getWidth() + 2));

    // Canvas content
    for (let y = 0; y < canvas.getHeight(); y++) {
      let line = '|';
      for (let x = 0; x < canvas.getWidth(); x++) {
        line += canvas.getPixel(x, y) ? '.' : ' ';
      }
      line += '|';
      console.log(line);
    }

    // Bottom border
    console.log('_'.repeat(canvas.getWidth() + 2));
  }
}
