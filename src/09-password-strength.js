/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (password === "" || typeof password !== "string") return "weak";

  if (
    isValidLength(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasNumber(password) &&
    hasSpecialCharacter(password)
  )
    return "very strong";

  if (
    isValidLength(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasNumber(password)
  )
    return "strong";

  if (
    isValidLength(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasSpecialCharacter(password) &&
    !hasNumber(password)
  )
    return "strong";


  if(isValidLength(password) && hasLowercase(password)) return "medium";
  if (isValidLength(password) && hasUppercase(password) && hasLowercase(password)) return "medium";
  if(!isValidLength(password) && hasLowercase(password) && hasNumber(password) && hasSpecialCharacter(password)) return "medium";



  if(isValidLength(password)) return "weak";
  if (!isValidLength(password)) return "weak";
}

function isValidLength(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function hasUppercase(str) {
  for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') return true;
  }
  return false;
}

function hasLowercase(str) {
  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') return true;
  }
  return false;
}

function hasNumber(str) {
  for (let ch of str) {
    if (ch >= '0' && ch <= '9') return true;
  }
  return false;
}


function hasSpecialCharacter(password) {
  let isSpecialCharacter = false;
  for (let i = 0; i < password.length; i++) {
    if (
      password[i] === "!" ||
      password[i] === "@" ||
      password[i] === "#" ||
      password[i] === "$" ||
      password[i] === "%" ||
      password[i] === "^" ||
      password[i] === "&" ||
      password[i] === "*" ||
      password[i] === "(" ||
      password[i] === ")" ||
      password[i] === "_" ||
      password[i] === "+" ||
      password[i] === "-" ||
      password[i] === "=" ||
      password[i] === "[" ||
      password[i] === "]" ||
      password[i] === "{" ||
      password[i] === "}" ||
      password[i] === "|" ||
      password[i] === ";" ||
      password[i] === ":" ||
      password[i] === "," ||
      password[i] === "." ||
      password[i] === "<" ||
      password[i] === ">" ||
      password[i] === "?"
    ) {
      isSpecialCharacter = true;
    }
  }
  return isSpecialCharacter;
}
