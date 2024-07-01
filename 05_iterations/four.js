const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swoift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
        
    
}
const map = new Map()
map.set("IN", "India")
map.set("US", "United states")
map.set("FR", "France")

for (const key in map) {
    console.log(key);
}