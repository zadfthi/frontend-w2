//  Function Declaration

function sapa(nama : string, umur : number) {
    console.log("Hello, I'm " + nama + "Umurku" + umur); 
    
}
sapa("a", 3000)

// Anonymous Function
const picker = function (name : string, role : string) {
 return name + role
}
let pick = picker("Gatot ", "Tank")
console.log(("Saya Ingin pergi ke semua lane menggunakan ")
+ pick);


//Arrow Function
let multiplication = (a : number, b : number) => {
    return a * b
}
let result = multiplication(8, 7)
console.log(result);


