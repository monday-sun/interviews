import { PasswordStats } from './password.types';

export class PasswordValidator {
  validate(stats: PasswordStats): number {
    if (stats.length < 6) {
      return 6 - stats.length;
    }

    let stepsNeededForTypes = this.calculateCharacterTypeSteps(stats);

    if (stats.length > 20) {
      const excessLength = stats.length - 20;
      const stepsSavedByRemovingRepeats = Math.min(
        excessLength,
        stats.countRepeatsOver3
      );
      stats.countRepeatsOver3 -= stepsSavedByRemovingRepeats;
      stepsNeededForTypes = Math.max(
        stepsNeededForTypes - stepsSavedByRemovingRepeats,
        0
      );
      return (
        excessLength + Math.max(stats.countRepeatsOver3, stepsNeededForTypes)
      );
    }

    return Math.max(stats.countRepeatsOver3, stepsNeededForTypes);
  }

  private calculateCharacterTypeSteps(stats: PasswordStats): number {
    return (
      (!stats.hasLowercase ? 1 : 0) +
      (!stats.hasUppercase ? 1 : 0) +
      (!stats.hasDigit ? 1 : 0)
    );
  }
}
