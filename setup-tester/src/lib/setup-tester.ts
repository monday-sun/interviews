export function minStepsToStrongPassword(password: string): number {
  let steps = 0;
  let lowercase = false;
  let uppercase = false;
  let digit = false;
  let repeats = 0;

  // Check for lowercase, uppercase, digit, and repeating characters
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') lowercase = true;
    if (password[i] >= 'A' && password[i] <= 'Z') uppercase = true;
    if (password[i] >= '0' && password[i] <= '9') digit = true;
    if (
      i > 1 &&
      password[i] === password[i - 1] &&
      password[i] === password[i - 2]
    ) {
      repeats++;
      i++; // Skip the next character to avoid counting overlapping repeats
    }
  }

  // Calculate steps needed to satisfy character type requirements
  steps += (lowercase ? 0 : 1) + (uppercase ? 0 : 1) + (digit ? 0 : 1);

  if (password.length < 6) {
    // If the password is too short, add steps to reach minimum length or satisfy character types
    steps = Math.max(steps, 6 - password.length);
  } else if (password.length > 20) {
    // If the password is too long, remove extra characters
    steps += password.length - 20;
    // Adjust repeats count if necessary after removing characters
    repeats = Math.max(repeats - (password.length - 20), 0);
  }

  // Replace repeating characters if needed
  steps += repeats;

  return steps;
}
