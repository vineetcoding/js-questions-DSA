//Q-1=> Remove Dublicate in Array
let arr = [1,2,3,4,2];
//output => [1,2,3,4]

let a = arr.filter((value, i)=>arr.indexOf(value)===i);
console.log(a);

//Q-2=> Remove Dublicate in Nested Array
let array = [[1,2],[2,4],[4],[1,2]];
let str = [];
for (let i=0; i<array.length; i++){
    // console.log(array[i]);
    str.push(JSON.stringify(array[i]))
}
console.log(str);