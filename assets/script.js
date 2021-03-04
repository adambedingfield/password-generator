// Assignment code here

//variables to confirm which inputs they would like in password.
var includeUpperCase;
var includeLowerCase;
var includeNumber
var includeSpecial;

// determines which to include from above variables.
var selections;

//arrays containing characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ['!','#','$','%','&','(',')','*','+',',','-','.','/','\:','\;','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

//password generation code

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128")); 
  if (!enter) {
      alert("Can't be left blank");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(alert("You must choose between 8 and 128"));
  }else {
    //used confirm instead of prompt so answer is a simple yes or no.
    includeLowerCase = confirm("Would you like lowercase letters?");
    includeUpperCase = confirm ("Would you like uppercase letters?")
    includeNumber = confirm ("Would you like numbers?");
    includeSpecial = confirm("Would you like special characters?");
  }
  //no selection
  if (!includeLowerCase && !includeUpperCase && !includeNumber && !includeSpecial) {
    selections = alert("Must choose atleast one option.");
  //agreed to all, used concat to combine arrays
  } else if (includeLowerCase && includeUpperCase && includeNumber && includeSpecial) {
    selections = lowerCase.concat(upperCase, special, number);
  }
  //agreed to 3
  else if (includeUpperCase && includeNumber && includeSpecial) {
    selections = upperCase.concat(number, special);
  }
  else if (includeLowerCase && includeNumber && includeSpecial) {
    selections = lowerCase.concat(number, special);
  }
  else if (includeUpperCase && includeLowerCase && includeSpecial) {
    selections = upperCase.concat(lowerCase, special);
  }
  else if (includeUpperCase && includeLowerCase && includeNumber) {
    selections = upperCase.concat(lowerCase, number);
  }
  // agreed to 2
  else if (includeUpperCase && includeLowerCase) {
    selections = upperCase.concat(lowerCase);
  }
  else if (includeUpperCase && includeNumber) {
    selections = upperCase.concat(number);
  }
  else if (includeUpperCase && includeSpecial) {
    selections = upperCase.concat(special);
  }
  else if (includeNumber && includeLowerCase) {
    selections = number.concat(lowerCase);
  }
  else if (includeSpecial && includeLowerCase) {
    selections = special.concat(lowerCase);
  }
  else if (includeNumber && includeSpecial) {
    selections = number.concat(special);
  }
  //agreed to 1
  else if (includeUpperCase) {
    selections = upperCase;
  }
  else if (includeNumber) {
    selections = number;
  }
  else if (includeLowerCase) {
    selections = lowerCase;
  }
  else if (includeSpecial) {
    selections = special;
  }
  //blank array that determines length put in
  var endResult = [];

  //randomizes result
  for (var i = 0; i < enter; i++) {
      var answers = selections[Math.floor(Math.random() * selections.length)];
      endResult.push(answers);
  }
  //used join to remove commas from arrays
    var combine = endResult.join("");
    return combine;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
