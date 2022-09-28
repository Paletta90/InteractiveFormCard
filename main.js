// All html elements to describe the card
let name = document.querySelector("div.name-date > p:nth-child(1)");
let numberCard = document.querySelector("div.number-card > p");
let date = document.querySelector("div.name-date > p:nth-child(2)");
let cvc = document.querySelector("p.text-back-card");

// All input elements
let fname = document.getElementById("fname");
let fcard = document.getElementById("fcard");
let fdateM = document.getElementById("fdateM");
let fdateY = document.getElementById("fdateY");
let fcvc = document.getElementById("fcvc");

// All sections
let form = document.querySelector("section.form");
let thankYou = document.querySelector("section.thankYou");

function printOnCard() {
  // Name
  let nameWithCapitalizeLetters = fname.value
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase(0) + word.substring(1);
    })
    .join(" ");
  name.innerHTML = nameWithCapitalizeLetters;

  // Number card
  let numberCardWithSpace = fcard.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  fcard.value == ""
    ? (numberCard.innerHTML = numberCard.textContent)
    : (numberCard.innerHTML = numberCardWithSpace);

  // Date
  fdateM.value + fdateY.value == ""
    ? (date.innerHTML = "")
    : (date.innerHTML = fdateM.value + "/" + fdateY.value);

  // Cvc
  cvc.innerHTML = fcvc.value;
}

function validationForm() {
  event.preventDefault();
  let check = true;
  if (fname.value.length < 8) {
    fname.style.borderColor = "red";
    fname.value = "";
    fname.placeholder = "The name must be contain at least 8 characters";
    check = false;
  }
  if (fcard.value.trim().length < 12) {
    fcard.style.borderColor = "red";
    fcard.value = "";
    fcard.placeholder = "The card number must be contain 12 number";
    check = false;
  }

  if (parseInt(fdateY.value) < new Date().getFullYear().toString().slice(-2)) {
    fdateY.style.borderColor = "red";
    fdateY.value = "";
    check = false;
  }
  if (check) {
    form.style.display = "none";
    thankYou.style.display = "block";
  }
}
function onlyLetters(tag) {
  tag.value = tag.value.replace(/\d+|^\s+$/g, "").replace(/\s+/g, " ");
}
function onlyPositiveNumbers(tag) {
  tag.value = tag.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
}
function maxNumber(tag, num) {
  tag.value > num ? (tag.value = num) : "";
}
