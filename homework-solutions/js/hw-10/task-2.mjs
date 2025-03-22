/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  const obj = arr.reduce((value,i) => {
    if (value.hasOwnProperty(i)) {
      value[i] += 1;
    } else {
      value[i] = 1;
    }
    return value;
  },{});

  return obj
}

const numbers = [1, 2, 2, 3, 4, 4, 4, 5]
console.log(countOccurrences(numbers))

export { countOccurrences };
