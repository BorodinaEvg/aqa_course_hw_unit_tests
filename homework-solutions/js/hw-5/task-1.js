/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';

let i = 10

while (i>=0) {
    if (i>0) {
        evenNumbersResult = (evenNumbersResult + i + '-')
        i = i - 2
    } else  {
        evenNumbersResult = (evenNumbersResult + i)
        i = i - 2
    }
}


/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';

let smile = ":)"

let n_strok = 1

while(n_strok <= 5) {
    if (n_strok <= 4 ) {
        smilePatternResult  += smile.repeat(n_strok) + '\n'
        n_strok++

    } else {
        smilePatternResult  += smile.repeat(n_strok)
        n_strok++
    }
}





/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

replaceSpacesWithOneResult = text.replaceAll(" ", 1)
console.log(replaceSpacesWithOneResult)
 



export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
