#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../src/random-number.js'

// Функция проверки числа на четность
const isEven = (int) => {
  if (int % 2 === 0) {
    return true;
  }
  return false;
};

// Задаем количество раундов
const rounds = 3;

// Запускаем приветсвие
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const evenGame = () => {
  // Первый вопрос игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Цикл с вопросами
  for (let i = 0; i < rounds; i += 1) {
    // Задаем случайное число
    const num = getRandomInt(1, 100) 

    // Задаем вопрос
    console.log(`Question: ${num}`);

    // Спрашиваем ответ
    const answer = readlineSync.question('Your answer: ');

    // Проверяем ответ
    if (answer === 'yes') {
      if (isEven(num)) {
        console.log('Correct!');
      } else if (!isEven(num)) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (answer === 'no') {
      if (!isEven(num)) {
        console.log('Correct!');
      } else if (isEven(num)) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    } else if (isEven(num)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if (!isEven(num)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}`);
  }
};

// Запускаем игру
evenGame();
