



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
		computer: 80
	}
];



const gradeOfStudents=(obj)=>{

const res= obj.reduce((acc,curr)=>{

    let {name,maths,science,english,computer}=curr

    let sum=maths+science+english+computer
    acc.push({name,sum})

    return acc

},[])


const finalResult= res.reduce((acc,curr)=>{

   let {name,sum}=curr
   
   let percent= (sum/400)*100
   
    if(percent>=75) {
        console.log(`${name} and ${percent} Grade A`)
        acc.push({name,percent,"Grade":"GradeA"})
    }

    else if(percent>=60 && percent<75) {
        console.log(`${name} and ${percent} Grade B`)
        acc.push({name,percent,"Grade":"GradeB"})
    }
    else if(percent>=35 && percent<60) {
        console.log(`${name} and ${percent} Grade C`)
        acc.push({name,percent,"Grade":"GradeC"})
    }
    else{

     console.log(`${name} and ${percent} Grade D`)
     acc.push({name,percent,"Grade":"GradeD"})
    }

    return acc

},[])

return finalResult

}


console.log(gradeOfStudents(studentDetails))