function getNewClon(inputObject) {
  const clonNewObject = {};
  Object.assign(clonNewObject, inputObject);
  return clonNewObject;
}
module.exports = getNewClon;
