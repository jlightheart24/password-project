// Window Prompts
var pwLength = window.prompt('What length of password do you want?');
var useUpper = window.confirm('Do you want to use UpperCase letters?');
var useNumber = window.confirm('Do you want to use Numbers?');
var useSymbol = window.confirm('Do you want to use Symbols?');
var pwString = "";


// functions to create random charachters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// this function generates the password
function generatePassword()   {
  for (i=0; i < pwLength; i++) {
    var selectChar = Math.floor(Math.random() * 4);
  
    if (selectChar === 0 && useSymbol === true) {
      var pwChar = getRandomSymbol()
    } else if (selectChar === 1 && useNumber === true) {
      var pwChar = getRandomNumber()
    } else if (selectChar === 2 && useUpper === true) {
      var pwChar = getRandomUpper()
    } else {
      var pwChar = getRandomLower()
    };
  
    pwString = pwString + pwChar;
}}


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pwString;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

