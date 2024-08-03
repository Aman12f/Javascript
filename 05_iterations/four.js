const myObj = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
     console.log(key ,":-" ,myObj[key]);
}

const arr = [2,3,4,5]

for (const key in arr) {
   console.log(arr[key]);
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of America");

console.log(map);

for (const [key,value] in map) {
    console.log(key ,':-', value);
}
for (const key in map) {
    console.log("key is ", key);
}
