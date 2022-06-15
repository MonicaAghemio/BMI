//BMI= kg/m2

const height = document.getElementById('height');
const weight = document.getElementById('weight');
const myBmi = document.querySelector('#myBmi');
const myBtn = document.getElementById('myBtn');
const bmiRange = document.querySelector('#bmiRange');

function calcBmi(weight, height) {
  let bmi = weight.value / (height.value * height.value);
  bmi = Math.floor(bmi);
  myBmi.innerHTML = bmi;

  if (bmi < 18.5) {
    bmiRange.innerHTML = 'You are underweight';
  } else if (bmi <= 24.9) {
    bmiRange.innerHTML = 'Healthy weight';
  } else if (bmi <= 29.9) {
    bmiRange.innerHTML = 'You are overweight';
  } else {
    bmiRange.innerHTML = 'You are obese';
  }
}

myBtn.addEventListener('click', function () {
  calcBmi(weight, height);
  height.value = '';
  weight.value = '';
});
