


const sum=(str)=>{

    let arr=str.split("")
    
    const result=arr.reduce((acc,curr)=>{
       return acc=acc+ parseInt(curr) 
    },0)

    return result
}


console.log(sum("9999999999"))