const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button);

   button.addEventListener("click",(e)=>{
     console.log(e)
     if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id;
     }
     else if(e.target.id === 'blue')
     {
      body.style.backgroundColor = e.target.id;
     }
     else if(e.target.id === 'white')
     {
      body.style.backgroundColor = e.target.id;
     }
     else{
      body.style.backgroundColor = e.target.id;
     }
   })
})