function getStringUp(inputString) {
  let key;
  let rezultArray = '';
  const strArray = inputString.split(' ');
  for (key = 0; key < strArray.length; key += 1) {
    let strKey = strArray[key];
    strKey = strKey[0].toUpperCase() + strArray[key].slice(1);
    rezultArray += `${strKey} `;
  } return rezultArray.trim();
}
module.exports = getStringUp;
