



const encodeString=(str,shiftNo)=>{

let strArr=str.split("")

strArr.forEach((e,i,ar)=>{

    ar[i]=String.fromCharCode(e.charCodeAt(0)+shiftNo)
   
})

return strArr.join('')

}


console.log((encodeString("neogcamp",2)))





