var input = document.getElementById('input')

// function will show value to input field
function addToInput(val) {
  input.value += val;
}

// function will clear Input value
function allClearInput() {
  input.value = "";
}

// function for slicing last string
function clearInput() {
  input.value = input.value.slice(0,-1);
}


//function will calculate result using eval() function and display it in input field
function calculate() {
  input.value = eval(input.value);
}


