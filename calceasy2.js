let simpleCalcOpen = document.getElementById('simplecalc');
let simpleCalc = document.getElementById('simplecalculator');
let vectorProdCalc = document.getElementById('vectcalculator');
let vectorProdCalcOpen = document.getElementById('vectorprodcalc');
let nthRootCalc = document.getElementById('nthrootcalculator');
let nthRootCalcOpen = document.getElementById('nthrootcalc');
let detCalc = document.getElementById('detcalculator');
let detCalcOpen = document.getElementById('detecalc');
let calcPage = document.getElementById('calc-container');
let title = document.getElementById('title');
let openAll = document.getElementById('opener');
let introTitle = document.getElementById('opening');
let homeButton = document.getElementById('home');

homeButton.style.display = 'none';
calcPage.style.display = 'none';
title.style.display = 'none';

openAll.addEventListener('click', function () {
  title.style.display = 'block';
  calcPage.style.display = 'block';
  openAll.style.display = 'none';
  introTitle.style.display = 'none';
  homeButton.style.display = 'block';
});

homeButton.addEventListener('click', function () {
  title.style.display = 'none';
  calcPage.style.display = 'none';
  openAll.style.display = 'block';
  introTitle.style.display = 'block';
  homeButton.style.display = 'none';
});

simpleCalc.style.display = 'block';
vectorProdCalc.style.display = 'none';
nthRootCalc.style.display = 'none';
detCalc.style.display = 'none';

simpleCalcOpen.style.borderBottom = '3px solid black';

simpleCalcOpen.addEventListener('click', function () {
  if (simpleCalc.style.display === 'none') {
    simpleCalc.style.display = 'block';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'none';
    simpleCalcOpen.style.borderBottom = '3px solid black';
    vectorProdCalcOpen.style.borderBottom = 'none';
    nthRootCalcOpen.style.borderBottom = 'none';
    detCalcOpen.style.borderBottom = 'none';
  } else {
    simpleCalc.style.display = 'block';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'none';
  }
});

vectorProdCalcOpen.addEventListener('click', function () {
  if (vectorProdCalc.style.display === 'none') {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'block';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'none';
    simpleCalcOpen.style.borderBottom = 'none';
    vectorProdCalcOpen.style.borderBottom = '3px solid black';
    nthRootCalcOpen.style.borderBottom = 'none';
    detCalcOpen.style.borderBottom = 'none';
  } else {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'block';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'none';
  }
});

detCalcOpen.addEventListener('click', function () {
  if (detCalc.style.display === 'none') {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'block';
    simpleCalcOpen.style.borderBottom = 'none';
    vectorProdCalcOpen.style.borderBottom = 'none';
    nthRootCalcOpen.style.borderBottom = 'none';
    detCalcOpen.style.borderBottom = '3px solid black';
  } else {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'none';
    detCalc.style.display = 'block';
  }
});

nthRootCalcOpen.addEventListener('click', function () {
  if (nthRootCalc.style.display === 'none') {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'block';
    detCalc.style.display = 'none';
    simpleCalcOpen.style.borderBottom = 'none';
    vectorProdCalcOpen.style.borderBottom = 'none';
    nthRootCalcOpen.style.borderBottom = '3px solid black';
    detCalcOpen.style.borderBottom = 'none';
  } else {
    simpleCalc.style.display = 'none';
    vectorProdCalc.style.display = 'none';
    nthRootCalc.style.display = 'block';
    detCalc.style.display = 'none';
  }
});

let screenWidth = window.matchMedia('(max-width : 700px)');
screenWidth.addListener(function (screenWidth) {
  if (screenWidth.matches) {
    vectorProdCalcOpen.textContent = 'vector';
  } else {
    vectorProdCalcOpen.textContent = 'vector product';
  }
});
