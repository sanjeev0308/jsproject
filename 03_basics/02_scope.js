// var c = 300 
let a = 300
if (true) {
    let a = 10 
    const b = 20
//    console.log("INNER ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){ 
    const username = "sanju"
    function two(){
        const website ="youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "sanju"
    if (username === "sanju"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(wesite);
}


// console.log(username);

  

// +++++++++++++++++++++++ intresting ++++++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(4))


const addTwo = function(num) {
    return num + 2
}
addTwo(5)