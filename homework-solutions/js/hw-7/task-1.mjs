/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...mergeArrow) {
  let spisok = []
    for (const i of mergeArrow) {
      spisok.push(...i)
    }
    return spisok
}
mergeArrays([1,2], [3,4], [5,6])

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let new_sentence = sentence.split(" ")
  let new_sentence_2 = []

  // удалим пробелы в массиве
  for (const element of new_sentence) {
    if  (element !== '') {
      new_sentence_2.push(element);
  }
  }

    let final_sentence = []
    for (let i = 0; i < new_sentence_2.length; i++) {
        if (i === 0){ // условие для первого элемента

        final_sentence.push(new_sentence_2[i][0].toLowerCase() + new_sentence_2[i].toLowerCase().slice(1))

        } else  {
        final_sentence.push(new_sentence_2[i][0].toUpperCase() + new_sentence_2[i].toLowerCase().slice(1)); }
    }
             
    return final_sentence.join().replaceAll(",","_")
}

devideBy("iM  am sUpeR DEVELOP")

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n){
    
    let sum_result = [0 , 1]  
  
    for (let item = 0; item <= n; item++) {
      if (item == 0 || item == 1) {
        sum_result.push(item)
      }else {
          let sum_number = ((sum_result.at(-1)) + (sum_result.at(-2)))
          sum_result.push(sum_number)}
          
    }
  
    return sum_result.at(-1)
  }
        
  
fibonacci(0)



export { mergeArrays, fibonacci, devideBy };



