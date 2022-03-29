function getProperty(inputProperty, inputObject) {
  if (inputProperty in inputObject.__proto__) {
    return inputObject.__proto__[inputProperty];
  } return undefined;
}
module.exports = getProperty;
