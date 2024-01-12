






const capitalCase=(str)=>{

    let count=1

    let strArr=str.split("")
    strArr.forEach((e,i,arr)=>{
        if(count<=6 && e!=" "){
            arr[i]= e.toUpperCase()
            count++
        }
        
    })

    return strArr.join("")

}


console.log("tic tac toe is a fun game")
console.log(capitalCase("tic tac toe is a fun game"))