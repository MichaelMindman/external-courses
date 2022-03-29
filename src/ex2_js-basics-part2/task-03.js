function getCountArray(inputArray) {
  const lenArray = inputArray.length;
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  let rezultSort = [];
  let i;

  for (i = 0; i < lenArray; i += 1) {
    if ((typeof (inputArray[i]) === 'number') && (Number.isNaN(inputArray[i]) !== true)) {
      if (inputArray[i] === 0) {
        zeroCount += 1;
      } else if (inputArray[i] % 2 === 1) {
        oddCount += 1;
      } else if (inputArray[i] % 2 === 0) {
        evenCount += 1;
      }
    }
  }
  rezultSort = [evenCount, oddCount, zeroCount];
  return rezultSort;
}
module.exports = getCountArray;
