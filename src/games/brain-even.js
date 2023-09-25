import getRandom from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const questionNum = getRandom();
  const isEvenAnswer = isEven(questionNum) ? 'yes' : 'no';
  return [questionNum, isEvenAnswer];
};

export default () => runEngine(rules, makeRound);
