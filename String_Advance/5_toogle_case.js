





const toogleCase=(str)=>{

    let strArr=str.split("")

    strArr.forEach((e,i,arr)=>{

        if(i%2==1){
            arr[i]=e.toUpperCase()
        }
    })

    return strArr.join("")
}




console.log(toogleCase("good afternoon"))