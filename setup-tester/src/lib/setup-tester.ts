import { PasswordValidator } from './password-validator';
import { PasswordParser } from './password-parser';

export function minStepsToStrongPassword(password: string): number {
  const parser = new PasswordParser(password);
  const stats = parser.parse();
  const validator = new PasswordValidator(stats, password.length);
  return validator.getMinStepsToStrongPassword();
}
