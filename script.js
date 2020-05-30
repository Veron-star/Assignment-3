var password = document.getElementById("#password");
var generateBtn = document.getElementById("#generate");


var length = prompt("Length of password: 8 - 128 characters?");
  if (length <8 || length >128){
  alert("Password condition: between 8 - 128 characters. ")
}

var possibleCharacters = confirm("Include special and number characters?");

// Write password to the #password input
function generate() {

var specialCharaters = ["!@#$%^&*()_+"]
var numberCharacters = ["1234567890"]
var possibleCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]

var password = possibleCharacters.concat(specialCharaters, numberCharacters);

for (var i = 8; i <= 128; i++) {
  console.log(password[Math.floor((Math.random() * password.length))]);
}

return password;

}

// Add event listener to generate button
document.getElementById("#generate").addEventListener("click", generateBtn);

