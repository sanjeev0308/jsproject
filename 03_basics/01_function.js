
// function sayMyName() {    
    
// console.log("s");
// console.log("a");
// console.log("n");
// console.log("j");
// console.log("u");
// }

// // sayMyName 

// // function addTwoNumbers(number1, numner2){

// //    console.log(number1 + number2 );
// // }

// function addTwoNumbers(number1, number2){

//    // let result = number1 + number2
//    // return result 
//    return number1 + number2
// }

// const result = addTwoNumbers(3, 5)
// // console.log("Result: ", result);


// // function loginUserMessage(username){

//    if(username === undefined){
//       // console.log("Please enter a username");
//       return
//    }
//    // return `${username} just logged in`
// }
// // console.log(loginUserMessage("sanju"));
// // console.log(loginUserMessage())


// function calculateCarPrice(val1, val2, ...num1){
 
//    // return num1
// }

// console.log(calculateCarPrice(200, 400, 500, 2000))

const user = {
   username: "sanju",
   price: 199
}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
      return
}

// handleObject(user)
handleObject({
   username: "sanjeev",
   price: 400
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
   return getArray[1]
}