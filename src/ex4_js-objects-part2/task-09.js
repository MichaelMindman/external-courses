function getStringTakeWord(inputString, newWord, numberPosition) {
  const srtArray = inputString.split(' ');
  let i;
  let rezultStr = '';
  for (i = 0; i < srtArray.length; i += 1) {
    rezultStr = `${rezultStr + srtArray[i]} `;
    if (srtArray.indexOf(srtArray[i]) === numberPosition) {
      rezultStr = `${rezultStr + newWord} `;
    }
  } return rezultStr.trim();
}
module.exports = getStringTakeWord;
