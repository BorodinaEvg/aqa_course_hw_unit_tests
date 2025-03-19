/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];


function sortedByVowels(wordsArr = []) {
  function countWords (words){
    const spisok = 'aueoyi';
     return [...words].filter((el) => spisok.includes(el)).length
     
  }
  return wordsArr.sort((a, b) => countWords(a) - countWords(b))
}







export { sortedByVowels };
