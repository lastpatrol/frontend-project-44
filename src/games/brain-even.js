import getRandom from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => {
  const questionNum = getRandom();
  const isEvenAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
  return [questionNum, isEvenAnswer];
};

const game = [rules, makeQuestion];

export default game;
