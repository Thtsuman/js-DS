function same(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}

	var obj1 = {}
	var obj2 = {}

	for (var item of arr1) {
		obj1[item] > 0 ? obj1[item]++ : (obj1[item] = 1)
	}

	for (var item of arr2) {
		obj2[item] > 0 ? obj2[item]++ : (obj2[item] = 1)
	}

	console.log(obj1, obj2)
	for (var key in obj1) {
		if (!(key ** 2 in obj2)) {
			return false
		}
		if (obj2[key ** 2] !== obj1[key]) {
			return false
		}
	}

	return true
}

console.log(same([1, 2, 3, 2, 1], [1, 4, 4, 9, 1]))
