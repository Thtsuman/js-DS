function charCount(str) {
	var obj = {}

	for (var char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase()
			obj[char] > 0 ? obj[char]++ : (obj[char] = 1)
			// obj[char] =  ++obj[char] || 1
		}
	}

	return obj
}

function isAlphaNumeric(char) {
	var code = char.charCodeAt(0)
	if (
		!(code > 47 && code < 58) && //numeric (0-9)
		!(code > 64 && code < 91) && //upper alpha (A-Z)
		!(code > 96 && code < 123) //lower alpha (a-z)
	) {
		return false
	} else return true
}

console.log(charCount("Hello"))
