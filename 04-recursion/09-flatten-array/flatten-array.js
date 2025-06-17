function flattenArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  return (Array.isArray(arr[0]) ? flattenArray(arr[0]) : [arr[0]]).concat(flattenArray(arr.slice(1)));
}

module.exports = flattenArray;
