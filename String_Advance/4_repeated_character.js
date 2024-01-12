




const repeatedCharacter=(str)=>{

    let strArr=str.split("")

    let max= strArr.reduce((acc,curr)=>{

        if(acc[curr]){
            acc[curr]=++acc[curr]
        }
        else{
            acc[curr]=1
        }
return acc
    },{})

 
    let maxValue=0
    for(let [key,value] of Object.entries(max)){
        
        if(value>maxValue){

            maxValue=value
        }

    }

    // console.log(maxValue)

    for(let [key,value] of Object.entries(max)){
        
        if(value==maxValue){

            return key
        }

    }
   
}

console.log(repeatedCharacter("abcdeeebeaabbc"))







