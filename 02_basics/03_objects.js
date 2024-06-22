// singleton
// object.create

// objects literals

const mysym = Symbol("key1")

const JsUser = {
    name: "sanju",
    "full name": "sanjeev kumar",
    [mysym]: "mykey1",
    age: 21, 
    location: "narot",
    email: "sanju@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "sanju@sk.com"
// Object.freeze(JsUser)
JsUser.email = "sanju@sp.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo = function(){
console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());
