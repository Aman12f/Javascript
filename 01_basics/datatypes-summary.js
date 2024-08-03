// kis tarha se data ko store and access kiya jata hai uus basis pe data ko two parts mein divide kiya hai 
// {
//     1: PRIMITIVE, 
//     2: NON-PRIMITIVE OR REFERENCE TYPES 
// }

// 7 TYPES 
//PRIMITIVE :  STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL, BIGINT { PRIMITIVE DATA TYPE MEIN HAME DATA KI VALUE COPY KR KE DI JATI HAI}

//REFERENCE OR NON PRIMIVIE  {
// IS DATA TYPE MEIN ISKA MEMORY REFERENCE DIRECTLY ALLOCATE KIYA JAA SAKTA HAI 
// }

// ARRAY, OBJECTS , FUNCTIONS 

// JavaScript is a dynamically typed language. 
// This means that variable types are determined at 
// runtime rather than at compile-time, and you don't 
// have to explicitly declare the data type of a variable 
// when you define it. Here are some key characteristics of
//  dynamically typed languages like JavaScript:--------------

const id = Symbol("123")
const id1 = Symbol("123")
console.log(id === id1)


//array, objects , functions

const heroes = ["shaktiman","nagraj","doga"]
const myobj = {
    name: "Animation",
    age:22
}
console.log(myobj)

const myfunc = function(){console.log("This is my function")}
myfunc()

const func =()=>{
    console.log("Love you")
}
func();
console.log(typeof myobj)

console.log(typeof myfunc)
console.log(typeof func)
console.log(typeof heroes)


//###############################################################
// STACK (Primitive ) , Heap (Non-Primitive)
// Note : Stack se hame memory ki copy milti hai aur heap se hame reference milta hai 

let myYouTubeName = "amanmotghare"
let anotherName = myYouTubeName
anotherName = "chaiaurcode"

console.log(anotherName)
console.log(myYouTubeName)

let user = {
    email:"aman@gmail.com",
    upi:"aman@ybl"
}
let user2 = user;
// Note : user2 ko user 1 ka reference mila hai , so agar user2 mein koi change hoga to user 1 mein bhi change hoga qu ki yaha reference diya hai , na ki copy
console.log(user)
user2.email="changedmail@gmail.com"
console.log(user)


// Note : Jitne bhi primitive data types hai vo stack mein jate hai and jitne bhi non-primitive data types hai vo heap mein jate hai 