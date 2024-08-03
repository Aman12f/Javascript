if(2=="2")
{
    console.log("executed1");
}
if(2==="2")
{
    console.log("executed2");
}
else{
    console.log("executed2 not executed");

}
// == only for checking 
// === is used for checking and also typechecking  it means strict check 

if(2!="2"){
    console.log("not equal to 1");
}
if(2!=="2"){
    console.log("not equal to ");
}

const a = true;
const b = true;

if(a && b ){
    console.log("true");
}
const key = 2
switch (key) {
    case 1:
        console.log("one");
        break;
        case 2:
        console.log("two");
        
        break;
        case 3:
        console.log("three");
        
        break;

    default:
        break;
}

const temp = "";
if(temp) console.log("Have temp");
else console.log("Not have temp");


const temp1 = "am";
if(temp1) console.log("Have temp1");
else console.log("Not have temp1");

const temp2 = [];
if(temp2) console.log("Have temp2");
else console.log("Not have temp2");
  

// FALSE Value:{
//     false,
//     0,
//     -0,
//     BIGINT 0n,
//     ""
//     null,
//     undefined,
//     NaN: not a number 
// }

//other else value will go into TRUE

// TRUE value : {
//     "0",
//     "false",
//     " "
//     [],
//     {},
//     // function(){}
// }


// HOW TO CHECK ARRAY IS EMPTY OR NOT ;
const useEmail = []
if(useEmail.length===0) console.log("True");
else console.log("False");

// HOW TO CHECK whether object IS EMPTY OR NOT ;
const obj = {}
if(Object.keys(obj).length===0) console.log(("Object empty"));
else console.log("Object Not Empty");

// false == 0 => ans = true
// false == "" => ans = true
// 0== false => ans = true

let val1;
val1 = ""?10:13;
val2 = 5?10:13;
val3 = 1?10:13;
val4 = 0?10:13; 
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// eg: val1 = a?b:c it means if a is not null or empty string or not any value comes under FALSE value then 10 will print 
// if a comes under FALSE value then 13 will print 

val5 = 9 ?? 11 ?? 10
val6 = null ?? 11 ?? 10 //null coalscense operator 
console.log(val5);
console.log(val6);


// terniary operator 
// condition ? true:false
