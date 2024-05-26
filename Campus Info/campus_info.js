function info1() {
  // Get the input elements
  const areaInput = document.getElementById("campus_area");
  const popuInput = document.getElementById("population");
  var nameInput=document.getElementById("campus_name").value;
  const area = parseFloat(areaInput.value);
  const polpu = parseFloat(popuInput.value);
  if (isNaN(area) || isNaN(polpu)) {
    console.error("Invalid input values");
    alert("Invalid input values");
    return;
  }
}

function info2() {
  const group1Input = document.getElementById("group1");
  const group2Input = document.getElementById("group2");
  const group3Input = document.getElementById("group3");
  const group4Input = document.getElementById("group4");

  // Get the input values and ensure they are numbers

  const group1 = parseFloat(group1Input.value);
  const group2 = parseFloat(group2Input.value);
  const group3 = parseFloat(group3Input.value);
  const group4 = parseFloat(group4Input.value);

  // Check if the input values are numbers
  if (isNaN(group1) || isNaN(group2) || isNaN(group3) || isNaN(group4)) {
    console.error("Invalid input values");
    alert("Invalid input values");
    return;
  }
  calculator1(group1, group2, group3, group4);
  calculator(group1, group2, group3, group4, group5, group6, group7);
}

function info3() {
  const group5Input = document.getElementById("group5");
  const group6Input = document.getElementById("group6");
  const group7Input = document.getElementById("group7");

  // Get the input values and ensure they are numbers

  const group5 = parseFloat(group5Input.value);
  const group6 = parseFloat(group6Input.value);
  const group7 = parseFloat(group7Input.value);
  if (isNaN(group5) || isNaN(group6) || isNaN(group7)) {
    console.error("Invalid input values");
    alert("Invalid input values");
    return;
  }
  calculator2(group5, group6, group7);
  calculator(group1, group2, group3, group4, group5, group6, group7);
}

function calculator1(group1, group2, group3, group4) {
  // Calculate the values
  let a1 = group1 * 8.542 * 700280.11;
  let b1 = group1 * 6.09 * 700280.11;
  let x1 = group1 * 8.74 * 700280.11;
  let a2 = group2 * 32.6928 * 700280.11;
  let b2 = group2 * 26.3672 * 700280.11;
  let x2 = group2 * 35.62069 * 700280.11;
  let a3 = group3 * 89.546 * 700280.11;
  let b3 = group3 * 88.266 * 700280.11;
  let x3 = group3 * 92.9705 * 700280.11;
  let a4 = group4 * 340.462 * 700280.11;
  let b4 = group4 * 224.348 * 700280.11;
  let x4 = group4 * 294.098 * 700280.11;
  let as1 = (a1 + a2 + a3 + a4) / 4;
  let bs1 = (b1 + b2 + b3 + b4) / 4;
  let xs1 = (x1 + x2 + x3 + x4) / 4;
  let tree = group1 + group2 + group3 + group4;
}

function calculator2(group5, group6, group7) {
  let a5 = group5 * 44;
  let b5 = group5 * 88;
  let x5 = group5 * 69.57;
  let a6 = group6 * 1000;
  let b6 = group6 * 2500;
  let x6 = group6 * 1903.94;
  let a7 = group7 * 25;
  let b7 = group7 * 40;
  let x7 = group7 * 33.3541;
  let as2 = (a5 + a6 + a7) / 3;
  let bs2 = (b5 + b6 + b7) / 3;
  let xs2 = (x5 + x6 + x7) / 3;
  let plant=group5+group6;
}

function calculator(group1, group2, group3, group4, group5, group6, group7) {
  let a1 = group1 * 8.542 * 700280.11;
  let b1 = group1 * 6.09 * 700280.11;
  let x1 = group1 * 8.74 * 700280.11;
  let a2 = group2 * 32.6928 * 700280.11;
  let b2 = group2 * 26.3672 * 700280.11;
  let x2 = group2 * 35.62069 * 700280.11;
  let a3 = group3 * 89.546 * 700280.11;
  let b3 = group3 * 88.266 * 700280.11;
  let x3 = group3 * 92.9705 * 700280.11;
  let a4 = group4 * 340.462 * 700280.11;
  let b4 = group4 * 224.348 * 700280.11;
  let x4 = group4 * 294.098 * 700280.11;
  let a5 = group5 * 44;
  let b5 = group5 * 88;
  let x5 = group5 * 69.57;
  let a6 = group6 * 1000;
  let b6 = group6 * 2500;
  let x6 = group6 * 1903.94;
  let a7 = group7 * 25;
  let b7 = group7 * 40;
  let x7 = group7 * 33.3541;
  let as = (a1 + a2 + a3 + a4 + a5 + a6 + a7) / 7;
  let bs = (b1 + b2 + b3 + b4 + b5 + b6 + b7) / 7;
  let xs = (x1 + x2 + x3 + x4 + x5 + x6 + x7) / 7;

  // Log the results
  console.log(as, bs, xs);
}

function usedoxygencalculator(polpu) {
  let min = (polpu * 365000) / 2;
  let max = (polpu * 547500) / 2;
  let rootmeansquare = (polpu * 465285.5306) / 2;
  return { min, max, rootmeansquare };
}

function percentage(as, bs, xs, min, max, rootmeansquare) {
  let resultmin = (as / min) * 100;
  let resultmax = (as / max) * 100;
  let resultrootmeansquare = (xs / rootmeansquare) * 100;
  console.log(resultmin, resultmax, resultrootmeansquare);
}
document.getElementById("answer1").innerHTML= `${tree}`;
document.getElementById("answer2").innerHTML= `${poplu}`;
document.getElementById("answer3").innerHTML= `${area}`;
document.getElementById("answer4").innerHTML=`${plant}`;
document.getElementById("answer5").innerHTML= `${resultrootmeansquare}`;
document.getElementById("answer5").innerHTML= `${name}`;



// Example usage
//   const polpu = 1000;
//   const { min, max, rootmeansquare } = usedoxygencalculator(polpu);
//   percentage(1000, 1000, 1000, min, max, rootmeansquare);/
