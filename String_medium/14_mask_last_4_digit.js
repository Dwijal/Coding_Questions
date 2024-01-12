







const maskDigits=(str)=>{
 
    let strArr=str.split("")
    let count=1
    for(let i=strArr.length-1;i>=0;i--){

        if(count<=4){
            strArr[i]="x"
        }
        count++
    }

    return strArr.join("")
}



console.log(maskDigits("123456789101112999999999999999"))