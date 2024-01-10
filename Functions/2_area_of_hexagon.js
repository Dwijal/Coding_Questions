



const area=(side)=>{

    console.log(typeof(side))
    if(side<=0){
        console.log("Size cannot be zero or negative")
        return
    }

    // if(typeof(side)==="string" || typeof(side)==="object" || typeof(size)==="undefined"){
    //     console.log("It should be number not object nor string nor null value")
    //     return
    // }



    let calculateArea= (3*Math.sqrt(3)*Math.pow(side,2))/2

    calculateArea=Math.fround(calculateArea)
    calculateArea=(calculateArea.toFixed(2))

    return calculateArea
}


console.log(area(10))