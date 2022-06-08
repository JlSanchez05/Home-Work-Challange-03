// Assignment code here
var generateBtn = document.querySelector("#generate")
var generateBtn = document.querySelector("#generate")
var passwordLength
var confirmLower
var confirmUpper
var confirmNumber
var confirmSpecial
var userChoices
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Upper Case array
var blankUpper = []
var toUpper = function (x){
  return x.toUpperCase()
}

upperCase = lowerCase.map(toUpper)
//const variables because they will never change value
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword(){
  var password = generatePassword()
  var passwordText = document.querySelector("#password")
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
function generatePassword() {
  // making sure user is able to choose the length of his or her passowrd
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128")
  console.log("Password length " + passwordLength)
  
  //asking the user to put required password length if not equal
  // and starting to put conditoins to add logic to the program
  if(!passwordLength) {
    alert("Required value")
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength)
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

 // Adding condition to the program so that if user chooses nothing
 // this will help them redircet to the following options 
  if(!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial){
    userChoices = alert("Please Choose one of the options that was provided try again")
  // statement confirming the following options with the variables below
  } else if(confirmLower && confirmUpper && confirmNumber && confirmSpecial){
    userChoices = lowerCase.concat(upperCase, numbers, special)
    console.log(userChoices)
  }
  // statement confiriming the follow options with the varibales below
  else if(confirmLower && confirmUpper && confirmNumber){
    userChoices = lowerCase.concat(upperCase, numbers)
    console.log(userChoices)
  }
  // statement confirming the following options with the variabels below
  else if(confirmNumber && confirmSpecial){
    userChoices = numbers.concat(special)
    console.log(userChoices)
  }
  // if user only picks one option
  else if(confirmLower){
    userChoices = lowerCase
    console.log(userChoices)
  }
  else if (confirmUpper){
    userChoices = blankUpper.concat(upperCase)
    console.log(userChoices)
  }
  else if(confirmNumber){
    userChoices = numbers
    console.log(userChoices)
  }
  else if(confirmSpecial){
    userChoices = special
    console.log(userChoices)
  }

  // variable to allow the password to be complied and stored into the blank array
  var passwordBlank = []
  
  // This look will make the random selection possible
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)]
    passwordBlank.push(allChoices)
    console.log(allChoices)
  }

  // let the code compile based on the user and return the password 
  //of their choosing
  var password = passwordBlank.join("")
  console.log("Your Pasword is: " + password)
  return password
}
