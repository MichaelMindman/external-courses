function getStringLCC(inputString) {
  let i;
  let rezultStr;
  const srtArray = inputString.split(' ');
  const strFirst = srtArray[0].toLowerCase();
  rezultStr = strFirst;
  for (i = 1; i < srtArray.length; i += 1) {
    const varArray = srtArray[i].toLowerCase();
    rezultStr += (varArray[0].toUpperCase() + varArray.slice(1));
  } return rezultStr;
}
module.exports = getStringLCC;
