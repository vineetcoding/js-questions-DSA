// Question:- Given an array of string. Return a new boolean array.
//            If the item at each index contains the word aircampus
//            in it. It should be true else it should be false
            
//            Input Format
//             An array arr
           
//            Output Format
//             Return a boolean array

//            Sample Input:
//             ['ok', 'aircampus', 'hkjhjkhaircampus']
//            Sample Output:
//             [false, true, true]
           
//            Sample Input:
//             ['two', 'airjlkjcampus', 'jklhkhjkhkjhkj']
//            Sample Output:
//             [false, false, false]


function isAircampus(arr){
    let booleanArr= [];
    
    for( let i=0; i<arr.length; i++){
      if(arr[i].includes("aircampus")== true){
      
        booleanArr.push(true);
        
      }else{
        booleanArr.push(false);
      }
    }
    return booleanArr;
  }
  console.log(isAircampus(['ok', 'aircampus', 'hkjhjkhaircampus']))