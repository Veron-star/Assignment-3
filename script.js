// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var possibleCharacters = []

var p = possibleCharacters.concat(specialCharacters)
var r = p.concat(numberCharacters)

for(var i=8; i<129; i++){
  console.log(possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]);
}


var confirmPasswordinput = confirm("Generate password?");

      // Creates a prompt box which takes in text input.
      var passwordType = prompt("Include special and number characters?");

      // Alerts the output from our confirm box.
      alert("You like sushi: " + confirmSushi);

      // Alerts the output from our prompt box.
      alert("You like " + sushiType + " sushi!");