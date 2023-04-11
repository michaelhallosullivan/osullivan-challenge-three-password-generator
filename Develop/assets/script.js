var rangeInput = document.querySelector("#range-input");
var rangeLabel = document.querySelector("#range-label");
var generateBtn = document.querySelector("#generate");
var includeLowercase = document.querySelector("#lower-check");
var includeUppercase = document.querySelector("#upper-check");
var includeNumeric = document.querySelector("#numeric-check");
var includeSpecial = document.querySelector("#special-check");
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "#$%&()*+-=<>?@!";
var passwordCharacters = "";

rangeLabel.textContent = rangeInput.value;

function changeLabel () {
  rangeLabel.textContent = rangeInput.value;
}

rangeInput.addEventListener("change" , changeLabel);

function generatePassword() {
  if (includeLowercase.checked === false && includeUppercase.checked === false && includeNumeric.checked === false && includeSpecial.checked === false) {
    alert("Please make at least 1 character selection.");
    return "Try again."
    }
  else {
    if (includeLowercase.checked === true) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
    }
    if (includeUppercase.checked === true) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
    }
    if (includeSpecial.checked === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    if (includeNumeric.checked === true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
    }
    var generatedPassword = "";
    for (let i=0; i < rangeInput.value; i++) {
    var randomCharacter = passwordCharacters.charAt([Math.floor(Math.random() * passwordCharacters.length)]);
    generatedPassword = generatedPassword.concat(randomCharacter);
    }
    return generatedPassword;
  }
}

function writePassword(event) {
  event.preventDefault();
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
  passwordCharacters = "";
}

generateBtn.addEventListener("click", writePassword);