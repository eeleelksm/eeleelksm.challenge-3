/**
 * When button is pressed: series of prompts for password criteria
 * When prompted for password criteria ---
 *    select which criteria to include in the password
 * When prompted for the length of the password ---
 *    choose a length of at least 8 characters and no more than 128 characters
 * When asked for character types to include in the password ---
 *     confirm whether or not to include lowercase, uppercase, numeric, 
 *     and/or special characters
 * When answer each prompt ---
 *     my input should be validated and at least one character type 
 *     should be selected
 * When all prompts are answered ---
 *     password is generated that matches the selected criteria
 * When the password is generated ---
 *     the password is either displayed in an alert or written to the page
 */


//Ask what each section means, generateBtn, writePassword()
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

var generatePassword = function() {
  document.getElementById("generate").innerHTML=
  window.alert("Welcome to the Password Generator!");
  
  // make this (put this within) a function??
  //Issue ATM - putting in letters or other numbers besides 1 and 2 stops the code
  var passwordChoice = 
  window.prompt("Let's begin generating a password for you!\n\n Enter '1' to customize the LENGTH of the password OR enter '2' to customize the CHARACTERS in the password."
  );
  if (passwordChoice === "" || passwordChoice === null) {
    window.alert("Invalid entry. Please try again.");
    return generatePassword; //how to i make this only repeat window.prompt?
  }
  if (passwordChoice === "1") {
    passwordLength();
  }
}
/**
 * Issues ATM for passwordLength
 * When putting in a space, the prompt still continues
 * When putting in letters, the prompt still continues
 */

var passwordLength = function() {
  var lengthQuestion = window.prompt("How many characters would you like in your password? Choose a length of at least 8 characters and no more than 128 characters.");
  if (lengthQuestion === "" || lengthQuestion === null) {
    window.alert("Invalid entry. Try again.");
    return passwordLength();
  }

  if (lengthQuestion >= 8 && lengthQuestion <= 128) {
    window.alert("Your password is " + lengthQuestion + " characters long.");
  }
  else {
    window.alert("Invalid entry. Try again.");
    return passwordLength();
  }
  //add code to go to the next section
}

//NEED HELP
//function needs to go through the string of each selection based on the
//number of characters the player picked in passwordLength
//then print it into the password box

// var passwordSelection = function() {
//   var passwordComplete = "";
//   var selectUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var selectLowercase = "abcdefghijklmnopqrstuvwxyz";
//   var selectNumbers = '0123456789';
//   var selectSpecial = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"";
// for (var i = 0; writePassword??)
//     text += selectCharacters.charAt(Math.floor(Math.random() * selectCharacters.length));
//   return passwordComplete;
// }
// }
