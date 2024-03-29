const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 300
	}
];




const lowestMarks=(obj)=>{


    const result=obj.reduce((acc,curr)=>{

       let {name,maths,science,english,computer}=curr

       let sum=maths+science+english+computer

        acc.push({name,sum})

        return acc
    },[])

    let minSum=Number.MAX_VALUE
    let finalName=""
    const finalResult=result.reduce((acc,curr)=>{

        let {name,sum}= curr

        if(sum<minSum){
            minSum=sum
            finalName=name
            acc[0]={finalName,minSum}
        }

        return acc
    },[])
  
return finalResult
}





console.log(lowestMarks(studentDetails))