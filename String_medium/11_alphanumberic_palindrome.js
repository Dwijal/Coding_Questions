



const alphaNumbericPalindrome=(str)=>{

    if(str.search(/[0-9]/)>=0){
        let strArr=str.split("")
        let strRev=str.split("").reverse()
        // console.log(strArr,strRev)
        if(strArr.join("")==strRev.join("")) return "Palindrome Alphanumeric String"
        else return "Not Palindrome Alphanumeric String"

    }
    else return "String is not alphaNumeric"
}








console.log(alphaNumbericPalindrome("1DwiiwD"))

