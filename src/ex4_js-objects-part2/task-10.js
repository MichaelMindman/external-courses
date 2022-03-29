function getStringReverse(inputString) {
  return inputString.split('').reverse().join().replace(/[,]/g, '');
}
module.exports = getStringReverse;
