class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set employeeName(name) {
        this.name = name;
    }
    get employeeName() {
        return this.name;
    }

    set employeeAge(age) {
        this.age = age;
    }

    get employeeAge() {
        return this.age;
    }
    static defaultEmployee () {
        return 'This is a defaultEmployee';
    }
    getClassName() {
        return 'Class Employee';
    }
}

class MaleEmployee extends Employee {
    getClassName() {
        return super.getClassName();
    }
}

var male = new MaleEmployee();
console.log('Male ', male.getClassName);

console.log(Employee.defaultEmployee());

var employee = new Employee();
employee.employeeName = 'Trieu Ngo Quang';
employee.employeeAge = 21;
console.log(employee)
