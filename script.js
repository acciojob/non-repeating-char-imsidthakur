function firstNonRepeatedChar(str) {
 let map = {};

  for(let char of str)
	  {
		  map[char] = (map[char] || 0) + 1;
	  }
  for(let char of str)
	  {
		  if(map[char] == 1) return char;
	  }

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
