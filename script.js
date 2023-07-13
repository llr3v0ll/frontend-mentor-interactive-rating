const rateingpage = document.querySelector("#rating-page");
const thankyoupage = document.querySelector("#thank-you-page");
const submit = document.querySelector("#submit-button");
const result = document.querySelector("#rate-res");
const error = document.querySelector("#errormes");
const colornumber = document.querySelector(".stars");

colornumber.addEventListener("click", colorchange);
function colorchange() {
  var elem = document.getElementsByName("rate");
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].checked) {
      elem[0].parentElement.style.color = "hsl(217, 12%, 63%)";
      elem[1].parentElement.style.color = "hsl(217, 12%, 63%)";
      elem[2].parentElement.style.color = "hsl(217, 12%, 63%)";
      elem[3].parentElement.style.color = "hsl(217, 12%, 63%)";
      elem[4].parentElement.style.color = "hsl(217, 12%, 63%)";
      elem[i].parentElement.style.color = "white";
    }
  }
}

submit.addEventListener("click", changepag);
function changepag() {
  var elem = document.getElementsByName("rate");
  for (let i = 0; i < elem.length; i++) {
    let plm = 0;
    if (elem[i].checked) {
      plm = 1;
    }
    if (plm == 1) {
      result.innerText = `You selected ${elem[i].value} out of 5`;
      rateingpage.style.display = "none";
      thankyoupage.style.display = "flex";
    } else {
      error.innerText = "Error! Please select a value!";
    }
  }
}
