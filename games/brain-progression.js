import { getRandom } from '../src/utils.js';

const objective = 'What number is missing in the progression?';

const makeQuestion = () => {
  const placeholder = '..';
  const maxStartNum = 100;
  const minLength = 5;
  const maxLength = 10;
  const maxStep = 10;
  const minStep = 1;

  const startNum = getRandom(maxStartNum);
  const length = getRandom(maxLength, minLength);
  const step = getRandom(maxStep, minStep);
  const hiddenIndex = getRandom(length - 1);

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
