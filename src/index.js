function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "strings length not matching";
  }
  const result = {};
  for (let elem of str1) {
    result[elem] = result[elem] ? (result[elem] += 1) : (result[elem] = 1);
  }
  // {r: 1, o: 1, n: 1, a: 1, k: 1}
  // console.log(result);
  for (let elem of str2) {
    //console.log(elem + "rohii");
    if (!result[elem]) {
      return "strings are not anagram";
    }
  }

  return "strings are anagram";
}

console.log(anagram("ronak", "krona"));
