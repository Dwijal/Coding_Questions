let num1=8
let num2=23
let num3=17


let result=Math.max(num1,num2,num3)
console.log(result)

//using if else

if(num1>num2 && num1>num3){
    console.log(`${num1} is greater`)
}
else if(num2>num1 && num2>num3){
    
    console.log(`${num2} is greater`)
}
else{
    console.log(`${num3} is greater`)

}