import { getRandom, findGcd } from '../utils.js';

const objective = 'Find the greatest common divisor of given numbers.';

const makeQuestion = () => {
  const maxNum = 100;
  const a = getRandom(maxNum);
  const b = getRandom(maxNum);
  const correctAnswer = findGcd(a, b).toString();
  const question = `${a} ${b}`;
  return [question, correctAnswer];
};

const game = [objective, makeQuestion];

export default game;
