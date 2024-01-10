



const prime=(a)=>{

    if(a<0){
        console.log("Please enter positive number")
        return -1
    }

    if(a==0 || a==1){
        console.log(`${a} is not prime`)
        return -1
    }

    if(a==2){
        console.log(`${a} is only the even prime number`)
        return -1
    }

    let flag=0

    for(let i=2;i<=Math.floor(a/2);i++){

        if(a%i==0){
            flag=1
        }
    }

    return flag
}


const res=prime(107)


    if(res>=0){

        if(res)console.log("Not Prime")
        else console.log("Prime Number")
    }



