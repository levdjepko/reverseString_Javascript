function reverseString(str) {
  
  let stringArray = Array.from(str);
  //console.log(stringArray);
  let newString = [];
  for(let i = (stringArray.length - 1); i >= 0; i--) {
    newString.push(stringArray[i]);
    //console.log(newString);
  }
  let returnedValue = newString.join("");
  //console.log(returnedValue);
  return returnedValue;
}

reverseString("hello");
