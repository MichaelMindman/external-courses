function getStringShort(inputString, inputNumber) {
  let strShort;
  if (inputString.length > inputNumber) {
    const numSort = (inputString.length + 1) - (inputNumber - 1);
    strShort = `${inputString.slice(0, numSort)}…`;
  } return strShort;
}
module.exports = getStringShort;
