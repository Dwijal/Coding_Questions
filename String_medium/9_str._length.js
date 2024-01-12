




const calculateLength=(str)=>{

    let strArr=str.split("")

    let count=0
    strArr.forEach((e,i,arr)=>{

        count++
    })

    return count>7?true:false
    
}



console.log(calculateLength("dwi"))