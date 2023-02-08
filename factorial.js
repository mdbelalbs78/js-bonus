// function sum(i) {
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(i - 1);
// }
// const resutl =sum(5);
// console.log(resutl);

// let factorial = 1;
// for(let i = 5; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const resutl = facto
rial(5);
console.log(resutl);