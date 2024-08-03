//singleton

//object literals
// object.create()

const mySym = Symbol("key1")
const JsUser = {
    name:"Aman",
    age:21,
    location:"Jaipur",
    [mySym]:"mykey1",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
console.log(JsUser)
console.log(JsUser.location)
console.log(JsUser["location"])
console.log(JsUser["mySym"])
console.log(typeof(JsUser["mySym"]))

// Object.freeze(JsUser) // cannot make changes in object after doing this
JsUser.email = "aman0012@gmail.com"

JsUser.greeting = function(){
    console.log("Hello js user")
}
// string interpolation 
JsUser.greeting2 = function(){
    console.log(`Hello js user2 , ${this.name}`)
}
// console.log("greeting 1 : ",JsUser.greeting)
console.log("greeting 2 : ",JsUser.greeting())
console.log("greeting 2 : ",JsUser.greeting2())
