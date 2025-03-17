/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {

  if (typeof word === "string"){
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase()
  } else if (typeof word !== "string"){
    return false
  }
     
}

console.log(isPalindrom(123))

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  
  if (typeof sentence !== 'string' || sentence === "") return []
  const new_strings = sentence.split(" ") // Рабиваем строку на массив строк 
  //console.log(new_strings)

  let longest_word = ""
  let list_word;
    
  for (const item of new_strings) {
    if (item.length > longest_word.length) {
      longest_word = item // присваиваем значение
      list_word = [item]
      //list_word.length = 0 // обнуляем массив, если нашли слово длиннее
      //list_word.push(item) // добавляем в массив новое значение
      
      } else if (item.length == longest_word.length) {
        list_word.push(item) }
       }

  return list_word 
}
  

console.log(findLongestWords ("Пожар лес пожар"))

export { isPalindrom, findLongestWords };
