





const deleteVowels=(str)=>{

   let strArr=str.split("")

   for(let i=0;i<strArr.length;i++){

    if(strArr[i]=='a' || strArr[i]=='e' || strArr[i]=='i' || strArr[i]=='o' || strArr[i]=='u'){
       strArr[i]= strArr[i].replace(strArr[i],'')
    }

   }


    return strArr.join("")
}


console.log(deleteVowels("aaaa b aeiou"))


