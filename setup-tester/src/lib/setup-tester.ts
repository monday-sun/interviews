type PasswordStats = {
  lowercase: boolean;
  uppercase: boolean;
  digit: boolean;
  repeats: number;
};

class PasswordParser {
  password: string;

  constructor(password: string) {
    this.password = password;
  }

  parse(): PasswordStats {
    return {
      lowercase: this.hasLowercase(),
      uppercase: this.hasUppercase(),
      digit: this.hasDigit(),
      repeats: this.countRepeats(),
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
    let repeats = 0;
    for (let i = 2; i < this.password.length; i++) {
      if (
        this.password[i] === this.password[i - 1] &&
        this.password[i] === this.password[i - 2]
      ) {
        repeats++;
        i++;
      }
    }
    return repeats;
  }
}

class PasswordValidator {
  stats: PasswordStats;
  passwordLength: number;

  constructor(stats: PasswordStats, passwordLength: number) {
    this.stats = stats;
    this.passwordLength = passwordLength;
  }

  getMinStepsToStrongPassword(): number {
    let steps = this.calculateCharacterTypeSteps();
    steps += this.adjustForLength();
    steps += this.stats.repeats;
    return steps;
  }

  private calculateCharacterTypeSteps(): number {
    return (
      (this.stats.lowercase ? 0 : 1) +
      (this.stats.uppercase ? 0 : 1) +
      (this.stats.digit ? 0 : 1)
    );
  }

  private adjustForLength(): number {
    if (this.passwordLength < 6) {
      return Math.max(
        6 - this.passwordLength,
        this.calculateCharacterTypeSteps()
      );
    } else if (this.passwordLength > 20) {
      const excessLength = this.passwordLength - 20;
      this.stats.repeats = Math.max(this.stats.repeats - excessLength, 0);
      return excessLength;
    }
    return 0;
  }
}

export function minStepsToStrongPassword(password: string): number {
  const parser = new PasswordParser(password);
  const stats = parser.parse();
  const validator = new PasswordValidator(stats, password.length);
  return validator.getMinStepsToStrongPassword();
}
