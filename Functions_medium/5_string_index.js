


const stringIndex=(str,number)=>{


    let strArr=str.split("")

    let result=""
    for(let i=0;i<strArr.length;i++){

        if(i==number){
        // result=strArr[i]
        result =strArr[i]
        }
    }
    if(result==="")return "Please enter correct input"
    else return result
    

}


console.log(stringIndex("Dwijal",10))