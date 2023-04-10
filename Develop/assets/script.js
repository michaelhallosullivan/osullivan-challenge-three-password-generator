var rangeInput = document.querySelector("#range-input");
var rangeLabel = document.querySelector("#range-label");
var generateBtn = document.querySelector("#generate");

rangeLabel.textContent = rangeInput.value;

function changeLabel () {
  rangeLabel.textContent = rangeInput.value;
}

rangeInput.addEventListener("change" , changeLabel);

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "#$%&()*+-=<>?@!";

var includeLowercase = document.querySelector("#lower-check").checked;
var includeUppercase = document.querySelector("#upper-check").checked;
var includeNumeric = document.querySelector("#numeric-check").checked;
var includeSpecial = document.querySelector("#special-check").checked;

function generatePassword() {
  var passwordCharacters = "";
  if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
    alert("Please make at least 1 character selection.");
    }
  else {
    if (includeLowercase === true) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
    }
    else if (includeUppercase === true) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
    }
    else if (includeSpecial === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    else if (includeNumeric === true) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
    }
    var generatedPassword = "";
    for (let i=0; i <= rangeInput.value; i++) {
    var randomCharacter = passwordCharacters.charAt[Math.floor(Math.random() * passwordCharacters.length)];
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
}

generateBtn.addEventListener("click", writePassword);