let input = document.querySelector(".result-display");

// function will show value to input field
const btnArr = document.querySelectorAll(".num");
btnArr.forEach((btn) => {
  btn.addEventListener("click", addToInput);
});

function addToInput(e) {
  if(input.innerText.length >= 16) return alert("max 16 characters allowed")
  input.innerText += e.target.innerText;
}

// function for slicing last string
document.querySelector(".btn-13").addEventListener("click", clearInput);

function clearInput() {
  input.innerText = input.innerText.slice(0, -1);
}

//function will calculate result using eval() function and display it in input field
document.querySelector(".equals").addEventListener("click", calculate);

function calculate() {
  input.innerText = eval(input.innerText);
}
