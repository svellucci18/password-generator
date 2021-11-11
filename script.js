// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generate password function
 function generatePassword() {
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
    console.log(txt);
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


