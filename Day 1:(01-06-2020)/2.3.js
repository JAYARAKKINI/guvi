//Insert a new reader in the readers array for Nodejs.

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
	library[1].readers.readersarray = [{name:"Person 1",count:300},{name:"Person 2",count:400}]  //Insertin
	console.log(library[1].readers.readersarray)
}
college();    // Call function college
