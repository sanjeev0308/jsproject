// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); 
// console.log(typeof myDate);


// let myCreateDate = new Date(2024, 5, 21)
// let myCreateDate = new Date(2024, 5, 21, 5, 52)
// let myCreateDate = new Date("2024-05-21")
let myCreateDate = new Date("05-25-2024")


// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    calendar: myDate
} )