function checkString(inputString) {
  let endString;
  if (inputString[inputString.length - 1] === ' ') {
    endString = inputString.slice(0, -1);
  }
  if (inputString[0] === ' ') {
    endString = endString.slice(1);
  }

  return endString;
}
module.exports = checkString;
