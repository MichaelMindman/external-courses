function getCheckKey(inputString, inputObject) {
  if ((inputString in inputObject) && (Object.keys(inputObject).length !== 0)) {
    return inputObject;
  }

  const clonNewObject = {};
  Object.assign(clonNewObject, inputObject);
  clonNewObject[inputString] = 'new';
  return clonNewObject;
}
module.exports = getCheckKey;
