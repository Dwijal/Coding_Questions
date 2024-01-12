





const findMaxMin=(str1,str2,str3)=>{

const arr=[str1,str2,str3]

arr.sort((a,b)=>a.length-b.length)

let minString=arr[0]
let maxString=arr[arr.length-1]
    
return [minString,maxString].join(" ")
} 


console.log(findMaxMin("dwijal","tejas","yes"))