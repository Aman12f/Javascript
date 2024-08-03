const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(typeof(balance.toString))
console.log(balance.toFixed(2))

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)




//++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++
console.log("--------------------After maths-------------------------")

console.log(Math.abs(-4))
// abs negative value ko positive value krta aur positive value ko positive hii rakhta
console.log(Math.round(4.8)) 
console.log(Math.floor(4.6))
console.log(`Min value is ${Math.min(3,2,4,1)}`)
console.log(`Random value is ${Math.random()}`)
console.log(`Random value is ${Math.floor(Math.random()*10+1)}`)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)