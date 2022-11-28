// Question:- Given two objects, check if they are equal.
//             If the given objects are equal return true else return false
            
//            Input Format
//             Two objects obj1 and obj2
//            Output Format
//             Return true if the objects are equal, else return false

//            Sample Input:
//             {
//             name: "Benny",
//             phone: "3325558745",
//             email: "benny@edabit.com"
//             },
//             {
//             name: "Jason",
//             phone: "9853759720",
//             email: "jason@edabit.com"
//             }
//            Sample Output
//             false
           
//            Sample Input:
//             {
//             name: "Jason",
//             phone: "9853759720",
//             email: "jason@edabit.com"
//             },
//             {
//             name: "Jason",
//             phone: "9853759720",
//             email: "jason@edabit.com"
//             }
//            Sample Output
//             true

//it return true if any one value is equal else false

function equalObject(obj1,obj2) {
    for(var key in obj1){
        for(var keys in obj2){
            if(obj1[key]==obj2[keys]){
                return true;
            }
        }
    }
    return false;
}
console.log(equalObject({
                            name: "Jasons",
                            phone: "9853759720",
                            email: "jason@edabit.com"
                        },
                        {
                            name: "Jason",
                            phone: "9853759720",
                            email: "jason@edabit.com"
                        }))
