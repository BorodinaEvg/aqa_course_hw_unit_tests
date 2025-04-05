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
    } else if (firstName.length < 2 || firstName.length > 50) {
      throw new Error ("firstName must be between 2 and 50 characters")
    } else if (!/^[A-Za-z]+$/.test(firstName)){
      throw new Error ("firstName must contain only latin letters.")
    }
    this._firstName = firstName;

  }

  
  set lastName(lastName) {
    if (typeof lastName !== "string" || lastName.length < 1 || lastName.length > 50 || !/^[A-Za-z]+$/.test(lastName)) 
    throw new Error("Invalid name");
    this._lastName = lastName;
  }


  set profession(profession){
    if (typeof profession !== "string" || (!/^[A-Za-z ]+$/.test(profession.trim()))) throw new Error("Invalid profession");
    this._profession = profession;
  }


  set salary (salary){
    if (typeof salary !== "number") {
      throw new Error ("Salary must be a number")
    } else if (salary < 0 || salary >= 10000) {
      throw new Error ("Salary must be more than 0 and less than 10 000")
    } else if (isNaN(salary) || !salary){
      throw new Error ("Invalid salary")
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


    findEmployeeByName(firstName){
      const find_employee = this.#employees.find(el => el.firstName === firstName)
      if (!find_employee){
        throw new Error("Employee not found") 
      }

      return find_employee
    }

    removeEmployee(firstName){
      const index = this.#employees.findIndex(el => el.firstName === firstName)
      if(index === -1){
        throw new Error("Employee not found")
      }
      this.#employees.splice(index,1)

    }

    getTotalSalary(){
      return this.#employees.reduce((final , el) => final + el.salary , 0)
    }
  
}


export { Employee, Company };
