const rateingpage = document.querySelector("#rating-page");
const thankyoupage = document.querySelector("#thank-you-page");
const submit = document.querySelector("#submit-button");
const result = document.querySelector("#rate-res");
const error = document.querySelector("#errormes");
console.log(submit);

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
