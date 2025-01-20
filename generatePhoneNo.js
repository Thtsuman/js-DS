const generatePhoneNumber = (numbers) => {
	let output = "(xxx) xxx-xxxx";

	for(const char of numbers) {
		output = output.replace('x', char)
	}

	return output
}

console.log(generatePhoneNumber(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']))
console.log(generatePhoneNumber(['9', '1', '3', '5', '5', '7', '2', '4', '9', '0']))
console.log(generatePhoneNumber(['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', "11"]))
console.log(generatePhoneNumber(['1', '2', '3', '4', '5', '6', '7', '8',]))