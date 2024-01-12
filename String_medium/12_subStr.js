




let t=1
const calculateString=(str)=>{
    if(t<=str.length){

        let newStr=""
        for(let i=0;i<str.length;i++){
            
            newStr=newStr+str.charAt(i)
            console.log(newStr)
        }
        
        calculateString(str.substring(t))
        t++
    }

    return 
}




console.log(calculateString("12345678"))