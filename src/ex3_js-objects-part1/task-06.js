/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
function getProperty(objectInput, propertyPath) {
  let keyWay;
  let resultValue;
  let i;
  let firstPartWay = [];
  let propertyPathArray = [];

  function getCheckObject(objectInput) {
    for (const key in objectInput) {
      if (objectInput.hasOwnProperty(key)) {
        if ((typeof (key)) === 'object') {
          getCheckObject(key);
        }
        if ((typeof (objectInput[key])) === 'object') {
          firstPartWay += key;
          resultValue = Object.values(objectInput[key]);
          keyWay = firstPartWay + Object.keys(objectInput[key]);
          getCheckObject(objectInput[key]);
        }
      }
    }
  }
  getCheckObject(objectInput);

  for (i = 0; i < propertyPath.length; i += 2) {
    propertyPathArray += [propertyPath[i]];
  }
  if (propertyPathArray.includes(keyWay)) {
    return String(resultValue);
  } if (propertyPathArray.length < keyWay.length) {
    return undefined;
  } return undefined;
}
module.exports = getProperty;
/* eslint-enable no-restricted-syntax */
/* eslint-enable no-shadow */
