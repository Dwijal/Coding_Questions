




const minVal=(...a)=>{

 

   let min= a.reduce((acc,curr)=>{
            return Math.min(acc,curr)
        },Number.MAX_VALUE)
        
    return min
}


console.log(minVal(10000000,500,235))





