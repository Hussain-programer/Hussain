let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
// let  symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");
// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
genbtn.addEventListener("click", () => {
  passbox.value = generatePassword();
});
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
// let allSymbols = "~!@#$%^&*";
//Function to generate Password
function generatePassword() {
  let genPassword = "";
  let allChars = "";
  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
//   allChars += symbols.checked ? allSymbols : "";
  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}
copyIcon.addEventListener("click", () => {
  if (passbox.value != "" || passbox.value.length >= 1) {
    navigator.clipboard.writeText(passbox.value);
    copyIcon.title = "Password Copied";
  }
});
