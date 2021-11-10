
// 1. Sulla base della lezione di oggi, completare la modale (date un aspetto più carino anche),      rispettando i seguenti punti:
//    l'elemento `<h1>Buongiorno [NOME]</h1>` dovrà essere gestito totalemente in Javascript quindi
//    `userPage.firstElementChild.textContent = 'Buongiorno ${username}';`
//    non dovrà contenere la parola 'Buongiorno' (quindi il Buongiorno lo prende solo da HTML non va aggiunto in JS!)

function sendCredentials(username) {
  Identità.textContent=`${username}`;

  // userPage.firstElementChild.textContent = `Buongiorno ${username}`;
  // console.log(userPage.firstElementChild.textContent);
  // userPage.firstElementChild.textContent.replace("NOME", username);
}

function saveCredentials(user, pass) {
  window.localStorage.setItem("username", user);
  window.localStorage.setItem("password", pass);
}

function loadCredentials(key) {
  return window.localStorage.getItem(key);
}

const userPage = document.querySelector(".userPage");
const modalEl = document.querySelector(".modal");
const userInputEl = document.querySelector("#user");
const passInputEl = document.querySelector("#pass");
const btnSendEl = document.querySelector("#btnSend");
const Identità = document.querySelector("#identity");
const user = {
  username: "",
  password: "",
};


// LOCAL STORAGE ----->
sendCredentials(loadCredentials("username"));

btnSendEl.addEventListener("click", (evt) => {
  user.username = userInputEl.value;
  user.password = passInputEl.value;

  saveCredentials(user.username, user.password);

  const userStorage = window.localStorage.getItem("username");

  sendCredentials(userStorage);
});
