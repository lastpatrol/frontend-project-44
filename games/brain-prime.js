import { getRandom, isPrime } from '../src/utils.js';

const objective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestion = () => {
  const maxNum = 100;
  const num = getRandom(maxNum);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const game = [objective, makeQuestion];

export default game;
