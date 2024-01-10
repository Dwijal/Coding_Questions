


// let string=""
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
        
//         string+="*"
//     }
//     string+="\n"
// }

// console.log(string)

let n=5
let string=""
for(let i=1;i<=n;i++){
    let j,k
    for(j=1;j<=n-i;j++){
        
        string+=" "
    }

    for(k=j;k<=n;k++){
        string+="*"
    }
    string+="\n"
}

console.log(string)