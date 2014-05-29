Challenges = [
	{
		heading: "Quest 1",
		questText: "Awk is a simple scripting language used for manipulating rows of plain text. To start, lets just" + 
		"print out the data we take in. We do this by matching each line with '{}' and then printing the line: '{print}'",
		rawData: [
		 "100  Thomas  Manager    Sales       $5,000"
		,"200  Jason   Developer  Technology  $5,500"
		,"300  Sanjay  Sysadmin   Technology  $7,000"
		,"400  Nisha   Manager    Marketing   $9,500"
		,"500  Randy   DBA        Technology  $6,000"
		],
		expectedData: [
		"100  Thomas  Manager    Sales       $5,000"
		,"200  Jason   Developer  Technology  $5,500"
		,"300  Sanjay  Sysadmin   Technology  $7,000"
		,"400  Nisha   Manager    Marketing   $9,500"
		,"500  Randy   DBA        Technology  $6,000"
		],
		description: "List only the Technology Salaries",
		solutionAwk: "{print $0}",
		initialAwk: ""
	},
	{
		heading: "Quest 2",
		questText: "The head of the technology department woul like to know each of his employees salaries. " +
		"Create a script to display only that data" ,
		rawData: [
		 "100  Thomas  Manager    Sales       $5,000"
		,"200  Jason   Developer  Technology  $5,500"
		,"300  Sanjay  Sysadmin   Technology  $7,000"
		,"400  Nisha   Manager    Marketing   $9,500"
		,"500  Randy   DBA        Technology  $6,000"
		],
		expectedData: [
		"200  Jason   Developer  Technology  $5,500"
		,"300  Sanjay  Sysadmin   Technology  $7,000"
		,"500  Randy   DBA        Technology  $6,000"
		],
		description: "List only the Technology Salaries",
		solutionAwk: "/Tech/{print $0}",
		initialAwk: "{print $0}"
	}
]