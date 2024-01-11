





const calculatePL=(costPrice,sellingPrice)=>{

if(sellingPrice-costPrice>0){

    return [sellingPrice-costPrice,"Profit"].join(" ")
}

if(sellingPrice-costPrice<0){

    return [sellingPrice-costPrice,"Losss"].join(" ")
}
else{
    return "No Loss and Profit"
}

}

console.log(calculatePL(-500,500))