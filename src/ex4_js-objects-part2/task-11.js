function countString(inputString) {
  const strArray = inputString.split('');
  let uniquetArray = [];
  let uniquetArraySplit = [];
  let count = 0;

  for (let i = 0; i < strArray.length; i += 1) {
    if
    ((strArray.includes(strArray[i])) && (!uniquetArray.includes(strArray[i]))) {
      uniquetArray += strArray[i];
    }
  }
  uniquetArraySplit = uniquetArray.split('');
  for (let j = 0; j < uniquetArraySplit.length; j += 1) {
    count = 0;
    for (let k = 0; k < strArray.length; k += 1) {
      if (uniquetArraySplit[j] === strArray[k]) {
        count += 1;
      }
      if ((k + 1) === strArray.length) {
        console.log(uniquetArraySplit[j], count);
      }
    }
  }
}
module.exports = countString;
