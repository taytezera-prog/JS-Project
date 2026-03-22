// alert("connected");

const generateButton = document.getElementById("generate-btn");
// console.log(generateButton);
const generatedPassword = document.getElementById("password-area");
// console.log(generatedPassword);
const PasswordLength = document.getElementById("passwordLength").value;
console.log(PasswordLength);
const lowercase = document.getElementById("lowerCase").checked;
// console.log(lowercase);
const uppercase = document.getElementById("upperCase").checked;
// console.log(uppercase);
const numbers = document.getElementById("numbers-1").checked;
// console.log(numbers);
const symbols = document.getElementById("symbols-1").checked;
// console.log(symbols);
const amharicLetter = document.getElementById("amarigna").checked;
// console.log(amharicLetter);

generateButton.addEventListener("click", function () {
  let charset = "";
  let password = "";
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  // console.log(charset);
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // console.log(charset);
  if (numbers) {
    charset += "0123456789";
  }
  // console.log(charset);
  if (symbols) {
    charset += '~!@#$%^&*()_{}|":?<>,.;,/]\[';
  }
  // console.log(charset);
  if (amharicLetter) {
    charset += "ሀለሐመረሸቀወረተየፐሰደፈገጀከመነበቨቸዘዠሸጨቨጠ";
  }
  // console.log(charset);
  for (i = 0; i < PasswordLength; i++) {
    const generatedPass = Math.floor(Math.random() * charset.length);
    password += charset[generatedPass];
  }
  generatedPassword.type = "text";
  generatedPassword.value = password;
  // console.log(password);
  // console.log(generatedPassword.value);
});

if (!window.location.hash.includes("#reloaded")) {
  window.location.href += "#reloaded";
  location.reload();
}
