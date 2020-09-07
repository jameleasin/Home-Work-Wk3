//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Character arrays that are included in the password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable declaration to use when user is prompted for each character type
var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    // Loop if answer is outside the parameters 
    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be between 8-128 characters Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }
    // Re prompt back how many charactes the user will have between 8 - 128 
    alert(`Your password will have ${confirmLength} characters`);

    // using the declared variables, determine parameters of password using confirm popup boxes. If "OK" is pressed then confirmed, if "CANCEL" is selected the denied in password
    var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

    // while all conditionals are not met loop if answer is outside the parameters & prompt is run again
    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    }
    // each character assignment is concatinated on to the next making up the password
    var passwordCharacters = []

    if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
    }
