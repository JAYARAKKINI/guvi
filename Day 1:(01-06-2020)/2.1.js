//Update the count of Person 2 inside readers Array in Javascript;

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
			authordetails:{
                name:"raj",
                age:40
        }
    }
 
]
	var Person2=library[0].readers.count=500;	//Updating person2 value in readers of title "Javacript"
    console.log(Person2);
}
college();    // Call function college