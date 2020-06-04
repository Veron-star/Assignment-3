var password = document.getElementById("generated password");

var length = prompt("Length of password: 8 - 128 characters?");
  if (length <8 || length >128){
  alert("Password condition: between 8 - 128 characters. ")
}

var possibleCharacters = confirm("Include special and number characters?");

// Write password to the #password input

function btn(){
  
  var specialCharaters = "!@#$%^&*()_+"
  var numberCharacters = "1234567890"
  var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  var password = possibleCharacters.concat(specialCharaters, numberCharacters);
  
  for (var i = 8; i <= 128; i++) {
    console.log(password[Math.floor((Math.random() * password.length))]);


  // for (var i = 8; i <129; i++) {
    // var possibleCharacters = "!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // var din = Math.floor(Math.random() * password.length);
    // generateBtn += possibleCharacters.charAt(din);
  }

  var btn = document.createElement("generate")
  btn.innerHTML = "Click Me";
  document.body.appendChild(btn);

  return password;
}










// function generateBtn() {

// var specialCharaters = "!@#$%^&*()_+"
// var numberCharacters = "1234567890"
// var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// var password = possibleCharacters.concat(specialCharaters, numberCharacters);

// for (var i = 0; i <= 128; i++) {
//   console.log(password[Math.floor((Math.random() * password.length))]);
// }
// document.getElementById("#generate password").addEventListener("click", generateBtn);
// return password;

// }

// Add event listener to generate button


