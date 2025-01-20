// Question

// The new "Avengers" movie has just been released! There are a lot of people at the 
// cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar 
// bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single 
// person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money 
// and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills 
// he has at hand at that moment. Otherwise return NO.

// eg:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars 
// // of change (you can't make two bills of 25 from one of 50)

function tickets(queue) {

	const ticketMoney = 25;
	let counter = {
		25: 0,
		50: 0,
		100: 0,
	};

	// loop over the queue
	// for(const bill of queue) {

	// 	// take money and store in counter
	// 	counter.push(bill)
	// 	// if 25 then give ticket
	// 	if(bill === 25) {}	
		
	// 	// if 50 then first check if we have 25 in counter
	// 	if(bill === 50) {
	// 		counter = counter.map(item => item === 25 ?  : item)
	// 	}
	// 	// => yes then give ticket
	// 	// => no then return NO

	// 	// if 100 then first check if we have 50 and 25 or 25, 25, 25 in counter
	// 	// => yes then give ticket
	// 	// => no then return not
	// }

	for(const bill of queue) {
		
	}


	


	// return YES
	return 'YES'

}