



const calculate=(side,shape)=>{

if(shape.toLowerCase() ==="square"){
let area=side*side
let perimeter= 4*side

return [area,perimeter].join(" ")
}

if(shape.toLowerCase()==="cube"){
let area=6*side*side
let volume=Math.pow(side,3)
return [area,volume].join(" ")
}


}


console.log(calculate(5,"cube"))