



const identityMatrix=(matrix)=>{

    let flag=0

    if(matrix.length!==matrix[0].length)return "This is not Identity Matrix"

    for(let i=0;i<matrix.length;i++){

        for(let j=0;j<matrix[0].length;j++){

            if(i!==j){
                if(matrix[i][j]!==0){

                    return "This is not identity matrix"
                }
            }
            if(i==j){
                if(matrix[i][j]!==1)return "This is not identity matrix"
               
            }
        }
    }

return "This is identity Matrix"
}






console.log(identityMatrix([[2,0,0],[0,1,0],[0,0,1]]))

// if(identityMatrix([[1,0,0],[0,1,0],[0,0,1]])){

// }