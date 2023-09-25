import getRandom from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const rules = 'What is the result of the expression?';

const makeQuestion = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandom();
  const num2 = getRandom();
  const operatorIndex = getRandom(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

const game = [rules, makeQuestion];

export default game;
