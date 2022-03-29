function getStringFind(inputString, inputStringTest) {
  let key;
  const strArray = inputString.split(' ');
  for (key = 0; key < strArray.length; key += 1) {
    if (strArray[key] === inputStringTest) {
      return true;
    }
  } return false;
}
module.exports = getStringFind;
