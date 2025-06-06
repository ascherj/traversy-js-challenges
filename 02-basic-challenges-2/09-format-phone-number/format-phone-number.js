function formatPhoneNumber(digits) {
  return `(${digits.slice(0, 3).join('')}) ${digits.slice(3, 6).join('')}-${digits.slice(6).join('')}`
}

module.exports = formatPhoneNumber;
