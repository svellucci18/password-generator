// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create generate password function
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\",",","]","^","_","`","{","|","}","~"]


 function generatePassword(){
  var x;
  var pwLength=prompt("Please enter desired length of your password (less than 8 and no more than 128)");
  if (pwLength < 8){
    x="Please enter a value greater than 8.";
    alert(x);
 } else if (pwLength > 128) {
    x="Please enter a value less than 128.";
    alert(x);
 } else {
   console.log(pwLength)
 }
}


//  function generatePassword() {
    
//   var password = "";

//   for (let i = 0; i < pwLength - 1; i++) {   
    
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


