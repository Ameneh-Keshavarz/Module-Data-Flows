function getLargestNumber(array) {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

module.exports = getLargestNumber;