
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(str) {
  if (str.length < 2){
    return str ;
  }else {
    return reverseString(str.substring(1)) + str[0] ;
  }
}

function isPalindrome(str){
  let str1 = str
  if (str.length < 2){
    return str ;
  }else if (str.length <= 1) {
    return

  }


}

function addUpTo(myArray, index) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}
