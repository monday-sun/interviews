export function minStepsToStrongPassword(password: string): number {
  let stepsToFix = 0;
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let repeatLength = 0;

  // Check for lowercase, uppercase, digit, and repeating characters
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') hasLowercase = true;
    if (password[i] >= 'A' && password[i] <= 'Z') hasUppercase = true;
    if (password[i] >= '0' && password[i] <= '9') hasDigit = true;
    if (
      i > 1 &&
      password[i] === password[i - 1] &&
      password[i] === password[i - 2]
    ) {
      repeatLength++;
      i++; // Skip the next character to avoid counting overlapping repeats
    }
  }

  // Calculate steps needed to satisfy character type requirements
  stepsToFix +=
    (hasLowercase ? 0 : 1) + (hasUppercase ? 0 : 1) + (hasDigit ? 0 : 1);

  if (password.length < 6) {
    // If the password is too short, add steps to reach minimum length or satisfy character types
    stepsToFix = Math.max(stepsToFix, 6 - password.length);
  } else if (password.length > 20) {
    // If the password is too long, remove extra characters
    stepsToFix += password.length - 20;
    // Adjust repeats count if necessary after removing characters
    repeatLength = Math.max(repeatLength - (password.length - 20), 0);
  }

  // Replace repeating characters if needed
  stepsToFix += repeatLength;

  return stepsToFix;
}
