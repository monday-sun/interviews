import { Canvas } from './canvas';
import { CanvasRenderer } from './canvas-renderer';

describe('CanvasRenderer', () => {
  let renderer: CanvasRenderer;

  beforeEach(() => {
    renderer = new CanvasRenderer();
  });

  test('render', () => {
    const canvas = new Canvas(3, 3);
    canvas.setPixel(1, 1, true);
    canvas.setPixel(2, 2, true);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    renderer.render(canvas);

    expect(consoleSpy).toHaveBeenCalledWith('_____');
    expect(consoleSpy).toHaveBeenCalledWith('| . |');
    expect(consoleSpy).toHaveBeenCalledWith('|   |');
    expect(consoleSpy).toHaveBeenCalledWith('| . |');
    expect(consoleSpy).toHaveBeenCalledWith('_____');

    consoleSpy.mockRestore();
  });
});
