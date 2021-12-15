import readlineSync from 'readline-sync';
import getRandomInt from './random-number.js';

// Поиск наибольшего общего делителя
const findGCD = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      // eslint-disable-next-line no-param-reassign
      number1 -= number2;
    } else {
      // eslint-disable-next-line no-param-reassign
      number2 -= number1;
    }
  }
  return number1;
};

// Запускаем приветсвие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// Задаем количество раундов
const rounds = 3;

const gcdGame = () => {
  // Первый вопрос игры
  console.log('Find the greatest common divisor of given numbers.');
  // Цикл с вопросами
  for (let i = 0; i < rounds; i += 1) {
    // Генерируем два числа
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);

    // Задаем вопрос
    console.log(`Question: ${number1} ${number2}`);

    // Спрашиваем ответ
    const answer = readlineSync.question('Your answer: ');

    // eslint-disable-next-line eqeqeq
    if (answer == findGCD(number1, number2)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${findGCD(number1, number2)}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default gcdGame;
