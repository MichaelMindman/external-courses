function getArray(accseptArray) {
  const leigthArray = accseptArray.length;
  let count = 0;
  let i;
  for (i = 0; i < leigthArray; i += 1) {
    console.log(accseptArray[i]);
    count += 1;
  }
  console.log(count += 1);
}

module.exports = getArray;
