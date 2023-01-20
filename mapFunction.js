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

// Ex-2
// value of array conver in to binary

function binary(e) {
    return e.toString(2);
}
console.log(arr.map(binary))


//============ use of Filter()=========================

// filter odd value

function odd(e){
    return e % 2;
}
console.log(arr.filter(odd));

//=============use of reduce()================


// find sum in tradition method

function findSum(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(findSum(arr));


// find sum with reduce() function

const add = arr.reduce(function(add,curr){
    return add += curr;
},0);
console.log(add);


// find max with reduce() function

const result = arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0)
console.log(result);

// other real world example of reduce() function
const users = [
    {firstName:"akash", lastName:"singh", age:26},
    {firstName:"gaurav", lastName:"tomer", age:75},
    {firstName:"elon", lastName:"musk", age:50},
    {firstName:"donald", lastName:"trump", age:26}
];


//count how many persons of every unique age

const ans = users.reduce(function(acc, cur){
    if(acc[cur.age]){
        acc[cur.age]++;
    }else{
        acc[cur.age] = 1;
    }
    return acc;
},{});
console.log(ans);


// print first name of every person which have age less then 30

const answer = users.filter((x)=>x.age<30).map((y)=>y.firstName);
console.log(answer);