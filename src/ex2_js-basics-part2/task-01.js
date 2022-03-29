function funAccsept(inputValue) {
  if (typeof inputValue === 'string') {
    return 'string';
  } if ((typeof inputValue === 'number') && (isNaN(inputValue) !== true)) {
    return 'number';
  }
  return undefined;
}

module.exports = funAccsept;
