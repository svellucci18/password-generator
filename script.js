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
  var password = []
  //Check for the length and ensure that its within range
  if (pwLength < 8){
    alert("Please enter a value greater than 8.");
 } else if (pwLength > 128) {
    alert("Please enter a value less than 128.");
 } else {
    var numbersPrompt = confirm("Does your password need numbers?");
    var lowerPrompt = confirm("Does your password need lowercase letters?");
    var upperPrompt = confirm("Does your password need uppercase letters?");
    var specialPrompt = confirm("Does your password need special characters?");
    
        // If at least one prompt is selected, start adding those chars to the pool of potential chars
        if (!numbersPrompt && !lowerPrompt && !upperPrompt && !specialPrompt){
          alert("Please select at least one character type");
          return
        } 
        if (numbersPrompt) {
          //To ensure it includes a number if a number is selected, start with a random number.
          var randnum = Math.floor(Math.random() * numbers.length)
          password.push(numbers[randnum]);
          console.log(password)
          for (var i=0; i<numbers.length; i++)  {
            passwordPool.push(numbers[i])
          }
        }
        if (lowerPrompt) {
          //To ensure it includes a lower if a lower is selected, start with a random number.
          var randlow = Math.floor(Math.random() * lowerLetters.length)
          password.push(lowerLetters[randlow]);
          console.log(password)
          for (var i=0; i<lowerLetters.length; i++)  {
            passwordPool.push(lowerLetters[i])
          }
        }
        if (upperPrompt) {
          //To ensure it includes a upper if a upper is selected, start with a random number.
          var randupp = Math.floor(Math.random() * upperLetters.length)
          password.push(upperLetters[randupp]);
          console.log(password)
          for (var i=0; i<upperLetters.length; i++)  {
            passwordPool.push(upperLetters[i])
          }
        }
        if (specialPrompt) {
          //To ensure it includes a special if a special is selected, start with a random number.
          var randspec = Math.floor(Math.random() * specialChars.length)
          password.push(specialChars[randspec]);
          console.log(password)
          for (var i=0; i<specialChars.length; i++)  {
            passwordPool.push(specialChars[i])
          }
        } 
        console.log(passwordPool)

        //Start building the password by pulling randomly from the pool.
        for (var i=0; i< pwLength; i++) {
            var random = Math.floor(Math.random() * passwordPool.length)
            password.push(passwordPool[random]);
        }
        //converts the array into a string without seperators
        return password.join("");
        console.log(password)
 }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


