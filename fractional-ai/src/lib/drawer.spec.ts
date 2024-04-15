import { Canvas } from './canvas';
import { Drawer } from './drawer';

function convertPointsToCanvaseGrid(
  points: { x: number; y: number }[],
  height: number,
  width: number
) {
  const canvas = new Canvas(height, width);
  for (const point in points) {
    canvas.setPixel(point.x, point.y, true);
  }
  return canvas;
}

describe('Drawer', () => {
  let drawer: Drawer;
  let canvas: Canvas;

  beforeEach(() => {
    drawer = new Drawer();
    canvas = new Canvas(8, 8);
  });

  test('drawLine (1,1) to (6,6)', () => {
    // Test a diagonal line from (1, 1) to (6, 6)
    drawer.drawLine(canvas, 1, 1, 1, 1);

    const expectedCanvas = convertPointsToCanvaseGrid([{ x: 1, y: 1 }], 8, 8);

    for (let y = 0; y < canvas.getHeight(); y++) {
      for (let x = 0; x < canvas.getWidth(); x++) {
        expect(canvas.getPixel(x, y)).toEqual(expectedCanvas.getPixel(x, y));
      }
    }
  });

  test('drawLine (1,1) to (1,6)', () => {
    // Test a diagonal line from (1, 1) to (6, 6)
    drawer.drawLine(canvas, 1, 1, 1, 6);

    const expectedCanvas = [
      [false, false, false, false, false, false, false, false],
      [false, true, true, true, true, true, true, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ];

    for (let y = 0; y < canvas.getHeight(); y++) {
      for (let x = 0; x < canvas.getWidth(); x++) {
        expect(canvas.getPixel(x, y)).toBe(expectedCanvas[y][x]);
      }
    }
  });

  test('drawLine (2,2) to (5,2)', () => {
    // Test a diagonal line from (1, 1) to (6, 6)
    drawer.drawLine(canvas, 2, 2, 5, 2);

    const expectedCanvas = [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, true, false, false, false, false, false],
      [false, false, true, false, false, false, false, false],
      [false, false, true, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
    ];

    for (let y = 0; y < canvas.getHeight(); y++) {
      for (let x = 0; x < canvas.getWidth(); x++) {
        expect(canvas.getPixel(x, y)).toBe(expectedCanvas[y][x]);
      }
    }
  });
});
