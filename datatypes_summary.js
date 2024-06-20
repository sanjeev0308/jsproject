// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = SVGSymbolElement('123')

console.log(id === anotherId);

const bigNumber = 373879217972187n


// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "spiderman", "doga"];
let myOjj = {
    name : "sanju",
    age : 21,
}

const myFunction = function(){
    console.log("Hello world");
}

