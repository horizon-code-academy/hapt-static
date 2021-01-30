var loginBtn = document.querySelector("[type=submit]");
var inputEmail = document.querySelector("#email");
var inputPass = document.querySelector("#password");
var cardBody = document.querySelector(".card-body");

testAndChooseBtn();

function testAndChooseBtn() {
  if (inputEmail.value === "" || inputPass.value === "") {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
}

function renderAlert() {
  cardBody.innerHTML =
    '<div class="alert alert-danger alert-dismissible fade show" role="alert"><h4 class="alert-heading">Echec!</h4><strong>Mot de passe ou email invalide!</strong> entrez des identifiants differents.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' +
    cardBody.innerHTML;
  document.querySelector("[for=email]").style.color = "red";
  document.querySelector("[for=password]").style.color = "red";
}

function showHint() {
  document.querySelector("#emailHelp").style.display = "block";
}

inputEmail.addEventListener("input", showHint);
inputEmail.addEventListener("input", testAndChooseBtn);
inputPass.addEventListener("input", testAndChooseBtn);
loginBtn.addEventListener("click", renderAlert);
