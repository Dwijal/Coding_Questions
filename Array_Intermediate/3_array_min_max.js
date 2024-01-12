




const minMax=(arr)=>{

    arr.sort()

    return  [arr[0],arr[arr.length-1]].join(" ")
    
}


console.log(minMax([1,2,3,4,5,6]))