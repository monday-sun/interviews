import { PasswordParser } from './password-parser'; // Adjust the import path according to your file structure
import { PasswordValidator } from './password-validator'; // Adjust the import path according to your file structure

const password = process.argv[2];

if (password) {
  const parser = new PasswordParser();
  const stats = parser.parse(password);
  const validator = new PasswordValidator();
  const steps = validator.validate(stats);

  console.log(`Minimum steps required to make the password strong: ${steps}`);
} else {
  console.log('Please provide a password as an argument.');
}
