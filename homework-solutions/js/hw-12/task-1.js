/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды 
после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. 
Обработайте промис методом .then и выведите результат его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
Обработайте промис методом .catch и выведите результат его реджекта в консоль
*/
function delayTwoSeconds () {
    return setTimeout(() => console.log("after 2 seconds"), 2000 )

}
delayTwoSeconds()

const result = new Promise((resolve, reject) =>  {
    resolve(1);

});

result.then((response) => console.log(response))

const result_2 = new Promise((resolve, reject) =>  {
    reject("Promise failed");

});

result_2.catch((resonse => console.log(resonse)))

/*
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
*/

function promiseNumber (number) {
     return new Promise ((resolve, reject) => {
        if (typeof number === "number") {
            resolve(number)
        }
        reject("Invalid type")
    })
}



promiseNumber(101).then(response => console.log(response)).catch((resonse => console.log(resonse)))


Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([First, Second, Third]) => {
    console.log(First)
    console.log(Second)
    console.log(Third)
}).catch((resonse => console.log(resonse)))

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(([First, Second, Third]) => {
    console.log(First)
    console.log(Second)
    console.log(Third)
})


/*
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/

async function promiseAllFunction() {
    try {
        const[First, Second, Third] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
        console.log(First)
        console.log(Second)
        console.log(Third)
    } catch(rej) {
        console.log(rej)
    }

}
promiseAllFunction()


async function promiseALLSettled(){
    try {
        const result = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        result.forEach(element => {
            console.log(element)
        });
    } catch(rej) {
        console.log(rej)
    }
    
}

promiseALLSettled()
    





