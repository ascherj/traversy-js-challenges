function generateHashtag(str) {
  if (str.trim() == '') {
    return false;
  }

  const parts = str.trim().split(/\s+/).map(part => {
    return part[0].toUpperCase() + part.toLowerCase().slice(1);
  });

  const result = '#' + parts.join('');

  return result.length <= 140 ? result : false;
}

module.exports = generateHashtag;
