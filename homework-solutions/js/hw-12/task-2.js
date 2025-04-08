/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
Преобразуйте респонс из JSON в объект
Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
Функция должна возвращать полученный объект из респонса
Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/


const url = "https://jsonplaceholder.typicode.com/todos";

async function createTodo(body) {
    try{
        const response = await fetch(url , {
            method: "post",
            headers: { 'Content-Type': 'application/json' } ,
            body: JSON.stringify(body),
        } );
        if (response.status !== 201){
            throw new Errow (`request failed with status ${response.status}`)
        }
        const data  = await response.json(); // преобразование JSON в объект JS

        for(const key in body){
            if (body[key] !== data[key]){
                throw new Errow (`requst body has a key = ${body[key]} , respose body has a key = ${data[key]}`);
            }
        }

        return data;

    } catch(e){
        console.error(e.message);
    } finally {
        console.log("Finish")
    } 
    
}

const toDoTestBody = {
    userId: 2000,
    title: "figaro",
    completed: true
  };

createTodo(toDoTestBody).then((result => console.log(result)))