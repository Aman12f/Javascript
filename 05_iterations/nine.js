const myNums = [1,2,3,4,5];
const sumWithInitial = myNums.reduce((acc,current)=>{
    console.log(`acc ; ${acc} and curr value ${current}`);
    return acc+current
},2)
console.log(sumWithInitial);
const mytotal = myNums.reduce((acc,curr)=>(acc+curr),0)
console.log(mytotal);

const shoppingCart = [
    {
        item:"js course",
        price:299
    },
    {
        item:"python course",
        price:999
    },
    {
        item:"mobile course",
        price:500
    },
    {
        item:"js course",
        price:299
    }
]

const ans = shoppingCart.reduce((acc,item)=>(item.price+acc),0)
console.log(ans); 