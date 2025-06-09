function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;

  return uppercaseRegex.test(password) && lowercaseRegex.test(password) && digitRegex.test(password);

}

module.exports = validatePassword;
