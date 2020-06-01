//  Create a New Object in the library for a new Book called SQL.

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
	library[2]={book:"SQL",price:500,readers:[]}; //creating new object 
	console.log(library[2]);    //Printing the new object
	
}
college();    // Call function college
