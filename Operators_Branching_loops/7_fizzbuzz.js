let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30]



let result= arr.map((e)=>{
    if(e%3===0 && e%5===0)return "FizzBuzz"
    else if(e%5===0) return "Buzz"
    else if(e%3===0)return "Fizz"
    else return e

})

console.log(result)