import { PasswordStats } from './password.types';

export class PasswordParser {
  parse(password: string): PasswordStats {
    return {
      length: password.length,
      hasLowercase: this.hasLowercase(password),
      hasUppercase: this.hasUppercase(password),
      hasDigit: this.hasDigit(password),
      countRepeatsOver3: this.countRepeatsOver3(password),
    };
  }

  private hasLowercase(password: string): boolean {
    return /[a-z]/.test(password);
  }

  private hasUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  private hasDigit(password: string): boolean {
    return /[0-9]/.test(password);
  }

  private countRepeatsOver3(password: string): number {
    let repeats = 0;
    let repeatCount = 1;

    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) {
        repeatCount++;
        if (repeatCount === 3) {
          repeats++;
          repeatCount = 0; // Reset the count after counting a repeat
        }
      } else {
        repeatCount = 1;
      }
    }

    return repeats;
  }
}
