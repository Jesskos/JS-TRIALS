// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map


phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


function print_info(acctH, acctHN, bussN) {
	// Prints name of account holder, account number and business name. 
	// Ask on code review if comments properly formatted? 

	/* h
	h
	'd
	f
	*/

	console.log(acctH); 
	console.log(acctHN);
	console.log(bussN);

}

// ///////////////////////////////////////////////////////
// Create User Info Display:

function showAddresses(addrList) {
	// Takes in an array of addresses and prints to console

	for (let address of addrList) {
		console.log(address);
	}	
}

function showPhoneNums(phoneNums) {
	// Takes map of phone numbers and displays as list

	console.log(`Phone Numbers:`);
	for (let phNum of phoneNums) {
		console.log(`   ${phNum[0]}: ${phNum[1]}`);
		// console.log(phNum)
	}	
}	
 
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions



// Add function to add transactions


// Use the function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




