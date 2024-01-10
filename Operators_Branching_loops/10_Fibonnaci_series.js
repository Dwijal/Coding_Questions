

const fibo=(d)=>{
    let a=0
    let b=1
    let str=""
    if(d===0 || d<0){
        console.log("Enter only greater than or equal to 0")
        return
    }
    if(d===1){

        console.log(a)
        return
    } 
    if(d===2){
        
        console.log(`${a} ${b}`)
        return
    }
    
    str="0 1 "
    for(let i=3;i<=d;i++){

        let sum= a+b
        str=str+sum+" "
        a=b
        b=sum
        
    }
    
    console.log(str)   
        
    return


}

fibo(5)