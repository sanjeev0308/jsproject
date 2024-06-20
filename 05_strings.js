const name = "sanju"
const repocount =50 

// console.log(name + repoCount + "value");

console.log('Hello my name is ${name} an my repo is ${repocount}');

const gameName = new String('sanju-sk')

console.log(gameName[0])
console.log(gameName.__proto__);


console.log(gameName.lenth);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString =gameName.slice(-7, 3)
console.log(anotherString);

const newStringOne = "  sanju  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanju.com/sanjeev%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sp'))

console.log(gameName.split('-'))

