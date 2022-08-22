let addBtn = document.querySelector('.add');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');

let subtractBtn = document.querySelector('.subtract');

let dotProduct = document.querySelector('.dot');
let crossProduct = document.querySelector('.cross');

let nthRoot = document.querySelector('.nthroot');

let calcDetValue = document.querySelector('.determine');

addBtn.addEventListener('click', function () {
  firstInput = parseFloat(document.getElementById('first').value);
  secondInput = parseFloat(document.getElementById('second').value);
  let sum = firstInput + secondInput;
  document.getElementById('result').textContent = sum;
});

subtractBtn.addEventListener('click', function () {
  firstInput = parseFloat(document.getElementById('first').value);
  secondInput = parseFloat(document.getElementById('second').value);
  let diff = firstInput - secondInput;
  document.getElementById('result').textContent = diff;
});

divideBtn.addEventListener('click', function () {
  firstInput = parseFloat(document.getElementById('first').value);
  secondInput = parseFloat(document.getElementById('second').value);
  let quotient = firstInput / secondInput;
  document.getElementById('result').textContent = quotient;
});

multiplyBtn.addEventListener('click', function () {
  firstInput = parseFloat(document.getElementById('first').value);
  secondInput = parseFloat(document.getElementById('second').value);
  let product = firstInput * secondInput;
  document.getElementById('result').textContent = product;
});

dotProduct.addEventListener('click', function () {
  a1 = parseFloat(document.getElementById('a1').value);
  a2 = parseFloat(document.getElementById('a2').value);
  a3 = parseFloat(document.getElementById('a3').value);
  b1 = parseFloat(document.getElementById('b1').value);
  b2 = parseFloat(document.getElementById('b2').value);
  b3 = parseFloat(document.getElementById('b3').value);

  let dotProductValue = a1 * b1 + a2 * b2 + a3 * b3;
  document.getElementById('vectorprod').textContent = dotProductValue;
});

crossProduct.addEventListener('click', function () {
  a1 = parseFloat(document.getElementById('a1').value);
  a2 = parseFloat(document.getElementById('a2').value);
  a3 = parseFloat(document.getElementById('a3').value);
  b1 = parseFloat(document.getElementById('b1').value);
  b2 = parseFloat(document.getElementById('b2').value);
  b3 = parseFloat(document.getElementById('b3').value);

  let crossProductValue = `(${a2 * b3 - b2 * a3})i + (${
    b1 * a3 - a1 * b3
  })j + (${a1 * b2 - b1 * a2})k `;
  document.getElementById('vectorprod').textContent = crossProductValue;
});

nthRoot.addEventListener('click', function () {
  baseValue = parseFloat(document.getElementById('base').value);
  exponentValue = parseFloat(document.getElementById('exponent').value);
  let nthRootValue = baseValue ** (1 / exponentValue);
  if (baseValue <= 0) {
    document.getElementById('nthroot-value').textContent =
      'Enter a positive number';
  } else {
    document.getElementById('nthroot-value').textContent = nthRootValue;
  }
});

calcDetValue.addEventListener('click', function () {
  a11 = parseFloat(document.getElementById('a11').value);
  a12 = parseFloat(document.getElementById('a12').value);
  a13 = parseFloat(document.getElementById('a13').value);
  a21 = parseFloat(document.getElementById('a21').value);
  a22 = parseFloat(document.getElementById('a22').value);
  a23 = parseFloat(document.getElementById('a23').value);
  a31 = parseFloat(document.getElementById('a31').value);
  a32 = parseFloat(document.getElementById('a32').value);
  a33 = parseFloat(document.getElementById('a33').value);

  let detValue =
    a11 * (a22 * a33 - a32 * a23) +
    a12 * (a31 * a23 - a21 * a33) +
    a13 * (a21 * a32 - a31 * a22);
  document.getElementById('det-value').textContent = detValue;
});
