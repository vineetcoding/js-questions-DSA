// Q-->   How to work map() function?
// Ans--> it is a function which is a help to transform the whole array
//         (it works like a loop),
//         we can pass function inside the map() function which logic we want to with whole array.
//         EX-

const arr = [5,1,3,2,6];

function double (e) {
    return e * 2;
}
const output = arr.map(double);
console.log(arr.map(double));

console.log(arr.map(double));

