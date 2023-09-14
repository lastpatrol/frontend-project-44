import getRandom from '../utils.js';

const findGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a === 0 ? b : a;
  }

  let devisor;
  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      devisor = i;
    }
  }

  return devisor;
};

const objective = 'Find the greatest common divisor of given numbers.';

const makeQuestion = () => {
  const a = getRandom();
  const b = getRandom();
  const correctAnswer = findGcd(a, b).toString();
  const question = `${a} ${b}`;
  return [question, correctAnswer];
};

const game = [objective, makeQuestion];

export default game;
