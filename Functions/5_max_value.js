



const maxvalue=(...numbers)=>{

return ()=>{

    let max=numbers.reduce((acc,curr)=>{
        
        return Math.max(acc,curr)
        
    },Number.MIN_VALUE)
    
    return max
}
    
}


console.log(maxvalue(1344,5555555555,30000,9999)())