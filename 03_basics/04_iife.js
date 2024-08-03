// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();  // YAHA SEMICOLON IS IMP 
// chai()  or (function defination of chai)(function execution) for this ()()

// NOTE : GLOBAL SCOPE KE POLLUTION KO HATANE KE LIYE HAM IIFE KA USE KRTE HAI 

((name)=>{console.log(`DB CONNECTED 2 ${name}`);})('Aman');  // YAHA BHI SEMICOLON IS IMP and THIS IS UNNAMED IIFE

// NOTE : BROWSER KE ANDAR this KI VALUE WINDOW OBJECT AATI HAI 
// Note : JAVASCRIPT IS SINGLE THREADED 