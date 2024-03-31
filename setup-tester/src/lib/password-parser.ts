import { PasswordStats } from './password.types';

export class PasswordParser {
  parse(password: string): PasswordStats {
    return {
      length: password.length,
      hasLowercase: this.hasLowercase(password),
      hasUppercase: this.hasUppercase(password),
      hasDigit: this.hasDigit(password),
      countRepeatsOver3: this.countRepeats(password),
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

  private countRepeats(password: string): number {
    let countRepeatsOver3 = 0;
    for (let i = 2; i < password.length; i++) {
      if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
        countRepeatsOver3++;
        i++;
      }
    }
    return countRepeatsOver3;
  }
}
