const tinderUser = new Object() // SINGLETON OBJECT
const tinderUser1 = {}   // NON-SINGLETON OBJECT 
console.log(tinderUser)
console.log(tinderUser1)

tinderUser.id = "BT21CSE212"
tinderUser.name="Tommy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"xyz@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Aman",
            lastName:"Motghare"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userFullName.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj5 ={5:"c",6:"d"}
const obj3 = {obj1,obj2,obj5} // IMPROPER WAY TO COMBINE OBJECTS 
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2) // PROPER WAY TO COMPINE OBECTS AND THIS '{}' BRACKET IS OPTIONAL
console.log(obj4)

const obj6 = {...obj1,...obj2} // COMBINING OBJECTS USING SPREAD OPERATOR
console.log(obj6)


// OBJECT ARRAY 
const users = [
    {
        id:1,
        email:"xyz@gmail.com"
    },
    {
        id:2,
        email:"xyz@gmail.com"
    },
    {
        id:3,
        email:"xyz@gmail.com"
    },
    {
        id:4,
        email:"xyz@gmail.com"
    },
    {
        id:5,
        email:"xyz@gmail.com"
    }
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))  // Note object ki keys ko array me dal diya taki further kahi bhi user kr sake
console.log(Object.values(tinderUser)) 

console.log(Object.entries(tinderUser)) 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // kya object ke pas di gai property hai ki nhi ye check krne ke liye 


const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//courese.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor:instructor} = course  // jab hame courseInstructor ki jagah instructor likhna hoo 
console.log(instructor);

// const navbar=({company})=>{

// }
// navbar(company = "hitesh")

// NOTE : WE GOT APIS IN JSON FORMAT 
// {
//   "name":"Aman",
//   "courseName":"js in hindi",
//   "price":"free"
// }




