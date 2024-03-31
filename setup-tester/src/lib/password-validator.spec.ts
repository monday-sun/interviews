import { PasswordValidator } from './password-validator';
import { PasswordStats } from './password.types';

describe('PasswordValidator', () => {
  const validator = new PasswordValidator();

  test('should return 0 for a strong password', () => {
    const stats: PasswordStats = {
      length: 8,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(0);
  });

  test('should return 1 for a password missing a digit', () => {
    const stats: PasswordStats = {
      length: 8,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: false,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(1);
  });

  test('should return 1 for a password with repeating characters', () => {
    const stats: PasswordStats = {
      length: 8,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 1,
    };
    expect(validator.validate(stats)).toBe(1);
  });

  test('should return 3 for a 3 character password', () => {
    const stats: PasswordStats = {
      length: 3,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(3);
  });

  test('should return 4 for a 24 character password', () => {
    const stats: PasswordStats = {
      length: 24,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(4);
  });

  test('should return 2 for a password missing an uppercase letter and a digit', () => {
    const stats: PasswordStats = {
      length: 8,
      hasLowercase: true,
      hasUppercase: false,
      hasDigit: false,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(2);
  });

  test('should return 6 for an empty password', () => {
    const stats: PasswordStats = {
      length: 0,
      hasLowercase: false,
      hasUppercase: false,
      hasDigit: false,
      countRepeatsOver3: 0,
    };
    expect(validator.validate(stats)).toBe(6);
  });

  test('should return 3 for 3 repeat, missing upper, missing lower', () => {
    const stats: PasswordStats = {
      length: 10,
      hasLowercase: false,
      hasUppercase: false,
      hasDigit: true,
      countRepeatsOver3: 3,
    };
    expect(validator.validate(stats)).toBe(3);
  });
});

('bba7aa6aa5aa4aa3ac2cc1c');
