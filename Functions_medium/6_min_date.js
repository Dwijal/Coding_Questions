



const minDate=(date1,date2)=>{

let d1=date1.split("-")
// console.log(d1)
let d2=date2.split("-")


if(parseInt(d1[2])!=parseInt(d2[2])){

    if(parseInt(d1[2])<parseInt(d2[2]))return date1
    else return date2

}
else{

    if(parseInt(d1[1])!=parseInt(d2[1])){

        if(parseInt(d1[1])<parseInt(d2[1]))return date1
        else return date2
    }
    else{

        if(parseInt(d1[0])>parseInt(d2[0]))return date2
        else return date1
    }
}
}


console.log(minDate("01-12-2024","01-01-2024"))