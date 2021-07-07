const btn = document.querySelector('button');
const degree = document.getElementById('degrees');
const convert = document.getElementById('to');
const temperature = document.getElementById('from');
let result = document.getElementById('result');

window.onload = function(){
	degree.onclick = (event) => {
  	degree.placeholder = ''
  	degree.style.border = '2px solid gray';
	}
}


btn.onclick = (event) => {
  event.preventDefault();

  if(degree.value === ''){
    setError(degree)
  }

  else{
    if(temperature.value === 'f'){

      if(convert.value === 'c'){
        result.innerText = result.textContent = fahrenheitToCelsius(degree.value) + '°C';
      }

      else{
        selectOption(convert, 'c')
        btn.click()
      }
    }

    else if(temperature.value === 'c') {

      if(convert.value === 'f'){
        result.innterText = result.textContent = celsiusToFahrenheit(degree.value) + '°F';
      }

      else{
        selectOption(convert, 'f')
        btn.click()
      }
    }

  }

}

function setError(err) {
  err.style.border = '2px solid #ff0000';
  err.placeholder = 'Error'
}


function selectOption(convert, newValue) {
  let opts = convert.options;
  for (let opt, j = 0; opt = opts[j]; j++) {
    if (opt.value == newValue) {
      convert.selectedIndex = j;
      break;
  	}
	}
}

function fahrenheitToCelsius(f) {
  return (parseInt(f)-32) * 5/9;
}

function celsiusToFahrenheit(c){
  return pareseInt(c) * 9/5 + 32;
}

