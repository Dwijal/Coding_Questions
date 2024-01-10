

const result=(day)=>{
    let str=day.toLowerCase()
    if(str==="satuarday" || str==="sunday"){
        console.log("It is weekend")
    }
    else if(str==="monday" || str==="tuesday" || str==="wenesday" || str==="thursday"
    || str==="friday"){
        console.log("It is weekday")
    }
    else{
        console.log("Please provide a proper day")
    }

}


result("wenesDAy")