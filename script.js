// Assignment Code

function generatePassword() {
  var numberOfCharacters = getNumberOfCharacters();
  var passwordString = getPasswordCharacterString();
  var passwordCharacterArray = passwordString.split("");
  var response = "";

  for (i = 0; i < numberOfCharacters; i++) {
    var index = Math.floor(Math.random() * passwordCharacterArray.length);
    response += passwordCharacterArray[index];
  }
  return response;
}

function getPasswordCharacterString() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var passwordArrayString = "";

  var isLowerCase = window.confirm("Select 'OK' if you want your password to contain lowercase characters.  Otherwise select 'Cancel'");
  var isUpperCase = window.confirm("Select 'OK' if you want your password to contain uppercase characters.  Otherwise select 'Cancel'");
  var isNumeric = window.confirm("Select 'OK' if you want your password to contain numeric characters.  Otherwise select 'Cancel'");
  var isSpecialCharacters = window.confirm("Select 'OK' if you want your password to contain special characters.  Otherwise select 'Cancel'");

  if (!(isLowerCase || isUpperCase || isNumeric || isSpecialCharacters)) {
    window.alert("You need to provide a valid answer! Please try again.");
    getPasswordCharacterArray();
  }
  else {
    if (isLowerCase)
      passwordArrayString += lowerCase;
    if (isUpperCase)
      passwordArrayString += upperCase;
    if (isNumeric)
      passwordArrayString += numeric;
    if (isSpecialCharacters)
      passwordArrayString += specialCharacters;
  }
  console.log(passwordArrayString);

  return passwordArrayString;
}

function getNumberOfCharacters() {
  var response = window.prompt("How many characters should your password contain (Enter a numeric value from 8-128)");
  //Is it an empty string or null or Not a Number (doesn't work) or less than 8 or greater than 128
  var intResponse = parseInt(response);
  console.log(intResponse);
  if (response === "" || response === null || intResponse < 8 || intResponse > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    getNumberOfCharacters();
  }
  else return response;
}

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

