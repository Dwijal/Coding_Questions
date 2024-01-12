



const countVC=(str)=>{
    str=str.toLowerCase().replaceAll(" ","")
    let strArr=str.split("")
    let v=0
    let c=0
    strArr.forEach((e,i,arr)=>{

        if(e=='a' || e=='e' || e=='i' || e=="o" || e=="u"){
           v++ 
        }
        else{
            c++
        }
        
    })
    
    return [v,c].join(" ")
}


console.log(countVC("aaaaaaaaa zz  ")) 