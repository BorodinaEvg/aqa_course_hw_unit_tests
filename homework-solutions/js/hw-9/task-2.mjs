/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!["name", "age"].every(key=> key in character)) throw new Error ("invalid key");
  return characters.push({name: character.name, age: character.age})
}

//addCharacter(characters)
//console.log(characters)

function getCharacter(name) {
return characters.find(el=> el.name === name)
}

//console.log(getCharacter('Fred'))

function getCharactersByAge(minAge) {
  if(typeof minAge != 'number') throw new Error ("invalid type of minAge");
  return characters.filter(el => el.age >= minAge)
}
//console.log(getCharactersByAge(40))


function updateCharacter(name, newCharacter) {
const get_character = getCharacter(name)
if (!get_character) throw new Error(`Name "${name}" not found`);
Object.assign(get_character, newCharacter);
return characters;


}


function removeCharacter(name) {
  const index = characters.findIndex((el)=> el.name === name);
  if (index === -1) throw new Error(`Name "${name}" not found`);
  characters.splice(index, 1);
  return characters;
  

}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
