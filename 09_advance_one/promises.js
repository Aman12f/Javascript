const promiseOne = new Promise(function(resolve,reject){
     // DO AN ASYNC TASK 
     // db calls , cryptography 
     setTimeout(() => {
        console.log("async task is complete");
        
     }, 1000);   
     resolve()
})
promiseOne.then(function(){
    console.log("Promised consumed ");
    
})

console.log("---------------------------------------------------");
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task two is complete");
        
    }, 1000);
    resolve()
}).then(function(){
    console.log("Async two resolved ");
    
})
console.log("---------------------------------------------------");

const thirdpromise = new Promise(function(resolve,reject){
setTimeout(() => {
    resolve({username:"chai",email:"example@gmail.com"})
}, 1000);
})

thirdpromise.then(function(user){
  console.log(user);
  
})
console.log("---------------------------------------------------");


const forthPromise = new Promise(function(resolve,reject){
  setTimeout(() => {
    // let error = true;
    let error = false;
    if(!error){
        resolve({username:"aman",password:"1714"})
    }
    else{
        reject("ERROR: something went wrong")
    }
  }, 2000);
})

forthPromise.then(function(user){
   console.log("user data is ", user);
   return user.username;
})
.then((username)=>{
    console.log("username is ",username);
    
})
.catch((error)=>{
    console.log("error is ", error);
  })
.finally(()=>{
    console.log("The promise is either resolved or rejected ");
    
})
console.log("---------------------five------------------------------");

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false;
        // let error = true;
        if(!error){
            resolve({username:"javascript",password:"1714"})
        }
        else{
            reject("ERROR: js went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
 try {
    console.log("hii this is try");
    
    const response = await promisefive
    console.log("response is ", response);
} catch (error) {
     console.log("hii this is catch");
    console.log(error);
    
 }
}
consumePromiseFive();

async function getAllUsers() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response);
    
    const data = await response.json();
    console.log(data); 
   } catch (error) {
     console.log(error);
     
   }
}
getAllUsers();

async function getAllUsers1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        
    }).catch((error)=>{
      console.error(error);
    })
}
   
getAllUsers1();




