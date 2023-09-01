const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const maxNum = 100;
  const questionNum = Math.floor(Math.random() * maxNum);
  const isEvenAnswer = questionNum % 2 === 0 ? 'yes' : 'no';
  return [questionNum, isEvenAnswer];
};

const game = [objective, generateQuestion];

export default game;
