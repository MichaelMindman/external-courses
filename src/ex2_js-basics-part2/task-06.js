function checkSimpleNum(inputNum) {
  let i;
  const checkSpeedSqrt = Math.floor(Math.sqrt(inputNum));
  if (inputNum > 1000) {
    return 'Данные неверны';
  } if ((inputNum === 0) || (inputNum === 1)) {
    return 'Не причисляется ни к простым, ни к составным числам';
  } if ((inputNum === 2) || (inputNum === 3)) {
    return `Число ${inputNum} - простое число`;
  }

  for (i = 2; i <= checkSpeedSqrt; i += 1) {
    if (inputNum % i === 0) {
      return `Число ${inputNum} - составное число`;
    }
  }
  return `Число ${inputNum} - простое число`;
}
module.exports = checkSimpleNum;
