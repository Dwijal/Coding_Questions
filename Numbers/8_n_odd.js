



const odd=(number)=>{
    let i=1
    let arr=[]
    while(number>0){

        arr.push(i)
        // console.log(i)

        i=i+2

        number--
    }

return arr.reverse().join(" ")
}


console.log(odd(5))