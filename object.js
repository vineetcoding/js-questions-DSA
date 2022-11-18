// Question:- Given an object items and their price, and a number.
//            Return all the items whose price is greater than the
//            given number.

//             Input Format
//             An object obj and a number n
//             Output Format
//             Return a object.

//             Sample Input:
//             { "a": 3000, "b": 200, "c": 1050 }
//             1000
//             Sample Output:
//             { "a": 3000, "c": 1050 }
            
//             Sample Input:
//             { "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }
//             40
//             Sample Output:
//             {}


function expensive (obj, n){
    let ans= {};
    for (let key in obj){
        if (obj[key]>n){
            ans[key]=obj[key];
        }
    }
    return ans;
}
console.log(expensive({ "a": 3000, "b": 200, "c": 1050 }, 1000));