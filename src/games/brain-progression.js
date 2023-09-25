import getRandom from '../utils.js';
import runEngine from '../index.js';

const makeProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

const rules = 'What number is missing in the progression?';

const makeRound = () => {
  const placeholder = '..';
  const minLength = 5;
  const maxLength = 10;
  const maxStep = 10;
  const minStep = 1;

  const start = getRandom();
  const step = getRandom(minStep, maxStep);
  const length = getRandom(minLength, maxLength);
  const hiddenIndex = getRandom(0, length - 1);

  const progression = makeProgression(start, step, length);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = placeholder;
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runEngine(rules, makeRound);
