"use strict";
// var nilaiTugas: number[] = [30]
// // nilaiTugas = [98, 88, 75, 66, 30]
// if (nilaiTugas >= [90]) {
//     console.log("Nilai Anda A");
// } else if (nilaiTugas >= [75]) {
//     console.log('Nilai Anda B');
// } else if (nilaiTugas >= [60]) {
//     console.log('Nilai Anda C');
// } else {
//     console.log('Nilai Anda D');
// }
const listNilai = [98, 88, 75, 66, 30];
for (let i = 0; i < listNilai.length; i++) {
    const tampungNilai = listNilai[i];
    if (tampungNilai >= 90) {
        console.log(`Nilai Anda A : ${tampungNilai}`);
    }
    else if (tampungNilai >= 75) {
        console.log(`Nilai Anda B : ${tampungNilai}`);
    }
    else if (tampungNilai >= 60) {
        console.log(`Nilai Anda C : ${tampungNilai}`);
    }
    else {
        console.log(`Nilai Anda D : ${tampungNilai}`);
    }
}
const nilaiUjian = [85, 92, 67, 58, 75];
let tampungGanjil = 0;
let tampungGenap = 0;
for (const ganjilGenap of nilaiUjian) {
    if (ganjilGenap % 2 === 0) {
        tampungGenap++;
    }
    else {
        tampungGanjil++;
    }
}
console.log('');
console.log(`Jumlah nilai Genap : ${tampungGenap}`);
console.log(`Jumlah nilai Ganjil : ${tampungGanjil}`);
