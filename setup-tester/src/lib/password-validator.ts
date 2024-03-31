import { PasswordStats } from "./password.types";

export class PasswordValidator {
  validate(stats: PasswordStats): number {
    let steps = this.calculateCharacterTypeSteps(stats);
    steps += this.adjustForLength(stats);
    steps += stats.countRepeatsOver3;
    return steps;
  }

  private calculateCharacterTypeSteps(stats: PasswordStats): number {
    return (
      (!stats.hasLowercase ? 1 : 0) +
      (!stats.hasUppercase ? 1 : 0) +
      (!stats.hasDigit ? 1 : 0)
    );
  }

  private adjustForLength(stats: PasswordStats): number {
    if (stats.length < 6) {
      return Math.max(
        6 - stats.length,
        this.calculateCharacterTypeSteps(stats)
      );
    } else if (stats.length > 20) {
      const excessLength = stats.length - 20;
      stats.countRepeatsOver3 = Math.max(
        stats.countRepeatsOver3 - excessLength,
        0
      );
      return excessLength;
    }
    return 0;
  }
}
