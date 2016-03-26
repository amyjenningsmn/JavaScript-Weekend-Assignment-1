var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Leslie Knope", "Emergency", 5500);
initialList.push(claim6);
var claim7 = new claim("Andy Dwyer", "Primary Care", 675.2);
initialList.push(claim7);
var claim8 = new claim("April Ludgate", "Specialist", 1200);
initialList.push(claim8);
var claim9 = new claim("Ron Swanson", "Optical", 275);
initialList.push(claim9);
var claim10 = new claim("Tom Haverford", "Specialist", 1300);
initialList.push(claim10);


//function to determine percent covered
function percentCovered(claimNumber) {
		var typeOfVisit = claimNumber.visitType;
		var percent = 0;
		switch(typeOfVisit) {
			case "Optical":
			percent += 0;
			break;
			case "Specialist":
			percent += 0.10;
			break;
			case "Emergency":
			percent += 1;
			break;
			case "Primary Care":
			percent += 0.50;
			break;
			default:
			percent = 0;
		}
		return percent;
}

//function to determine amount covered
function claimPayout(claimNumber) {
		var costOfVisit = claimNumber.visitCost;
		var nameOfPatient = claimNumber.patientName;
		var amtPayout = Math.round(costOfVisit * percentCovered(claimNumber));
		totalPayedOut += amtPayout;
		var finalPayout = console.log("\nPaid out $" + amtPayout + " for " + nameOfPatient + ".");
		return finalPayout;
}

for (var it = 0; it < initialList.length; it++) {
	claimPayout(initialList[it]);
	console.log("The total amount payed out after this claim is $" + totalPayedOut + ".");
}

console.log("\nThe total amount payed out for these " + initialList.length + " claims is: $" + totalPayedOut + ".");
