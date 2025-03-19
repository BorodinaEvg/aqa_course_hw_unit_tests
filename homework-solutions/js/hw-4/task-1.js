/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */

  let salary = 1000;
  let grade;

  
  
  if (salary >= 1000) {
    grade = "middle";
  } else if (salary < 1000) {
    grade = "junior";
  }

  console.log (grade);
  

  salary >= 1000 ? grade = "middle" : grade = "junior"; // тернарный оператор

  console.log (grade)
 


 