// Assignment code here

// Window Prompts
var pwLength = window.prompt('What length of password do you want?');
var useUpper = window.confirm('Do you want to use UpperCase letters?');
var useNumber = window.confirm('Do you want to use Numbers?');
var useSymbol = window.confirm('Do you want to use Symbols?');
var pwString = "";

console.log(useUpper)

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


for (i=0; i < pwLength; i++) {
  var selectChar = Math.floor(Math.random() * 4);
  console.log(selectChar);
  
  if (selectChar === 0 && useSymbol === true) {
    var pwChar = getRandomSymbol()
  } else if (selectChar === 1 && useNumber === true) {
    var pwChar = getRandomNumber()
  } else if (selectChar === 2 && useUpper === true) {
    var pwChar = getRandomUpper()
  } else {
    var pwChar = getRandomLower()
  };
  
  pwString = pwString + pwChar
  console.log(pwString);
}

// var symbols = '!@#$%^&*(){}[]=<>/,.';
// var pwLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// var pwUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// var pwNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// console.log(getRandomSymbol())

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

// generateEl.addEventListener('click', () => {
//   const length = lengthEl.value;

//   console.log(length);
// });

// Generator functions

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=<>/,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }






// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

