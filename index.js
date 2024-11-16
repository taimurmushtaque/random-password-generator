const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("passOne")
let passTwo = document.getElementById("passTwo")
let selectValue = document.getElementById("password-length").value
console.log(selectValue.value)

getRandomPassword = () => {
    let randomOne = Math.floor(Math.random() * characters.length)
    let randomTwo = Math.floor(Math.random() * characters.length)
    return [characters[randomOne], characters[randomTwo]]
}

const generatePassword = () => {
  let value = document.getElementById("password-length").value
  let password1 = ""
  let password2 = ""
  if (value == selectValue) {
    for (let i = 0; i < value; i++) {
      password1 += getRandomPassword()[0]
      password2 += getRandomPassword()[1]
    }
    passOne.value = password1
    passTwo.value = password2
  } else {
    for (let i = 0; i < value; i++) {
      password1 += getRandomPassword()[0]
      password2 += getRandomPassword()[1]
    }
    passOne.value = password1
    passTwo.value = password2
  }
}

passOne.addEventListener("mouseenter", (e) => {
    e.target.removeAttribute('disabled');
})

passOne.addEventListener("mouseleave", (e) => {
    e.target.setAttribute('disabled', true);
})

passTwo.addEventListener("mouseenter", (e) => {
  e.target.removeAttribute('disabled');
})

passTwo.addEventListener("mouseleave", (e) => {
    e.target.setAttribute('disabled', true);
})

function myPopUp1() {
  var passOne = document.getElementById("passOne");
  var popup1 = document.getElementById("myPopup1");
  navigator.clipboard.writeText(passOne.value)
    .then(() => {
      popup1.classList.toggle("show");
      setTimeout(hidePopup1, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy: ", error);
    });
}

function myPopUp2() {
  var passTwo = document.getElementById("passTwo");
  var popup2 = document.getElementById("myPopup2");
  navigator.clipboard.writeText(passTwo.value)
    .then(() => {
      popup2.classList.toggle("show");
      setTimeout(hidePopup2, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy: ", error);
    });
}

function hidePopup1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.remove("show");
  popup.classList.add("hide");
  setTimeout(() => {
    popup.classList.remove("hide");
  }, 500);
}

function hidePopup2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.remove("show");
  popup.classList.add("hide");
  setTimeout(() => {
    popup.classList.remove("hide");
  }, 500);
}