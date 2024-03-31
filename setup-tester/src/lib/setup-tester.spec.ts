import { minStepsToStrongPassword } from './setup-tester'; // Adjust the import path according to your file structure

describe('minStepsToStrongPassword', () => {
  describe('password inclusions', () => {
    test('should return 0 for a strong password', () => {
      expect(minStepsToStrongPassword('Strong1')).toBe(0);
    });

    test('should return 1 for a password missing a digit', () => {
      expect(minStepsToStrongPassword('WeakPass')).toBe(1);
    });

    test('should return 1 for a password missing a lower case letter', () => {
      expect(minStepsToStrongPassword('WEAKPASS1')).toBe(1);
    });

    test('should return 2 for a password missing an uppercase letter and a digit', () => {
      expect(minStepsToStrongPassword('weakpass')).toBe(2);
    });
  });

  describe('repeat tokens', () => {
    test('should return 1 for a password with three repeating characters', () => {
      expect(minStepsToStrongPassword('Baaabb0')).toBe(1);
    });

    test('should return 2 for a password with four repeating characters', () => {
      expect(minStepsToStrongPassword('Baaaaabb0')).toBe(2);
    });

    test('should return 0 for a password with two repeating characters', () => {
      expect(minStepsToStrongPassword('Baabb0')).toBe(0);
    });
  });

  describe('password length', () => {
    test('should return 3 for a short password', () => {
      expect(minStepsToStrongPassword('aB3')).toBe(3);
    });

    test('should return 3 for a long password with extra characters', () => {
      expect(minStepsToStrongPassword('1234567890abcdefAAAAAAA')).toBe(3);
    });

    test('should return 6 for an empty password', () => {
      expect(minStepsToStrongPassword('')).toBe(6);
    });
  });
});
