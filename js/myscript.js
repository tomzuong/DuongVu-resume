function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}

var name = prompt("Enter your name: ");
var yearBorn = prompt("Enter the year you were born: ");
// cammle case : yearBorn , myName

var age = calculateAge(yearBorn);

console.log(name + " is " + age + " years old");

alert(name + " is " + age + " years old");