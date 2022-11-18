// Question:-Given an object as input, return a nested array
            // containing all the keys and value.

            // Input Format
            // An object obj

            // Output Format
            // Return nested array.
        // Ex.1
            // Sample Input:
            // { a: 1, b: 2, c: 3 }
            // Sample Output:
            // [["a", "b", "c"], [1, 2, 3]]
        // Ex.2
            // Sample Input:
            // { key1: true, key2: false, key3: undefined }
            // Sample Output:
            // [["key1", "key2", "key3"], [true, false, undefined]]

function keyValue (obj) {
    var arra=[];
    var arrb=[];
    for(var key in obj){
      arra.push(key);
      arrb.push(obj[key]);
    }
    return [arra,arrb];
  }
  console.log(keyValue({ a: 1, b: 2, c: 3 }));