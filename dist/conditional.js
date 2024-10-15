"use strict";
var nilai = 90;
if (nilai >= 90) {
    console.log('Sama');
}
else if (nilai >= 60) {
    console.log('4');
}
else {
    console.log('E');
}
var test = "Test1";
switch (test) {
    case "Test1":
        console.log("Test1");
        break;
    case "Test2":
        console.log("test2");
        break;
    default:
        console.log("Testing");
}
const Grade = [2, 2, 3, 2, 4];
for (let i = 0; i < Grade.length; i++) {
    if (i == 3) {
        console.log(`Nilai 3 index : ${Grade[i]}`);
    }
}
