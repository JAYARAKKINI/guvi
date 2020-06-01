// Print how many readers for javascript in console.

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
	var count = 0;
	for (var readers in library[0].readers) {
    count = count + 1;
    }
 
	console.log(count);//Printing the readers of javascript	
}
college();    // Call function college
