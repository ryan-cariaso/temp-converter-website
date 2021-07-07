const btn = document.querySelector('button');
const degree = document.getElementById('degree');
const convert = document.getElementById('convert');
let result = document.getElementById('result');

degree.onclick = (event) => {
  degree.placeholder = ''
  degree.style.border = '2px solid gray';
}

btn.onclick = (event) => {
  event.preventDefault();

  if(degree.value === ''){
    setError(degree)
  }

  else{
    if(temperature.value === 'f'){}
  }
}
