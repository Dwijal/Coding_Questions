




const medianMode=(arr)=>{
    let median=0
    let mode=0
   arr.sort((a,b)=>a-b)
    if(arr.length %2==0){

        median= (arr[((arr.length)/2)-1]+arr[(((arr.length)/2) +1)-1])/2
    }
    else{
     
        median= arr[((arr.length+1)/2)-1]
    }

    const obj=arr.reduce((acc,curr)=>{

        if(acc[curr]){
            acc[curr]=++acc[curr]
        }
        else{
            acc[curr]=1
        }
        // console.log(acc)
        return acc
    },{})


    let max=0
    for(let [key,value] of Object.entries(obj)){
        if(value>max){
            max=value
        }
    }
    
    for(let [key,value] of Object.entries(obj)){
        if(value==max){
            mode=key
        }
    }
    

    return [median,mode].join(" ")
    
}


console.log(medianMode([1,2,3,4,5,6,4,7,4,7]))



