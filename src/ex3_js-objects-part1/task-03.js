function getCheckKey(inputString, inputObject) {
  if ((inputString in inputObject) && (Object.keys(inputObject).length !== 0)) {
    return true;
  }
  return false;
}
module.exports = getCheckKey;
