import getRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => {
  const questionNum = getRandom();
  const isEvenAnswer = isEven(questionNum) ? 'yes' : 'no';
  return [questionNum, isEvenAnswer];
};

const game = [rules, makeQuestion];

export default game;
