import getRandom from '../src/utils.js';

const objective = 'What is the result of the expression?';

const generateQuestion = () => {
  const maxNum = 100;
  const operators = ['+', '-', '*'];

  const operandA = getRandom(maxNum);
  const operandB = getRandom(maxNum);
  const operatorIndex = getRandom(operators.length);
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

const game = [objective, generateQuestion];

export default game;
