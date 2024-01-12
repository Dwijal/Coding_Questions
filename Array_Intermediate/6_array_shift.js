



const shitArray=(arr,shiftNo)=>{



let arr1=[...arr.slice(0,arr.length-shiftNo)]
let arr2=[...arr.slice(arr.length-shiftNo)]
arr1.reverse()
arr2.reverse()



arr=[...arr1,...arr2]
arr.reverse()
console.log(arr)



}

console.log(shitArray([1,2,3,4,5],2))