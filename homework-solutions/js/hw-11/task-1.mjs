class Employee {
  #salary
  constructor(firstName, lastName, profession, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName
  }

  get profession(){
    return this._profession;
  }

  get salary(){
    return this.#salary;
  }


  set firstName(firstName){
    if (typeof firstName !== "string") {
      throw new Error ("firstName must be a string")
    }
    this._firstName = firstName;

  }

  set lastName(lastName){
    if (typeof lastName !== "string") {
      throw new Error ("lastName must be a string")
    }
    this._lastName = lastName;

  }


  set profession(profession){
    if (typeof profession !== "string") {
      throw new Error ("profession must be a string")
    }
    this._profession = profession;

  }


  set salary (salary){
    if (typeof salary !== "number") {
      throw new Error ("Salary must be a number")
    } else if (salary < 0) {
      throw new Error ("Salary must be more than 0")
    }
    this.#salary = salary;
  
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }

}


class Company {
  #employees = []
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address
  }

  get title(){
    return this._title;
  }

  get phone(){
    return this._phone;
  }

  get address(){
    return this._address;
  }

  set title(title){
    if (typeof title !== "string") {
      throw new Error ("Title must be a string")
    }
    this._title = title;
  }

  set address(address){
    if (typeof address !== "string") {
      throw new Error ("Address must be a string")
    }
    this._address = address;

  }

  set phone (phone){
    if (typeof phone !== "string") throw new Error("Invalid phone"); 
    this._phone = phone;
  }
  addEmployee(employee){
    if(!(employee instanceof Employee)) {
      throw new Error ("Invalid employee")
    }
    this.#employees.push(employee)

  }

  getEmployees(){
    return this.#employees
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

}


export { Employee, Company };
