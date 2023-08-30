import readlineSync from 'readline-sync';

const playGame = ([objective, generateQuestion]) => {
  const launches = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(objective);

  for (let i = 0; i < launches; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default playGame;
