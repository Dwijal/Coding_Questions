




const revNumber=(number)=>{

let no=number.toString()

    let arr=no.split("").reverse()
    
    return parseInt(arr.join(""))

}


console.log(revNumber(1234987))

