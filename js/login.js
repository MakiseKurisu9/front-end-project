document.getElementById("Sign_up").addEventListener("click", function () {
  var title = document.querySelector(".title");
  var login = document.getElementById("Sign_In_submit");
  var rememberlabel = document.querySelector(".Remember");
  var sign = document.getElementById("Sign_up");
  if (title.innerText === "Sign In") {
    title.innerText = "Sign Up";
    login.value = "Sign Up";
    rememberlabel.style.opacity = "0";
    sign.innerText = "Sign in";
    document.getElementById("Sign_In_name").value = "";
    document.getElementById("Sign_In_password").value = "";
    document.getElementById("Sign_In_name").placeholder = "new Username";
    document.getElementById("Sign_In_password").placeholder = "new Password";
    document.getElementById("Sign_In_password").type = "password";
  } else {
    title.innerText = "Sign In";
    login.value = "Sign In";
    rememberlabel.style.opacity = "1";
    sign.innerText = "Sign up";
    document.getElementById("Sign_In_name").value = "";
    document.getElementById("Sign_In_password").value = "";
    document.getElementById("Sign_In_name").placeholder = "Username";
    document.getElementById("Sign_In_password").placeholder = "Password";
    document.getElementById("Sign_In_name").type = "password";
  }
});
