import { PasswordValidator } from './password-validator';
import { PasswordParser } from './password-parser';

export function minStepsToStrongPassword(password: string): number {
  const parser = new PasswordParser();
  const stats = parser.parse(password);
  const validator = new PasswordValidator(stats, password.length);
  return validator.getMinStepsToStrongPassword();
}
