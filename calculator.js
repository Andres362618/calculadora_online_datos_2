let result = document.getElementById('result');

function buttonClick(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}
