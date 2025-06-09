const isValidIPv4 = (ipString) => {
  const parts = ipString.split('.');

  if (parts.length !== 4) {
    return false;
  }

  return parts.every(part => {
    return Number(part) >= 0 && Number(part) <= 255 && String(Number(part)).length === part.length;

  });
};

module.exports = isValidIPv4;
