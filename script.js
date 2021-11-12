// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generate password function
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",",","]","^","_","`","{","|","}","~"]


 function generatePassword(){
  var pwLength = prompt("Please enter desired length of your password (less than 8 and no more than 128)");
  var passwordPool = []
  if (pwLength < 8){
    alert("Please enter a value greater than 8.");
 } else if (pwLength > 128) {
    alert("Please enter a value less than 128.");
 } else {
    var numbersPrompt = confirm("Does your password need numbers?");
    var lowerPrompt = confirm("Does your password need lowercase letters?");
    var upperPrompt = confirm("Does your password need uppercase letters?");
    var specialPrompt = confirm("Does your password need special characters?");
    console.log(numbersPrompt, lowerPrompt, upperPrompt, specialPrompt);
        if (!numbersPrompt && !lowerPrompt && !upperPrompt && !specialPrompt){
          alert("Please select at least one character type");
          return
        } 
        if (numbersPrompt) {
          passwordPool = numbers 
        }


 }
}


//  function generatePassword() {
    
//   var password = "";

//   for (let i = 0; i < pwLength - 1; i++) {   
//       password += password
//   }

//   return password;
//  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


