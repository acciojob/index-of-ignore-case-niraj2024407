function indexOfIgnoreCase(str, subStr) {
  // write your code here
	str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
