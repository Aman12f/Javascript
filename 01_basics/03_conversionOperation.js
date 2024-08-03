let score = "33"
console.log(score)

console.log(typeof(score))
console.log(typeof score)

let valutInNumber = Number(score)
console.log(typeof valutInNumber)

// NaN : not a number 
// 33=> 33 
//"33abc" => NaN
// true => 1 ; false => 0

// let isLoggedIn = "aman" => after boolean conversion ans is true
// let isLoggedIn = "" => after boolean conversion ans is false
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true ; 0=> false
//""=> false
//"aman"=> true

let someNumber = "fuck you "
console.log(typeof (String(someNumber)))

//---------------OPERATIONS---------------------

console.log("-------------------------OPERATIONS---------------------------------");
let val = 3 
let negValue = -val
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2**3)   // 2 to the power 3 

let str1= "hello"
let str2= " aman"
let str3 = str1+str2;
console.log(str3)
console.log("1"+2)
console.log(2+2+"2")
console.log("2"+2+2)

// NOTE : AGAR STRING FIRST HAI TO STRING MEIN CONVERT HOG AUR AGAR NUMBER FIRST TO FIR ADJACENT NUMBER ADD HOGE AND THEN OPERATION HOGA 

console.log(true)
console.log(+true)
console.log(+"")

let num1, num2 , num3 
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3]);


let gameCounter=3

// postfix operator
console.log(gameCounter++)
console.log(gameCounter)

// prefix operator
console.log(++gameCounter)
console.log(gameCounter)

// ---------------------------------
// FOR PREFIX AND POSTFIX OPERATOR 
let x = 3;                         
const y = x++;                      

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// -----------------------------------
