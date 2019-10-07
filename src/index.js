module.exports = function zeros(expression) {
  let newExpression;
  if (expression.includes("*")) {
    newExpression = expression.split("*");
    if (
      newExpression.every(
        number => number.includes("!!") && parseInt(number, 10) % 2 !== 0
      )
    ) {
      return 0;
    }
    return newExpression.map(checkFactorial).reduce((a, b) => a + b);
  }
  return checkFactorial(expression);
};

function checkFactorial(element) {
  return element.includes("!!")
    ? doubleFactorial(Number(element.substring(0, element.length - 2)))
    : factorial(Number(element.substring(0, element.length - 1)));
}

function doubleFactorial(element) {
  let countFiveNumbers = 0;
  let countTwoNumbers = 0;

  for (let i = element; i > 0; i -= 2) {
    for (let temp = i; temp % 5 == 0; temp /= 5) {
      countFiveNumbers++;
    }
    for (let temp = i; temp % 2 == 0; temp /= 2) {
      countTwoNumbers++;
    }
  }

  return element % 2 === 0
    ? Math.min(countFiveNumbers, countTwoNumbers)
    : countFiveNumbers;
}

function factorial(element) {
  let zero = 0;
  if (element < 5) {
    return zero;
  }
  for (let i = 5; element / i >= 1; i *= 5) {
    zero += Math.floor(element / i);
  }
  return zero;
}
