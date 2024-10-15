"use strict";
//  Function Declaration
function sapa(nama, umur) {
    console.log("Hello, I'm " + nama + "Umurku" + umur);
}
sapa("a", 3000);
// Anonymous Function
const picker = function (name, role) {
    return name + role;
};
let pick = picker("Gatot ", "Tank");
console.log(("Saya Ingin pergi ke semua lane menggunakan ")
    + pick);
//Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);
