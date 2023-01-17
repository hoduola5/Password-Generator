// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];





// console.log(userSpecialCharacter);
// Function to prompt user for password options
function getPasswordOptions() {
  alert('To use generate password, you need to enter your password lenght, then choose at least one the following options: specialCharacters, numericCharacters, lowerCasedCharacters, and upperCasedCharacters');
  let passwordLength = prompt('Enter your password lenght with min 10 max 64');
while (passwordLength === null || isNaN(passwordLength) || (passwordLength < 10) || (passwordLength > 64)) {
    alert("You did not enter a valid number or not within the range.");
    passwordLength = prompt('Enter your password lenght with min 10 max 64');
}
alert(`You entered: ${passwordLength}`);

// To save user options
let userSpecialCharacter = confirm('Do you want your password to include special characters');
let userNumericCharacter = confirm('Do you want  your password to include numeric characters');
let lowerCaseCharacter = confirm('Do you want your password to include lowercase characters');
let upperCaseCharacter = confirm('Do you want your password to include uppercase characters');

// To pass the variables to the next function
getRandom(passwordLength, lowerCaseCharacter, upperCaseCharacter, userNumericCharacter, userSpecialCharacter);

}

// Function for getting a random element from an array
function getRandom() {

  // Variables for all possible possible password combinations
  let allCharacters = specialCharacters.concat(numericCharacters.concat(lowerCasedCharacters.concat(upperCasedCharacters))).join("");
  let numberSpecialLower = numericCharacters.concat(lowerCasedCharacters.concat(specialCharacters)).join("");
  let numberSpecialUpper = numericCharacters.concat(upperCasedCharacters.concat(specialCharacters)).join("");
  let numberLowerUpper = numericCharacters.concat(lowerCasedCharacters.concat(upperCasedCharacters)).join("");
  let specialLowerUpper = specialCharacters.concat(lowerCasedCharacters.concat(upperCasedCharacters)).join("");
  let lowerUpper = lowerCasedCharacters.concat(upperCasedCharacters).join("");
  let lowerSpecial = lowerCasedCharacters.concat(specialCharacters).join("");
  let lowerNumber = lowerCasedCharacters.concat(numericCharacters).join("");
  let upperNumber = upperCasedCharacters.concat(numericCharacters).join("");
  let specialUpper = specialCharacters.concat(upperCasedCharacters).join("");
  let specialLower = specialCharacters.concat(lowerCasedCharacters).join("");
  let specialNumber = specialCharacters.concat(numericCharacters).join("");
  let specialXter = specialCharacters.join("");
  let numericXter = numericCharacters.join("");
  let lowerXter = lowerCasedCharacters.join("");
  let upperXter = upperCasedCharacters.join("");

  // che cking the combination user choose from all possible combinations
  let allConditions = allCharacters || numberSpecialLower || numberSpecialUpper || numberLowerUpper || numberLowerUpper || 
    specialLowerUpper || lowerUpper || lowerSpecial || lowerNumber || upperNumber || specialUpper ||
    specialLower || specialNumber || specialXter || numericXter || lowerXter || upperXter;

    // To pass the local variables to the next function
   generatePassword(passwordLength, userNumericCharacter, userSpecialCharacter, allConditions,);
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);