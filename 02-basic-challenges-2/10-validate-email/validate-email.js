function validateEmail(email) {
  let hasTextBeforeAt = false;
  let hasAt = false;
  let hasDot = false;
  for (const char of email) {
    if (char === '@') {
      hasAt = true;
    } else if (char === '.') {
      hasDot = true;
    } else if (!hasAt) {
      hasTextBeforeAt = true;
    }
  }
  return hasTextBeforeAt && hasAt && hasDot;
}

module.exports = validateEmail;
