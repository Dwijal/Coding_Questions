




const rotateNo=(number,shiftNumber)=>{

    let arr= (number.toString()).split("")
    let subArray1= arr.slice(0,shiftNumber).reverse()
    let subArray2=arr.slice(shiftNumber,arr.length).reverse()
    arr=[...subArray1,...subArray2]
    return parseInt(arr.reverse().join(""))
    



}



console.log(rotateNo(1234567,2))

