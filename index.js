const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("passOne")
let passTwo = document.getElementById("passTwo")

getRandomPassword = () => {
    let randomOne = Math.floor(Math.random() * characters.length)
    let randomTwo = Math.floor(Math.random() * characters.length)
    return [characters[randomOne], characters[randomTwo]]
}

const generatePassword = () => {
  const value = document.getElementById("password-length").value;
  const password1 = Array.from({ length: value }, () => getRandomPassword()[0]).join("");
  const password2 = Array.from({ length: value }, () => getRandomPassword()[1]).join("");

  passOne.value = password1;
  passTwo.value = password2;
}

passOne.addEventListener('mouseenter', () => passOne.removeAttribute('disabled'));
passOne.addEventListener('mouseleave', () => passOne.setAttribute('disabled', true));

passTwo.addEventListener('mouseenter', () => passTwo.removeAttribute('disabled'));
passTwo.addEventListener('mouseleave', () => passTwo.setAttribute('disabled', true));

function copyToClipboard(inputId, popupId, hidePopupFunction) {
  const input = document.getElementById(inputId);
  const popup = document.getElementById(popupId);
  navigator.clipboard.writeText(input.value)
    .then(() => {
      popup.classList.toggle("show");
      setTimeout(hidePopupFunction, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy: ", error);
    });
}

function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove("show");
  popup.classList.add("hide");
  setTimeout(() => {
    popup.classList.remove("hide");
  }, 500);
}

function myPopUp1() {
  copyToClipboard("passOne", "myPopup1", () => hidePopup("myPopup1"));
}

function myPopUp2() {
  copyToClipboard("passTwo", "myPopup2", () => hidePopup("myPopup2"));
}