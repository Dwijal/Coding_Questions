

const reverseEachWord=(str)=>{

    let arrStr=str.split(" ")
    let arr
    
    arrStr.forEach((e,i,ar)=>{

        ar[i]=e.split("").reverse().join("")
    })

    // console.log(arrStr)
    return arrStr.join(" ")
}

// console.log("dwijal".split("").reverse())



const finalRes=reverseEachWord("we are neoGrammers")

console.log(finalRes)
