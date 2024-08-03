const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const myNumbers1 = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((element)=>{
    return element+10
})

console.log(newNums);

// () parenthesis  // parenthesis mein return statement likhna nhi hota 
// {} scope // scope mein return statement likhna hota hai

 const newNums1 = myNumbers1.map((num)=>(num+2)).map((num)=>(num*10)).filter((num)=>(num > 40))
//  note : this is called as chaining 
 console.log(newNums1);

//  note : in this chaining the array will process from left to right 

// NOTE : FILTER : condition leke value return karega ;
// MAP : array elements pe operation perform krke new array return karega;
// FOREACH : array elements ko traverse karega aur uspe koi conditions bhi lag sakta hai 