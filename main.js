var impBtn = document.getElementsByClassName("imperial-btn")[0];
var metricBtn = document.getElementsByClassName("metric-btn")[0];
var impInputs = document.getElementById("imperial-inputs");
impInputs.style.display = "none";
var metricInputs = document.getElementById("metric-inputs");
metricInputs.style.display = "none";
var unitBtns = document.getElementById("unit-btns");
var bmiResult = document.getElementById("bmi-result");
bmiResult.style.display = "none";

function imperialselect() {
  metricInputs.style.display = "none";
  impInputs.style.display = "block";
  impBtn.style.backgroundColor = "#50C7A0";
  impBtn.style.borderColor = "#50C7A0";
  impBtn.style.color = "white";
  metricBtn.style.backgroundColor = "#f1f2f6";
  metricBtn.style.borderColor = "gray";
  metricBtn.style.color = "gray";
}

function metricselect() {
  impInputs.style.display = "none";
  metricInputs.style.display = "block";
  impBtn.style.backgroundColor = "#f1f2f6";
  impBtn.style.borderColor = "gray";
  impBtn.style.color = "gray";
  metricBtn.style.backgroundColor = "#50C7A0";
  metricBtn.style.borderColor = "#50C7A0";
  metricBtn.style.color = "white";
}

function imperialcalculate() {
  impInputs.style.display = "none";
  unitBtns.style.display = "none";
  var heightImp =
    (document.getElementById("height-imp-in").valueAsNumber +
      12 * document.getElementById("height-imp-ft").valueAsNumber) /
    39.37;
  var weightImp = document.getElementById("weight-imp").valueAsNumber / 2.2046;
  var bmiImp = weightImp / heightImp ** 2;
  document.getElementById("bmi").innerHTML = bmiImp.toFixed(1);
  bmiResult.style.display = "block";
}

function metriccalculate() {
  metricInputs.style.display = "none";
  unitBtns.style.display = "none";
  var heightMetric = document.getElementById("height-metric").value;
  var weightMetric = document.getElementById("weight-metric").value;
  heightMetric = heightMetric / 100;
  var bmiMetric = weightMetric / heightMetric ** 2;
  document.getElementById("bmi").innerHTML = bmiMetric.toFixed(1);
  bmiResult.style.display = "block";
}
