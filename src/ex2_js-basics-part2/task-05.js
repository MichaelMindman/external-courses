function getSortMax(enputArray) {
  const lenArray = enputArray.length;
  let i;
  let maxResult = enputArray[0];

  for (i = 0; i < lenArray; i += 1) {
    if (maxResult < enputArray[i]) {
      maxResult = enputArray[i];
    }
  } return maxResult;
}
module.exports = getSortMax;
