import readlineSync from 'readline-sync';
import getRandomInt from './random-number.js';

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = (a + b);
  } else if (operator === '-') {
    result = (a - b);
  } else if (operator === '*') {
    result = (a * b);
  }
  return result;
};


// Запускаем приветсвие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// Задаем количество раундов
const rounds = 3;

const calcGame = () => {
  // Первый вопрос игры
  console.log('What is the result of the expression?');
  // Цикл с вопросами
  for (let i = 0; i < rounds; i += 1) {
    // Генерируем прогрессию
    const mathOperations = ['+', '-', '*'];
    const currentOperation = mathOperations[getRandomInt(0, 2)];
    const num1 = getRandomInt(11, 100);
    const num2 = getRandomInt(1, 10);
    const result = calc(num1, num2, currentOperation);
    // Задаем вопрос
    console.log(`Question: ${num1} ${currentOperation} ${num2}`);

    // Спрашиваем ответ
    const userAnswer = readlineSync.question('Your answer: ');

    // eslint-disable-next-line eqeqeq
    if (userAnswer == result) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
