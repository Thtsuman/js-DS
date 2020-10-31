function anagramCheck(str1, str2) {
  if(str1.length !== str2.length) {
    return false
  }

  var obj1 = {};
  var obj2 = {};

  for(var item of str1) {
    obj1[item] ? obj1[item] +=1 : obj1[item] = 1
  }
  for(var item of str2) {
    obj2[item] ? obj2[item] +=1 : obj2[item] = 1
  }

  for(var key in obj1) {
    // if(!(key in obj2)) {
    //   return false
    // }
    if(obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}

console.log(anagramCheck('cttt', 'catt'))