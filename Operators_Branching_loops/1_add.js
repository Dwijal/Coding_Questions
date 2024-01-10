"use strict"

const input=[5,13,7,21,48]


const sum=input.reduce((s,ele)=>{
return s+=ele
},0)

console.log(sum)