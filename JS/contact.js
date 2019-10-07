console.log("Hello friends, welcome to the contact page.");

function userName() {
  var name = document.getElementById("name");
  alert("Your name is: " + name.value);
}

function userMail() {
  var email = document.getElementById("mail");
  alert("Your email is: " + email.value);
}
function userMessage() {
  var message = document.getElementById("msg");
  alert("Your message is: " + message.value);
}

var submit = document.getElementById("submit");
submit.addEventListener("click", userName);
submit.addEventListener("click", userMail);
submit.addEventListener("click", userMessage);

// need to figure out how to get this to work
// function clearForm() {
//   var clear = document.getElementById("reset");
//   console.log(
//     "You have successfuly cleared the form please reenter your details and try again"
//   );
// }

// var reset = document.getElementById("reset");
// reset.addEventListener("click", clearForm);
