


const sumMatrix=(a,b)=>{

    if(a.length!==b.length || a[0].length!==b[0].length){
        return "Cannot sum because matrix lengths are not similar"
    }

    const finalMatrix= []


    for(let i=0;i<a.length;i++){
        finalMatrix[i]=[]
        for(let j=0;j<a[0].length;j++){

            finalMatrix[i][j]=a[i][j]+b[i][j]
        }
    }

    return finalMatrix
    }


console.log(sumMatrix([[1,2,3],[4,5,6]],[[1,2,3],[5,6,7]]))



