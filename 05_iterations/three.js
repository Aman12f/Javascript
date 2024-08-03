// for of 

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hellow world";
for (const greet of greetings) {
    console.log(greet);
}

// MAPS 

const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")

console.log(map);

for (const [key,value] of map) {
    console.log(key ,':-', value);
}

const myObj = {
    "Game1":'NFS',
    "game2":'SpiderMan'
}
// NOTE : OBJECT IS NOT ITERABLE 

// for (const [key,value] of myObj) {
//     console.log(key ,':-', value);
// }


// NOTE : OBJECT KE ANDAR LOOP LAGANA HAI TO FOR IN LOOP 
// ARRAYS AND MAP KE ANDAR LOOP LAGANA HOGA TO FOR OF LOOP LAGANA 
