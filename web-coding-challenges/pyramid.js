/*
Задачка на разогрев
Напишите функцию, которая, при получении в качестве аргумента число большее либо равное нулю, возвращает подмассивы возрастающей длины.
pyramid(0) => [ ]
pyramid(1) => [ ['⛄️'] ]
pyramid(2) => [ ['⛄️'], ['⛄️', '⛄️'] ]
pyramid(3) => [ ['⛄️'], ['⛄️', '⛄️'], ['⛄️', '⛄️', '⛄️'] ]
*/

function pyramid(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      arr[i].push('⛄️');
    }
  }
  return arr;
}

console.log(pyramid(-1));
console.log(pyramid('ds'));
console.log(pyramid(2));
console.log(pyramid(3));
