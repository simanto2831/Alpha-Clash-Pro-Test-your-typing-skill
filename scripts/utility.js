function removeElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function alphabets() {
  // make an alphabets arr
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabetString.split("");

  // make a random index number
  const number = Math.round(Math.random() * 25);

  // get a random alphabet using random index number
  const alphabet = alphabetArr[number];
  return alphabet;
}
