



const replaceNum=(arr,searchEle,replaceEle)=>{


    for(let i=0;i<arr.length;i++){
    
        if(arr[i]===searchEle){
            arr[i]=replaceEle
        }
    }
   return arr
}

console.log(replaceNum([1,2,3,4],2,-111))