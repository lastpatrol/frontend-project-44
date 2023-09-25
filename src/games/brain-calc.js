import getRandom from '../utils.js';

const rules = 'What is the result of the expression?';

const generateQuestion = () => {
  const operators = ['+', '-', '*'];

  const operandA = getRandom();
  const operandB = getRandom();
  const operatorIndex = getRandom(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${operandA} ${operator} ${operandB}`;
  let answerNum;
  switch (operator) {
    case '+':
      answerNum = operandA + operandB;
      break;
    case '-':
      answerNum = operandA - operandB;
      break;
    case '*':
      answerNum = operandA * operandB;
      break;
    default:
      break;
  }

  const answer = answerNum.toString();
  return [question, answer];
};

const game = [rules, generateQuestion];

export default game;
