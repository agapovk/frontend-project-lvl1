import readlineSync from 'readline-sync';
import getRandomInt from './random-number.js';

// Функция проверки числа на четность
const isPrime = (num) => {
  if (num < 2) return false;
  for (let k = 2; k < num; k += 1) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
};

// Задаем количество раундов
const rounds = 3;

// Запускаем приветсвие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const primeGame = () => {
  // Первый вопрос игры
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  // Цикл с вопросами
  for (let i = 0; i < rounds; i += 1) {
    // Задаем случайное число
    const num = getRandomInt(2, 100);

    // Задаем вопрос
    console.log(`Question: ${num}`);

    // Спрашиваем ответ
    const answer = readlineSync.question('Your answer: ');

    // Проверяем ответ

    if (answer === 'yes') {
      if (isPrime(num)) {
        console.log('Correct!');
      } else if (!isPrime(num)) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (answer === 'no') {
      if (!isPrime(num)) {
        console.log('Correct!');
      } else if (isPrime(num)) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (isPrime(num)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if (!isPrime(num)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default primeGame;
