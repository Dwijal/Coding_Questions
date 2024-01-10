//Equilateral: all angles are equal
//Isosceles : any 2 angles are equi
//Scalene:all 3 angles are different
//Not a triangle: sum of all 3 is not equal to 180



const triangleType=(ang1,ang2,ang3)=>{
    if((ang1+ang2+ang3)!=180)return "Not a triangle"
    else if(ang1==ang2==ang3)return "Equilateral Trialngle"
    else if(ang1==ang2 || ang1==ang3 || ang2==ang3) return "Isoseceles triangle"
    else if(ang1!=ang2!=ang3)return "Scalene Triangle"
    
}


console.log(triangleType(60,90,30))