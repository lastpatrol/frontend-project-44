import getRandom from '../utils.js';

const objective = 'What number is missing in the progression?';

const makeQuestion = () => {
  const placeholder = '..';
  const minLength = 5;
  const maxLength = 10;
  const maxStep = 10;
  const minStep = 1;

  const startNum = getRandom();
  const length = getRandom(minLength, maxLength);
  const step = getRandom(minStep, maxStep);
  const hiddenIndex = getRandom(0, length - 1);

  const progression = [];
  let answer;
  for (let i = 0; i < length; i += 1) {
    const currentNumAsStr = (startNum + step * i).toString();

    if (i === hiddenIndex) {
      progression.push(placeholder);
      answer = currentNumAsStr;
    } else {
      progression.push(currentNumAsStr);
    }
  }

  const question = progression.join(' ');

  return [question, answer];
};

const game = [objective, makeQuestion];

export default game;
