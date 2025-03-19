/**
 * Создать строку с числами от 1 до 100.
 * Если число делится на 3 – добавить строку `"число - делится на 3"`.
 * Если число делится на 5 – добавить строку `"число - делится на 5"`.
 * Если число делится и на 3, и на 5 – добавить строку `"число - делится и на 3 и на 5"`.
 * Каждая следующая строчка начинается с новой строки.
 * Переменная `fizzBuzzResult` уже создана и содержит пустую строку.
 * Ожидаемый результат (фрагмент):
 * 1
 * 2
 * 3 - делится на 3
 * 4
 * 5 - делится на 5
 * ...
 * 15 - делится и на 3 и на 5
 * ...
 * 100 - делится на 5
 */
let fizzBuzzResult = '';

let i = 1

while (i <= 100) {
    if (i % 3 ==0 && i % 5 == 0) {
        fizzBuzzResult = fizzBuzzResult + (+i + " - делится и на 3 и на 5" + '\n') 
        i++} 
    else if (i % 3 ==0) {
        fizzBuzzResult = fizzBuzzResult + (+i + " - делится на 3" + '\n')
        i++}
    else if (i % 5 == 0) {
        fizzBuzzResult = fizzBuzzResult + (+i + " - делится на 5")
        if (i < 100){ 
            fizzBuzzResult = fizzBuzzResult + '\n'
        }
        i++} 
    else {
        fizzBuzzResult = fizzBuzzResult + i + '\n'
        i++
    }
}
    

//console.log(fizzBuzzResult)

export { fizzBuzzResult };
