import readlineSync from 'readline-sync';
import getRandomInt from './random-number.js';

// Генерация прогрессии
const progressionGenerator = () => {
  const count = getRandomInt(5, 10);
  const startNum = getRandomInt(1, 50);
  const increaseNum = getRandomInt(2, 15);
  const result = [startNum];
  for (let i = 0; i < count; i += 1) {
    const nextNum = result[i] + increaseNum;
    result.push(nextNum);
  }
  return result;
};

// Запускаем приветсвие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// Задаем количество раундов
const rounds = 3;

const progressionGame = () => {
  // Первый вопрос игры
  console.log('What number is missing in the progression?');
  // Цикл с вопросами
  for (let i = 0; i < rounds; i += 1) {
    // Генерируем прогрессию
    const arr = progressionGenerator();
    const hideElement = getRandomInt(0, arr.length);
    const rightAnswer = arr[`${hideElement}`];
    const removed = arr.splice(hideElement, 1, '..');
    // Задаем вопрос
    console.log(`Question: ${arr}`);

    // Спрашиваем ответ
    const userAnswer = readlineSync.question('Your answer: ');

    // eslint-disable-next-line eqeqeq
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default progressionGame;
