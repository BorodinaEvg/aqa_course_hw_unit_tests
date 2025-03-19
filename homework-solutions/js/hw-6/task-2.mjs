/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;

const competitorPizzas_1 = [];


resultUnique = []

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzas_1.push(competitorPizzas[i].toLowerCase());
}

for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzas_1.includes(myPizzasT1[i].toLowerCase())) {
    resultUnique.push(myPizzasT1[i]);
  } else {
    resultNull = null;
  }
}
for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzas_1.includes(myPizzasT2[i].toLowerCase())) {
    resultUnique.push(myPizzasT2[i]);
  } else {
    resultNull = null;
  }
}

export { resultNull, resultUnique };
