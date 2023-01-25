var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var ar = Math.max(...arr);
var min = Math.min(...arr);

console.log(min);
console.log(ar);
console.log(...arr);

//find max in array
let max = arr[0];
for(let i=0; i<arr.length; i++){
  if(arr[i]<max){
    max=arr[i];
  }
}
console.log(max);

//sort 2 digits numbers in array
arr.sort((a,b)=>a-b);
console.log(arr);

//second largest and second smallest in array
arr.sort((a,b)=>a-b);
let ans = []
  ans.push(arr[1]);
  ans.push(arr[arr.length-2])
console.log(ans);

//reverse array
//1st type
arr.reverse()
console.log(arr);
//2nd type
for (let b=0; b<arr.length; b++){
  
}
