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

allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
allSpecial = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", ":", "_", "`", "{", "|", "}", "~"];

//making variables called in the functions global
var getPassword = [];
var passwordLength;
var uppercaseQuestion;
var lowercaseQuestion;
var numberQuestion;
var specialQuestion;
var userPick = [];
var finaluserPick;

var generatePassword = function() {
  //user clicks on the generate password button, gets a greeting
  alert("Welcome to the Password Generator!");

  //run each function to get the responses to each password question
  getPasswordLength();
  getUppercase();
  getLowercase();
  getNumbers();
  getSpecial();

  var userPick = []
  //based on user's choice for password characters, creates the password
  if (uppercaseQuestion === "yes") {
        userPick = userPick.concat(allUppercase);
  }
  if (lowercaseQuestion === "yes") {
      userPick = userPick.concat(allLowercase);
  }
  if (numberQuestion === "yes") {
      userPick = userPick.concat(allNumbers);
  }
  if (specialQuestion === "yes") {
      userPick = userPick.concat(allSpecial);
  }

  if (uppercaseQuestion === "no" && 
      lowercaseQuestion === "no" &&
      numberQuestion === "no" &&
      specialQuestion === "no") {
      alert("You must select a choice of characters for your password.\n Please try again.");
      generatePassword();
  };

  if (uppercaseQuestion === null && 
  lowercaseQuestion === null &&
  numberQuestion === null &&
  specialQuestion === null) {
  alert("You must select a choice of characters for your password.\n Please try again.");
  generatePassword();
};

  //based on the user's length choice, goes through each array to "push" the random
  //selections into an empty set
  for (var i = 0; i < passwordLength; i++) {
    finaluserPick = userPick[Math.floor(Math.random() * userPick.length)];
    getPassword.push(finaluserPick);
  } 
  //joins the array and removing commas
  getPassword = getPassword.join("");
  alert("Your password has been generated.\n Please refresh the page if you'd like a new password!");
  return getPassword;
}

var getPasswordLength = function() {
  //window prompt asks how many characters for the password
  //window mentions must be between 8 and 128 characters
  passwordLength = prompt("How many characters would you like in your password? Choose a length of at least 8 characters and no more than 128 characters.");
  passwordLength = parseInt(passwordLength);

  //if passwordLength is 8-128 and a number, window tells you # of characters
  //if passwordLength does not follow this, alert message to try again
  if (passwordLength >= 8 && passwordLength <= 128 && (Number.isInteger(passwordLength))) {
    alert("Your password is " + passwordLength + " characters long.");  
  } else { 
    alert("Invalid entry. Please try again.");
    getPasswordLength();
  }
}

var getUppercase = function() {
  //asks if they'd like uppercase letters in password, yes or no
  uppercaseQuestion = prompt("Would you like uppercase letters in your password?\n Please type 'YES' or 'NO'");
  
  if (uppercaseQuestion) {
  uppercaseQuestion = uppercaseQuestion.toLowerCase();
  //if yes, window alert says uppercase letters has been added
    if (uppercaseQuestion === "yes") {
      alert("Uppercase letters have been added to your password.");
      //if no, window alert says uppercase letters haven't been added
    } else if (uppercaseQuestion === "no") {
      alert("Uppercase letters have not been added to your password.");
      // if it isn't no or yes entered, it says try again and calls the function
    } else { 
      alert("Invalid entry. Please try again.");
      getUppercase();
    }
  }
}

var getLowercase = function() {
  //asks if they'd like lowercase letters in password, yes or no
  lowercaseQuestion = prompt("Would you like lowercase letters in your password?\n Please type 'YES' or 'NO'");
  
  if (lowercaseQuestion) {
    lowercaseQuestion = lowercaseQuestion.toLowerCase();
    //if yes, window alert says lowercase letters has been added
    if (lowercaseQuestion === "yes") {
      alert("Lowercase letters have been added to your password.");
      //if no, window alert says lowercase letters haven't been added
    } else if (lowercaseQuestion === "no") {
      alert("Lowercase letters have not been added to your password.");
      //if it isn't no or yes entered, it says try again and calls the function
    } else {
      alert("Invalid entry. Please try again.");
      getLowercase();
    }
  }
}

var getNumbers = function() {
  //asks if they'd like numbers in password, yes or no
  numberQuestion = prompt("Would you like numbers in your password?\n Please type 'YES' or 'NO'");
  
  if (numberQuestion) {
    numberQuestion = numberQuestion.toLowerCase();
    //if yes, window alert says numbers has been added
    if (numberQuestion === "yes") {
      alert("Numbers have been added to your password.");
      //if no, window alert says numbers haven't been added
    } else if (numberQuestion === "no") {
      alert("Numbers have not been added to your password.");
      //if it isn't no or yes entered, it says try again and calls the function
    } else {
      alert("Invalid entry. Please try again.");
      getNumbers();
    }
  }
}

var getSpecial = function() {
  //asks if they'd like special characters in password, yes or no
  specialQuestion = prompt("Would you like special characters in your password?\n Please type 'YES' or 'NO'");
  
  if (specialQuestion) {
    specialQuestion = specialQuestion.toLowerCase();
    //if yes, window alert says special characters has been added
    if (specialQuestion === "yes") {
      alert("Special characters have been added to your password.");
      //if no, window alert says special characters haven't been added
    } else if (specialQuestion === "no") {
      alert("Special characters have not been added to your password.");
      //if it isn't no or yes entered, it says try again and calls the function
    } else {
      alert("Invalid entry. Please try again.");
      getSpecial();
    }
  }
}
