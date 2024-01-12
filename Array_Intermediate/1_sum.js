




const sum=(arr)=>{

    const finalSum=arr.reduce((acc,curr)=>{
        return acc+=curr
    },0)

return finalSum
}



console.log(sum([1,2,3,4,5,6]))