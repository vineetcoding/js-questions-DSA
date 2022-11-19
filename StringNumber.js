// Question:- Given a array containing both strings and numbers,
//             remove all the numbers and concat all the strings.
//             Return the resulting string
//             Input Format
//             An array
//             Output Format
//             Return a string

//            Sample Input:
//             ['Hello', 'World', 123]
//            Sample Output:
//             Hello World

//            Sample Input:
//             [1, 2, "My", 56, "name", "is", 5, "Aircampus"]
//            Sample Output:
//             My name is Aircampus

function createStr(arr){
    let sta="";
    // let numa=[];
    for (var i=0; i<arr.length; i++){
      if(typeof arr[i] === "string"){
        if(sta == ""){
          sta+=arr[i];
        }else{
          sta+=" "+arr[i];
        }
      }
    }
    return sta;
  }
  console.log(createStr([1, 2, "My", 56, "name", "is", 5, "Aircampus"]))