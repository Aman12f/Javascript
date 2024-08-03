const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0;i<6; i++)
    {
      color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  // console.log(randomColor())
  let setTimeInterval = null;
  
  const startChangingColor = function(){
    if(!setTimeInterval)
    {
      setTimeInterval=  setInterval(()=>{
        document.body.style.backgroundColor = randomColor()
      },200)
    }
  }
  const stopChangingColor = function(){
    if(setTimeInterval)
    {
      clearInterval(setTimeInterval)
      setTimeInterval = null;
    }
  }
  
  document.querySelector("#start").addEventListener('click',startChangingColor)
  
  document.querySelector("#stop").addEventListener('click',stopChangingColor)