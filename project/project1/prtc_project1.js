console.log("Hii aman ");
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.btn')
console.log(buttons);

buttons.forEach((btn)=>{
   btn.addEventListener("click",(e)=>{
        if(e.target.id==="red")
        {
            body.style.backgroundColor = e.target.id
        }
   })
})