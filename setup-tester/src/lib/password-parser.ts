import { PasswordStats } from './password.types';

export class PasswordParser {
  password: string;

  constructor(password: string) {
    this.password = password;
  }

  parse(): PasswordStats {
    return {
      length: this.password.length,
      hasLowercase: this.hasLowercase(),
      hasUppercase: this.hasUppercase(),
      hasDigit: this.hasDigit(),
      countRepeatsOver3: this.countRepeats(),
    };
  }

  private hasLowercase(): boolean {
    return /[a-z]/.test(this.password);
  }

  private hasUppercase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  private hasDigit(): boolean {
    return /[0-9]/.test(this.password);
  }

  private countRepeats(): number {
    let countRepeatsOver3 = 0;
    for (let i = 2; i < this.password.length; i++) {
      if (
        this.password[i] === this.password[i - 1] &&
        this.password[i] === this.password[i - 2]
      ) {
        countRepeatsOver3++;
        i++;
      }
    }
    return countRepeatsOver3;
  }
}
