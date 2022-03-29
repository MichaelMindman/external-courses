function checkArray(enputArray) {
  const lenArray = enputArray.length;
  const baseElement = enputArray[0];
  let i;
  let countTest = 0;

  for (i = 0; i < lenArray; i += 1) {
    if (baseElement === enputArray[i]) {
      countTest += 1;
    } else {
      return false;
    }
  }
  if (countTest === lenArray) {
    return true;
  }
  return false;
}
module.exports = checkArray;
