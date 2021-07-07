const btn = document.querySelector('button');
const degree = document.getElementById('degree');
const convert = document.getElementById('convert');
const temperature = document.getElementById('temperature');
let result = document.getElementById('result');

degree.onclick = (event) => {
  degree.placeholder = ''
  degree.style.border = '2px solid gray';
}

function setError(err) {
  err.style.border = '2px solid #ff0000';
  err.placeholder = 'Error'
}

function selectOption(convert, newValue) {}

function fahrenheitToCelsius(f) {
  return (parseInt(f)-32) * 5/9;
}

function celsiusToFahrenheit(c){
  return pareseInt(c) * 9/5 + 32;
}


btn.onclick = (event) => {
  event.preventDefault();

  if(degree.value === ''){
    setError(degree)
  }

  else{
    if(temperature.value === 'f'){

      


    }
  }
}
