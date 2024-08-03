const myArr = [2,3,4,5]
console.log(myArr)
console.log(myArr[3])

const myHeroes  = ["spiderman","ironman","captainAmerica","laila"]
const myArr2 = new Array(0,0,1,2)
console.log(myArr2)

myArr.push(6,7)
console.log(myArr)
myArr.pop()

console.log(myArr)
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.indexOf(3))

const newArray = myArr.join()
console.log(typeof myArr)
console.log(typeof newArray)

console.log(`myArr before slice and splice A: ${myArr}`)
// SLICE AND SPLICE

//---SLICE---
const myn1 = myArr.slice(1,3)
console.log("B ",myArr)
console.log(myn1)



//---SPLICE---
const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)


//             ------------------------ ARRAY PART 2 ------------------

console.log("--------------------------Array part 2-----------------")
const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batmah"]
// marvel_heroes.push(dc_heroes)
// NOTE : push pushes the array into the existing array and concat returns the array 
const allheroes = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)
console.log(allheroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)
console.log(typeof all_new_heroes)
console.log(typeof allheroes)


let another_array = [1,2,3,4,[5,6,7],7,[6,7,[8,9,10]]]
console.log(another_array)

const real_another_array = another_array.flat(Infinity)
console.log(`One array of all the subarray is ${real_another_array}`)

console.log(Array.isArray([1,2,3,4]))
console.log(Array.isArray("aman"))

// to convert string or anything into array use : from

console.log(Array.from("Aman is a good boy"))
console.log(Array.from({
    name:"Aman",
    rollNo:"212"
}))   // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))