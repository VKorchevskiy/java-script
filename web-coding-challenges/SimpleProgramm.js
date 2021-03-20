class SimpleProgramm {
/**
 * Преобразует строку
 * @param {String} s Строка
 * @returns {String} example: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 */
  accum = s => s.toLowerCase().split('').map((w, i) => w.toUpperCase() + w.repeat(i)).join('-');

/**
 * Функция, которая, при получении в качестве аргумента число большее либо равное нулю, возвращает подмассивы возрастающей длины
 * @param {Number} num величина основания пирамиды
 * @returns {Array} массив снеговиков:
 *
 * pyramid(0) => [ ]
 *
 * pyramid(1) => [ ['⛄️'] ]
 *
 * pyramid(2) => [ ['⛄️'], ['⛄️', '⛄️'] ]
 *
 * pyramid(3) => [ ['⛄️'], ['⛄️', '⛄️'], ['⛄️', '⛄️', '⛄️'] ]
 */
 pyramid(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      arr[i].push('⛄️');
    }
  }
  return arr;
}

/**
 * My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
 * I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 * When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
 * 180 is before 90 since, having the same "weight" (9), it comes before as a string.
 * All numbers in the list are positive numbers and the list can be empty.
 * @param {String} string
 * @returns {String} Example:
 * "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
 * "100 180 90 56 65 74 68 86 99"
 */
orderWeight(string) {
  const sum = e => e.split('').reduce((acc, curr) => acc + +curr, 0);
  return string.split(' '). sort((a, b) => {
    const sumA = sum(a);
    const sumB = sum(b);
    if (sumA === sumB) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    return sumA - sumB;
  }).join(' ');
}

/**
 * You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).
 * @param {Array} arr
 * @returns {Number} x * x * y
 */
missingValues(arr) {
  const hash = arr.reduce((acc, item) => {
     acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  let x, y;
  Object.entries(hash).map(([key, value]) => {
    if (value === 1) {
      x = key;
    }
    if (value === 2) {
      y = key;
    }
  });
  return x*x*y;
}

}
