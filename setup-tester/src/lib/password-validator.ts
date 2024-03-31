import { PasswordStats } from './password.types';

export class PasswordValidator {
  stats: PasswordStats;
  passwordLength: number;

  constructor(stats: PasswordStats, passwordLength: number) {
    this.stats = stats;
    this.passwordLength = passwordLength;
  }

  getMinStepsToStrongPassword(): number {
    let steps = this.calculateCharacterTypeSteps();
    steps += this.adjustForLength();
    steps += this.stats.countRepeatsOver3;
    return steps;
  }

  private calculateCharacterTypeSteps(): number {
    return (
      (this.stats.hasLowercase ? 0 : 1) +
      (this.stats.hasUppercase ? 0 : 1) +
      (this.stats.hasDigit ? 0 : 1)
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
      this.stats.countRepeatsOver3 = Math.max(
        this.stats.countRepeatsOver3 - excessLength,
        0
      );
      return excessLength;
    }
    return 0;
  }
}
