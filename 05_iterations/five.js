const coding = [1,2,3,4,5,6]
 

coding.forEach(function (item){
    console.log(item+10);
})

coding.forEach((item)=>{
    console.log("aman",item);
})

function printMe(element){
    console.log("hii",element);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
     console.log(item,index,arr);
})

// NOTE : FOR EACH FUNCION HAVE item,index, and complete array

const myCoding = [
    {
        languageName : "javascript",
        languageFileName:"js"
        
    },
    {
        languageName : "java",
        languageFileName:"java"

    },
    {
        languageName : "python",
        languageFileName:"py"

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName,item.languageName);

})