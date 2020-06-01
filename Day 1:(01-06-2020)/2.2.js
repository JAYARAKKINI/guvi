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
			authorDetails:{
                name:"raj",
                age:40
        }
    }
 
]
	library[0].authorDetails.emai1="email1@gmail.com";	//Inserting a new key called email in authorDetails
    console.log(library[0].authorDetails.emai1);
	library[1].authorDetails.email="email2@gmail.com";  //Inserting a new key called email in authorDetails
	  console.log(library[1].authorDetails.email)
}
college();    // Call function college
