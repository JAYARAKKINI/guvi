//  Print the price of Javascript book in console.


function college()  // creating function named college
	{
		var library=[    //create a variable library
		{
			title:"Javascript",
			price:500,
			readers:[
            {
                name:"Person 1",
                count:300
            },
            {
                name:"Person 2",
                count:400
            }
            ],
            authorDetails:{
                name:"Raj",
                age:40
            },
        },
		{
			title:"Node js",
			price:600,
			readers:[],
			authorDetails:{
                name:"raj",
                age:40
        }
    }
 
]
	console.log(library[0].price);    //Printing the price of javascript book 
	
}
college();    // Call function college
