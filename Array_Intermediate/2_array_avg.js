



const arrayAverage=(arr)=>{

    const finalSum= arr.reduce((acc,curr)=>{

        return acc+=curr

    },0)

    return finalSum/arr.length
}


console.log(arrayAverage([1,2,3,4,5]))