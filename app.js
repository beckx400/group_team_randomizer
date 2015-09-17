$(function(){
	var namesArray =["Aarti", "Amelia", "Brian", "Danielle", "Dave B.", "Dave H.", 
	"Doug", "Erick", "Geoffrey", "Jake", "John", "Jonathan", "Laura", "Lauren", 
	"Liz", "Manu", "Nick", "Ryan", "Sarah", "Zach"];

	function randomNumberGenerator(){
		return Math.floor(Math.random() * (namesArray.length));	
	}

	var masterArray = [];
//To do, refactor into a for loop
	$(".group-selector").on("click", function(){
		var numberOfGroups = parseInt($(this).attr("ID"));

		switch(numberOfGroups){
			case 11 : 
			var array11 = [];
			masterArray.push(array11);

			case 10 : 
			var array10 = [];
			masterArray.push(array10);

			case 9 :
			var array9 = [];
			masterArray.push(array9);

			case 8 :
			var array8 = [];
			masterArray.push(array8);	

			case 7 :
			var array7 = [];
			masterArray.push(array7);

			case 6 :
			var array6 = [];
			masterArray.push(array6);

			case 5 :
			var array5 = [];
			masterArray.push(array5);

			case 4 :
			var array4 = [];
			masterArray.push(array4);

			case 3 :
			var array3 = [];
			masterArray.push(array3);	

			case 2 :
			var array2 = [];
			var array1 = [];
			masterArray.push(array2);
			masterArray.push(array1);
		};

		var groupCounter = 0;
		var randomNumber = 0;

		while(namesArray.length > 0){
			randomNumber = randomNumberGenerator();

			var currentName = namesArray[randomNumber];
			namesArray.splice(randomNumber, 1);

			masterArray[groupCounter].push(currentName);

			groupCounter++;

			if (groupCounter >= numberOfGroups) {
				groupCounter = 0;
			};
		};
		console.log(masterArray);
	});
	
	namesArray =["Aarti", "Amelia", "Brian", "Danielle", "Dave B.", "Dave H.", 
		"Doug", "Erick", "Geoffrey", "Jake", "John", "Jonathan", "Laura", "Lauren", 
		"Liz", "Manu", "Nick", "Ryan", "Sarah", "Zach"];
});
