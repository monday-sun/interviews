import { PasswordParser } from './password-parser'; // Adjust the import path according to your file structure
import { PasswordStats } from './password.types';

describe('PasswordParser', () => {
  test('should correctly parse a password with lowercase, uppercase, and digits', () => {
    const parser = new PasswordParser('Strong1');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 7,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 0,
    });
  });

  test('should identify missing digit', () => {
    const parser = new PasswordParser('Weak');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 4,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: false,
      countRepeatsOver3: 0,
    });
  });

  test('should identify missing uppercase', () => {
    const parser = new PasswordParser('weak1');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 5,
      hasLowercase: true,
      hasUppercase: false,
      hasDigit: true,
      countRepeatsOver3: 0,
    });
  });

  test('should identify missing lowercase', () => {
    const parser = new PasswordParser('WEAK1');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 5,
      hasLowercase: false,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 0,
    });
  });

  test('should on count repeating characters over 3', () => {
    const parser = new PasswordParser('Baaabb0');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 7,
      hasLowercase: true,
      hasUppercase: true,
      hasDigit: true,
      countRepeatsOver3: 1,
    });
  });

  test('should correctly handle a password with multiple sets of repeating characters', () => {
    const parser = new PasswordParser('aaabbbccc');
    const stats = parser.parse();
    expect(stats).toEqual(<PasswordStats>{
      length: 9,
      hasLowercase: true,
      hasUppercase: false,
      hasDigit: false,
      countRepeatsOver3: 3,
    });
  });
});
