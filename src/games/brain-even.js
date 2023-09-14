import getRandom from '../utils.js';

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const questionNum = getRandom();
  const isEvenAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
  return [questionNum, isEvenAnswer];
};

const game = [objective, generateQuestion];

export default game;
