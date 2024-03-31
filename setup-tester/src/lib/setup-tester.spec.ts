import { minStepsToStrongPassword } from './setup-tester'; // Adjust the import path according to your file structure

describe('minStepsToStrongPassword', () => {
  test('should return 0 for a strong password', () => {
    expect(minStepsToStrongPassword('Strong1')).toBe(0);
  });

  test('should return 1 for a password missing a digit', () => {
    expect(minStepsToStrongPassword('WeakPass')).toBe(1);
  });
});
