// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
//looking at html for this file, in reference to html button

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//when someone clicks button, run the writePassword function


var generatePassword = function() {//returning the password
  // return "superSecretPassword"; //prints in the textarea
  document.getElementById("generate").innerHTML=
  alert("Welcome to the Password Generator!");
  
  var passwordLength = prompt("How many characters would you like in your password? Choose a length of at least 8 characters and no more than 128 characters.");
  var passwordLength = parseInt(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Your password is " + passwordLength + " characters long.");
  } 

  else if (!passwordLength) { //checking to see if it's false
    alert("Invalid entry. Try again.");
    passwordLength;
  }
}


/**
 * PSUEDOCODE
 * user clicks on the generate password button, gets a greeting
 * user clicks again
 * window prompt asks how many characters for the password
 * window mentions must be between 8 and 128 characters
 * if the user puts anything else but what's between 8-128
 *    window alert to try again, then loops back to ask the question
 * user selects character between 8 and 128 characters
 * window alert reads back how many characters the password will be
 * user clicks again
 * window asks if they'd like uppercase letters in password, yes or no
 *    if yes, the do math random on variable that has all uppercase letters
 *    if no, skip to next --
 * window asks if they'd like lowercase letters in password, yes or no
 *    if yes, the do math random on variable with all lowercase letters
 *    if no, skip to next --
 * window asks if they'd like numbers in their password
 *    if yes, the do math random on variable with all numbers
 *    if no skip to next --
 * window asks if they'd like special characters in their password
 *    if yes, the do math random on variable with all lowercase letters
 * window alert then says password generated
 * generatePassword then prints the generated password into the textarea
 */