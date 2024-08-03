const user = {
    userName:"aman",
    price:999,
    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "Jay"
// user.welcomeMessage()

console.log(this);
// NOTE : THIS CURRENT CONTEXT KO REFER KARTA HAI
// NOTE : CONTEXT KA MATLAB HAI VALUE , IT MEANS USKE ANDAR KYA KYA VARIABLE KYA KYA VALUE HOLD KR RHE HAI YE 

// NOTE : BROWSER MEIN GLOBAL OBJECT WINDOW HAI

function chai() {
    let username = "Aman"
    console.log(this.username);
    // NOTE :  WE CAN ONLY USE THIS IN OBJECT 
}
const chai1 = ()=>{
    let username = "Aman"
    console.log(this);
    // NOTE :  WE CAN ONLY USE THIS IN OBJECT 
}
chai1()

const addTwo1 = (num1,num2)=>{
 return num1+num2
}
const addTwo2 = (num1,num2)=> (num1+num2); // this is implicit return 
const addThree = (num1,num2)=>{return num1+num2} // parenthesis use kre to return krna aniwarya hai , and this is explicit return 
console.log(addTwo1(4,5));
console.log(addThree(7,6));


