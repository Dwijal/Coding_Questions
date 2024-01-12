





const sum=(arr1,arr2)=>{

    let arr3=[...arr1,...arr2]

    const finalSum=arr3.reduce((acc,curr)=>{
        acc+=curr
        return acc
    },0)

    return finalSum
}


console.log(sum([1,2,3],[4,5,6]))