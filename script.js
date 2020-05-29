// Creates a prompt box which takes in text input.

var password = prompt("Length of password");
var possibleCharacters = prompt("Include special and number characters?");

// Alerts the output from confirm box.

if (length <8 || length >128) {
alert("Possible characters: 8 - 128");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Possible password values
let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

let password = "";

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var p = possibleCharacters.concat(specialCharacters)
var r = p.concat(numberCharacters)

for(var i=8; i<129; i++){
  console.log(possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)]);

// Add password to text/display area
document.getElementById("display").value = password;

}}