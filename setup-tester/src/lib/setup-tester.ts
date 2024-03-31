export function minStepsToStrongPassword(password: string): number {
  let stepsToFix = 0;
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let repeatLength = 0;

  // Check for lowercase, uppercase, digit, and repeating characters
  for (let i = 0; i < password.length; i++) {
    validateHasLowerCase(i);
    validateHasUppercase(i);
    validateHasDigit(i);
    if (countRepeats(i)) {
      i++;
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

  function countRepeats(i: number) {
    let shouldSkipNextCharacter = false;
    if (
      i > 1 &&
      password[i] === password[i - 1] &&
      password[i] === password[i - 2]
    ) {
      repeatLength++;
      shouldSkipNextCharacter = true;
    }
    return shouldSkipNextCharacter;
  }

  function validateHasDigit(i: number) {
    if (password[i] >= '0' && password[i] <= '9') hasDigit = true;
  }

  function validateHasUppercase(i: number) {
    if (password[i] >= 'A' && password[i] <= 'Z') hasUppercase = true;
  }

  function validateHasLowerCase(i: number) {
    if (password[i] >= 'a' && password[i] <= 'z') hasLowercase = true;
  }
}
