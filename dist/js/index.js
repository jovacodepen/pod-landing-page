let landForm = document.querySelector("form");
let emailInp = document.querySelector("#email-inp");
let emailErr = document.querySelector(".email-error");
let emailSuc = document.querySelector(".email-success");

function validateEmail(input) {
  var validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value.match(validRegex)) {
    emailSuc.style.display = "block";
    setTimeout(function () {
        emailSuc.style.display = "none";
    }, 3000);

    input.value = " "

    return true;
  } else {
    emailErr.style.display = "block";
    setInterval(function errorMsg() {
      emailErr.style.display = "none";
    }, 3000);

    return false;
  }
}

landForm.addEventListener("submit", function (e) {
  validateEmail(emailInp);
  console.log("submitted");
  console.log(emailInp.value);
  e.preventDefault();
});
