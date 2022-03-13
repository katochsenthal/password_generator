// Assignment code here
var passwordCharSelection = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChar: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

var generatePassword = function () {
  // prompt asking number of characters
  var password = "";

  var charLength = window.prompt(
    "How many characters would you like your password to be? Choose between 8 and 128"
  );

  // if user choose character less than 7 or more than 128.
  if (charLength < 8 || charLength > 128) {
    window.alert("Password must be between  8 and 128 characters. Try again!");
    var charLength = window.prompt(
      "How many characters would you like your password to be? Choose between 8 and 128"
    );
  }
  while (charLength === !Number) {
    var charLength = window.prompt(
      "You must enter a number! Choose between 8 and 128 characters"
    );
  }

  // prompt for asking if the user wants numbers in the password
  var confirmNumbers = window.confirm("Will your password have numbers in it?");

  if (confirmNumbers) {
    password += passwordCharSelection.numbers;
  }

  // prompt for asking if the user wants lowerCase letters in the password
  var confirmLowerCase = window.confirm(
    "Will your password have lowercase letters in it?"
  );

  if (confirmLowerCase) {
    password += passwordCharSelection.lowerCase;
  }

  // prompt for asking if the user wants  uppercase letters in the password
  var confirmUpperCase = window.confirm(
    "Will your password have uppercase letters in it?"
  );

  if (confirmLowerCase) {
    password += passwordCharSelection.upperCase;
  }

  // prompt for asking if the user wants special Characters in the password?
  var specialCharacters = window.confirm(
    "Will your password have any special Characters in it?"
  );

  if (specialCharacters) {
    password += passwordCharSelection.specialChar;
  }

  // while loop if user skips numbers & uppercase & lowercase & special characters
  while (
    !confirmNumbers &&
    !confirmLowerCase &&
    !confirmUpperCase &&
    !specialCharacters
  ) {
    window.alert(
      "You must select at least one character type required in the password!"
    );

    var confirmNumbers = window.confirm(
      "Will your password have numbers in it?"
    );
    password += passwordCharSelection.numbers;

    var confirmLowerCase = window.confirm(
      "Will your password have lowercase letters in it?"
    );
    password += passwordCharSelection.lowerCase;

    var confirmUpperCase = window.confirm(
      "Will your password have uppercase letters in it?"
    );
    password += passwordCharSelection.upperCase;

    var specialCharacters = window.confirm(
      "Will your password have any special Characters in it?"
    );
    password += passwordCharSelection.upperCase;
  }
  var randomPassword = [];
  for (var i = 0; i < charLength; i++) {
    randomPassword += password[Math.floor(Math.random() * password.length)];
  }
  return randomPassword;
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

//
