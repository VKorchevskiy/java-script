/*
Сложение двух больших чисел
Нужно написать функцию, которая складывает два больших числа.
Так как это большие числа, их сумма всегда будет за пределами Number.MAX_SAFE_INTEGER поэтому сложить их напрямую оператором + нельзя.
Числа представлены в виде строк. Функция, складывающая эти строки должна тоже возвращать строку с суммой.
Использовать bigInt нельзя.
Пример
add('571', '432') —> '1003'
*/

function add(a, b) {
  let result = '';
  let d = 0;
  let e = 0;
  for (let i = Math.max(a.length, b.length), j = 1; i >= 0; i--, j++) {
    const intA = a.length - j < 0 ? 0 : parseInt(a[a.length - j]);
    const intB = b.length - j < 0 ? 0 : parseInt(b[b.length - j]);
    if (i===0 && e===0) {
      return result;
    }
    if (intA + intB + e < 10) {
      result = intA + intB + d + result;
      d=0;
      e=0;
    }
    else {
      result = intA + intB - 10 + d + result;
      d=1;
      e=d;
    }

  }
  return result;
}

console.log(add('571', '432')); // 1003
console.log(add('571', '49')); //620
console.log(add('49', '571')); //620
console.log(add('55555', '555')); //56110
console.log(Number.MAX_SAFE_INTEGER);
console.log(add(''+(Number.MAX_SAFE_INTEGER+1),''+(Number.MAX_SAFE_INTEGER+1)));
console.log(9007199254740991n+1n+9007199254740991n+1n);// Для проверки предыдущего значения
