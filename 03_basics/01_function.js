
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}
sayMyName()

function addTwoNumbers(num1,num2){
    console.log(`sum of given two numbers is ${num1+num2}`);
}
function addTwoNumbers1(num1,num2){
   const result = num1+num2;
   return result;
   // RETURN KE BAD KOI BHI CODE HO WO RUN NHI KAREGA 
}
addTwoNumbers(3,4) // this is argument
addTwoNumbers('4',5)  
addTwoNumbers('4',"a")  

const result = addTwoNumbers(4,5);
console.log(`Result is : ${result}`)

const result1 = addTwoNumbers(4,5);
console.log(result1);

function loginUserMessage(username="Aman")
{
    if(!username) {
        console.log("please enter user name");
        return;
    }
    let temp=  `${username} just logged in`
    return temp
}
console.log(loginUserMessage("aman"));
console.log(loginUserMessage());

// val1 and val2 : constant banenge ; num1 : array banega , aur iske bad jitne bhi parameter daloge vo array mein chale jaenge 
function calculateCartPrice(val1,val2,...num1){
  return val1+val2;
}

console.log(calculateCartPrice(2,4,5,6,7,8,9));

const user = {
    username:"aman",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [2,4,1,6];
function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([4,5,6,1,2]));