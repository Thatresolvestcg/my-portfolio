console.log("Hello friends, welcome to the contact page.");

function userName() {
  var name = document.getElementById("name");
  alert(name.value);
}

function userMail() {
  var email = document.getElementById("mail");
  alert(email.value);
}
function userMessage() {
  var message = document.getElementById("msg");
  alert(message.value);
}

var submit = document.getElementById("submit");
submit.addEventListener("click", userName);
submit.addEventListener("click", userMail);
submit.addEventListener("click", userMessage);
