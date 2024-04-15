import { Canvas } from './canvas';

describe('Canvas', () => {
  let canvas: Canvas;

  beforeEach(() => {
    canvas = new Canvas(2, 2);
  });

  test('initialization', () => {
    expect(canvas.getWidth()).toBe(2);
    expect(canvas.getHeight()).toBe(2);
    expect(canvas.getPixel(0, 0)).toBe(false);
    expect(canvas.getPixel(1, 1)).toBe(false);
  });

  test('setPixel and getPixel', () => {
    canvas.setPixel(0, 0, true);
    canvas.setPixel(1, 1, true);

    expect(canvas.getPixel(0, 0)).toBe(true);
    expect(canvas.getPixel(1, 1)).toBe(true);
    expect(canvas.getPixel(1, 0)).toBe(false);
    expect(() => canvas.getPixel(2, 0)).toThrowError('Invalid position');
  });

  test('out of bounds setPixel throws error', () => {
    expect(() => canvas.setPixel(2, 0, true)).toThrowError('Invalid position');
  });

  test('out of bounds getPixel throws error', () => {
    expect(() => canvas.getPixel(2, 0)).toThrowError('Invalid position');
  });
});
