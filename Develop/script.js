
// Functional Password Length Slider
var rangeInput = document.querySelector("#range-input");
var rangeLabel = document.querySelector("#range-label");
var passwordText = document.querySelector("#password");

rangeLabel.textContent = rangeInput.value;

function changeLabel() {
  rangeLabel.textContent = rangeInput.value;
}

rangeInput.addEventListener("change" , changeLabel);

// Store Characters in Arrays
function arrayCharCodes(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

var lowercaseCharacters = arrayCharCodes(97 , 122);
var uppercaseCharacters = arrayCharCodes(65 , 90);
var numericCharacters = arrayCharCodes(48, 57);
var specialCharacters = arrayCharCodes(33, 47).concat(arrayCharCodes(58,64)).concat(arrayCharCodes(91,96)).concat(arrayCharCodes(123,126));

var includeLowercase = document.querySelector("#lower-check").checked;
var includeUppercase = document.querySelector("#upper-check").checked;
var includeNumeric = docunent.querySelector("#numeric-check").checked;
var includeSpecial = document.querySelector("#special-check").checked;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);