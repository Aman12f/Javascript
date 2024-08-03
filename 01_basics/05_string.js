const name = "aman"
const age = 21
console.log(name+"0012")
console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String('aman')
// note : string is object 
console.log(gameName)
console.log(typeof gameName)
console.log(gameName[1])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(1,3)
console.log(newString)

const anotherString = gameName.slice(-3,-1)
console.log("reversed value "+ anotherString)

let newString1 = "                  amanmotghare    "
console.log(`before trim ${newString1}`)
newString1= newString1.trim();
console.log(`after trim ${newString1}`)

console.log(`Replace the value of o by # , so the value is ${newString1.replace('o','#')}`)
console.log(newString1.includes("aman"))

let newGameName = "hii this is aman";
console.log(newGameName.split(" "))
console.log(typeof newGameName.split(" "))

// NOTE : FOLLOW THE BACKTICS SYMBOL 