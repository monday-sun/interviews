import { Canvas } from './canvas';
import { CanvasRenderer } from './canvas-renderer';
import { Drawer } from './drawer';

describe('Canvas Integration Test', () => {
  let canvas: Canvas;
  let drawer: Drawer;
  let renderer: CanvasRenderer;

  beforeEach(() => {
    canvas = new Canvas(8, 8);
    drawer = new Drawer();
    renderer = new CanvasRenderer();
  });

  test('drawLine and render', () => {
    drawer.drawLine(canvas, 1, 1, 6, 6);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    renderer.render(canvas);

    // expect(consoleSpy).toHaveBeenCalledWith('__________');
    // expect(consoleSpy).toHaveBeenCalledWith('|        |');
    // expect(consoleSpy).toHaveBeenCalledWith('| .      |');
    // expect(consoleSpy).toHaveBeenCalledWith('|  .     |');
    // expect(consoleSpy).toHaveBeenCalledWith('|   .    |');
    // expect(consoleSpy).toHaveBeenCalledWith('|    .   |');
    // expect(consoleSpy).toHaveBeenCalledWith('|     .  |');
    // expect(consoleSpy).toHaveBeenCalledWith('|________|');

    consoleSpy.mockRestore();
  });
});
