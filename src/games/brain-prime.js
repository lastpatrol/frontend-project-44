import getRandom from '../utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeRound = () => {
  const num = getRandom();
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngine(rules, makeRound);
