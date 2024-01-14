const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];




const orderDetails=(obj)=>{

    let totalOrder=0
    let totalCartValue=0
    let totalDiscount=0
    let tax=0
    const result= obj.reduce((acc,curr,i)=>{

        let {id,name,count,price,discount}=curr
        totalOrder+=count
        totalCartValue=totalCartValue+(count*price)
        totalDiscount=totalDiscount+((count*price)*discount)
        tax=(totalCartValue-totalDiscount)*0.18
        if(i>=obj.length-1)
        acc.push({totalOrder,totalCartValue,totalDiscount,tax})
        return acc
    },[])

    
    return result

}




console.log(orderDetails(cartItems))