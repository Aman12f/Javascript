// let , var , const

{} // THIS CURLY BRACES MEANS SCOPE 

if(true){
    // let a=1;
    // const b=2;
    // var c = 4;

    
}
// console.log(a);
// console.log(b);
// console.log(c);

//DOM : DOCUMENT OBJECT MODEL 
console.log("--------------Nested Function----------------");

function one(){
    const userName = "Aman"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()


// NOTE : CHOTE BADE SE ICECREAM LEKE KHA SAKTE HAI PR BADE CHOTE SE ICECREAM LEKAR NHI KHA SAKTE  

if(true){   //scope start 
    const username = "aman";
    if(username==="aman"){   //scope start
        const website = "youtube"
        console.log(username+website);
    } // scope end 
    // console.log(website);  // this statement considered as incorrect 

} // scope end 

// +++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++

function addone(num) {
    return num+1
}
console.log(addone(5));
// addTwo() // DECLARATION KE PAHLE APAN FUNCTION CALL USE NHI KR SAKTE
const addTwo = function(params){
 return params + 2;
}
console.log(addTwo(5));

// NOTE : DECLARATION KE PAHLE APAN FUNCTION CALL USE NHI KR SAKTE