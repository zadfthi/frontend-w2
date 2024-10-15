"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.addres = address;
    }
    greet() {
        console.log(`Hi, nama saya ${this.name} rumah saya di Kota ${this.addres}`);
    }
}
class Employee extends Person {
    constructor(name, address, jobTitle) {
        super(name, address);
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`Aku ${this.name} bekerja sebagai ${this.jobTitle}`);
    }
}
let employee1 = new Employee('Jubaedah', 'Tegal', 'Dagang');
employee1.greet();
employee1.work();
