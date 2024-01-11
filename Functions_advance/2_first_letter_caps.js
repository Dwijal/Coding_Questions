



const firstLetterCaps=(str)=>{

    let strArr= str.split(" ")

    strArr.forEach((e,i,arr)=>{

        arr[i]= e.replace(e.charAt(0),e.charAt(0).toUpperCase())
    })

    
    return strArr.join(' ')
}



console.log(firstLetterCaps("abc iiii yesssDWI yoo"))