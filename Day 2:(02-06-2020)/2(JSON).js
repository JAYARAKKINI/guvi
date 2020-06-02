//  JSON Task

//	Basic Tasks to play with JSON
//	Problem 0:Part A

 var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep","pre-sleep naps"],
    weight: 3
    }
    ]
   }
  
// Problem 0:Part A-1.Add height and weight to Fluffy

	function add(){
		cat["height"]="150";
		cat["width"]="300";
	}
	add()
	console.log(cat)	//{name: "Fluffy", activities: Array(2), catFriends: Array(2), height: "150", width: "300"}
   
// Problem 0:Part A-2.Fluffy name is spelled wrongly. Update it to Fluffyy

	function update(){
		cat[0].name="Fluffyy"
	}
	update()
	console.log(cat);	//{name: "Fluffyy", activities: Array(2), catFriends: Array(2)}
	
//	Problem 0:Part A-3.List all the activities of Fluffyy’s catFriends

	function activities(){
		for(var i=0;i<cat.catFriends.length;i++)
		{
			for(var j=0;j<cat.catFriends[i].activities.length;j++)
			{
				console.log(cat.catFriends[i].activities[j]);      // list the activities
			}
		}
	}
	activities();
	
//	Problem 0:Part A-4.Print the catFriends names.

	function CFname(){
    for(var i=0;i<cat.catFriends.length;i++)
	{
		console.log(cat.catFriends[i].name);	// print the cat friends name
	}			
	}
	CFname();  
	
//	Problem 0:Part A-5.Print the total weight of catFriends

	function Totalw(){
    var count=0
    for(var i=0;i<cat.catFriends.length;i++){
    count=count+cat.catFriends[i].weight;		//Print the total weight of catFriends
    }
    console.log(count);
	Totalw();
	
// Problem 0:Part A-6.Print the total activities of all cats 

	function TotA(){
    var count=cat.activities.length;
    for(var i=0;i<cat.catFriends.length;i++){
    count+=cat.catFriends[i].activities.length;
    }
    console.log(count);            //Print the total activities
	}
	TotA();
	
//	Problem 0:Part A-7.Add 2 more activities to bar & foo cats

	function twomore(a,b){
    for(var i=0;i<cat.catFriends.length;i++){
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=a;
    cat.catFriends[i].activities[cat.catFriends[i].activities.length]=b;
    console.log(cat.catFriends[i].activities);		// Add 2 more activities
    }
	}
	twomore("sit","stand");
	
// Problem 0:Part A-8.Update the fur color of bar

	function barcolor(){
	var color="bar";
    cat["furcolor"]=color
    console.log(cat.furcolor);
	};
	barcolor();
	console.log(cat);          //Update the fur color
	
	
// Problem 0 : Part B

	var myCar = {
	make: 'Bugatti',
	model: 'Bugatti La Voiture Noire',
	year: 2019,
	accidents: [
	{
	date: '3/15/2019',
	damage_points: '5000',
	atFaultForAccident: true
	},
	{
	date: '7/4/2022',
	damage_points: '2200',
	atFaultForAccident: true
	},
	{
	date: '6/22/2021',
	damage_points: '7900',
	atFaultForAccident: true
	}
	]
	}
	
	//	Problem 0:Part B-1. Loop over the accidents array. Change atFaultForAccident from true to false.
	
	function accidents(){
		for(var i=0;i<myCar.accidents.length;i++){
			myCar.accidents[i].atFaultForAccident=false;
			}
			console.log(myCar.accidents)         // print false in atFaultForAccident
	}
	accidents();
	
	//	Problem 0:Part B-2.Print the dated of my accidents
	
	function dated(){
		for(var i=0;i<myCar.accidents.length;i++){
			console.log(myCar.accidents[i].date)	// print the dated of my accidents
		}
	}
	dated();

//	Problem 1

	var object = {name: "RajiniKanth", age: 33, hasPets : false};
	
	//	Write a function called “printAllValues” which returns an newArray of all the input object’s values.
	
	function printAllKeys(object) {
    var key=[];
    for(var i in object){
        key.push(object[i]);
    }
    return key;
	}
	console.log(printAllKeys(object));
	
// Problem 2

	var object = {name: "RajiniKanth", age: 33, hasPets : false};
	
	//	Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
	
	function printAllValues(object) {
    var val=[];
    for(var i in object){
        val.push(i);
    }
    return val;
	}
	console.log(printAllValues(object));
	
// Problem 3

	var object = {name: "ISRO", age: 35, role: "Scientist"};
	
	//	Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
	
	function convertListToObject(object) {
	var list=[];
    for(var i in object){
        list.push([i,object[i]]);
    }
    return list;
	}
	console.log(convertListToObject());
	
// Problem 4

	var array = ["GUVI", "I", "am", "Geek"];
	
	//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
	// 1) the first element of the array as the object’s key, and
	// 2) the last element of the array as that key’s value.
	
	function transformFirstAndLast(array) {
    var object={}
    object[array[0]]=array[array.length-1];
    return object;
	}
	console.log(transformFirstAndLast(array));


// Problem 5

	var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
	
	//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair
	
	function fromListToObject(array) {
    var object={}
    for(var i=0;i<array.length;i++)
    object[array[i][0]]=array[i][1];
    return object;
	}
	console.log(fromListToObject(array));

//Problem 6

	var arr = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
	
	//Write a function called “transformGeekData” that transforms some set of data from one format to another.

	function transformGeekData(array) {
    var object1=[];
    for(var i=0;i<array.length;i++){
    var Object2={};
    for(var j=0;j<array[i].length;j++){
    Object2[arr[i][j][0]]=arr[i][j][1];
    }
    object1.push(Object2);
    }
    return object1;
	}
	console.log(transformGeekData(array));

//	Problem 7

	var expected = {foo: 5, bar: 6};
	var actual = {foo: 5, bar: 6}

	// Write an “assertObjectsEqual” function from scratch.

	function assertObjectsEqual(actual, expected, testName){
	var flag=1;
	for(var i in expected){
		if(expected[i]===actual[i])flag*=1;
		else flag*=0;
	}
	if(flag===1)console.log("Passed");
	else{
		console.log("FAILED [my test] Expected ",expected,"but got", actual);
	}
	}
	assertObjectsEqual(actual, expected, 'detects that two objects are equal');

//	Problem 8

	var securityQuestions = [
	{
	question: "What was your first pet’s name?",
	expectedAnswer: "FlufferNutter"
	},
	{
	question: "What was the model year of your first car?",
	expectedAnswer: "1985"
	},
	{
	question: "What city were you born in?",
	expectedAnswer: "NYC"
	}
	]

	function chksecurityQuestions(securityQuestions,ques,ans) {
    for(var i=0;i<securityQuestions.length;i++){
        if(securityQuestions[i].question===ques && securityQuestions[i].expectedAnswer===ans)return true;
        else return false;
    }

	}
	//Test case1:
	
	var ques = "What was your first pet’s name?";
	var ans  =  "FlufferNutter";
	var status = chksecurityQuestions(securityQuestions, ques, ans);
	console.log(status); // true
	
	//Test case2:
	
	var ques = "What was your first pet’s name?";
	var ans  =  "DufferNutter";
	var status = chksecurityQuestions(securityQuestions, ques, ans);
	console.log(status); // flase

//Problem 9

	var students = [
	{
	name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
	{name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
	{name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
	{name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
	{name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
	{name: "Devdas",age: 56} 
	];
	
	//Write a function to return the list of characters below 20 age
	
	var returnMinors=students.filter((item)=>{
		return item.age<20});
	console.log(returnMinors)
