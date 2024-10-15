// variable

let namaBapak: string = "Test"

var age : number = 18;

const asalsekolah: string = "Test"

// Data Type
var myName: string = 'Test'

var age: number = 18

var isalive: boolean= true

// var x: undefined
var x: null = null 

// Non Primitive data type

var person: {name: string, age: number} // Object Data Type
= {name: "test", age: 1}

var numbers: number[] = [1, 2, 3, 4] //Array Data Type

var user: [string, number] = ['Test', 100] //Tuple Data Type

var random: any = 25; //Any Data Type
// var random: any = "test"

var id: string | number; //Union Data Type
id = 'test'

const userTest = {
    name : "Test",
    age : 10,
};


function calculatedGrade(course1 : number, course2: number) : string {
    return (course1 + course2) > 70 ? 'A' : 'B';
}
