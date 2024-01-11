





const index=(arr,element)=>{

let i=0
let final=0
arr.forEach((e)=>{
    if(e===element){
        final=i
    }
i++
    
})
return final==0?"No matching element found":final
}


console.log(index([1,2,3,4,5],3))