//Convert specifications given below in image to Javascript Object;

function specifications()
	{
		//Technical Specifictaios:heading of the table 
		const Technical = 
		{
			
			// Dimension of the Technical specifications
			
			"Dimensions":
			{
				"Overall length":"3,500 mm","Overall width":"1,600 mm","Overall height":"1,490 mm","Wheelbase":"2,360 mm",
				"Track width":
				{
					"Front":"1,405 mm","Rear":"1,400 mm"
				},
				"minimum turning radius":"4.5 m","minimum ground clearance":"170 mm"
			},
			
			// Capacities of the Technical specifications
			
			"Capacities":
			{
				"Seating capacity":"5 persons","Fuel tank capacity":"35 litres"
			},
			
			// Engine of the Technical specifications
			
			"Engine":
			{
				"Type":"KB-Series","Number of cylinders":"3","Number of valves":"12","Capacity":"998 cc/cm3","Bore x stroke":"73.0 X 79.5 mm",
				"Compression ratio":"10:1","Maximum power":"67/6,200 PS/rpm","Maximum Torque":"90/3,500 Nm/rpm","Fuel distribution":"Multipoint Injection"
			},
			
			// Transmission of the Technical specifications
			
			"Transmission":
			{
				"Type":"5-speed MT"
			},
			
			// Chassis of the Technical specifications
			
			"Chassis":
			{
				"Steering":"Rack & Pinion,Power assisted",
				"Brakes":
				{
					"Front":"Ventilated discs",
					"Rear":"Drums"
				},
				"Suspension":
				{
					"Front":"MacPherson strut & coil spring",
					"Rear":"Isolated trailling link & coil spring"
				},
				"Shock absorbers":"Gas filled",
				"Tyre(tubeless)":"155/8OR 13"
			},
			
			// Weights of the Technical specifications
			
			"Weights":
			{
				"Kerb weight(min,with full options)":"860-880 Kg",
				"Gross vechile weight":"1,320 Kg"
			}
    
		}
	}
specifications(); // call the function
