import getRandom from '../utils.js';

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

const objective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeQuestion = () => {
  const num = getRandom();
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const game = [objective, makeQuestion];

export default game;
