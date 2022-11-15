// Assignment code here
var characterLength = 128;
var choiceArray = [];

var upperCaseArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',];
var lowerCaseArray = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',];
var numbersArray = ['1','2','3','4','5','6','7','8','9','0',];
var symbolsArray = ['!','@','#','$','%','^','&','*','(',')',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  if (correctPrompts) {
  
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    var randomCharecters = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomCharecters];
  }
  return password;

}

function getPrompts(){
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want? (8 - 128"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to between 8-128. Please try again");
    return false;
  }
 if (confirm("Do you want to add Uppercase in the password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Do you want to add Lowercase in the password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Do you want to add Numbers in the password?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  if (confirm("Do you want to add Symbols in the password?")) {
    choiceArray = choiceArray.concat(symbolsArray);
  }
  return true;

}

