function getStringUp(inputString) {
  const newStrUp = inputString[0].toUpperCase() + inputString.slice(1);

  return newStrUp;
}
module.exports = getStringUp;
