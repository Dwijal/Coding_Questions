

const transpose=(matrixA)=>{


    let transposeMatrix=[]

    for(let j=0;j<matrixA[0].length;j++){

        transposeMatrix[j]=[]

        for(let i=0;i<matrixA.length;i++){

            transposeMatrix[j][i]=matrixA[i][j]
        }
    }
    
return transposeMatrix
}



console.log(transpose([[1,2,3],[4,5,6]]))