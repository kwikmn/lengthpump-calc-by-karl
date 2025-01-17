document.getElementById('calculateBtn').addEventListener('click', function() {
  // Retrieve input values
  const diameterInput = parseFloat(document.getElementById('diameter').value);
  const diameterUnit = document.getElementById('diameterUnit').value;
  const pressureInput = parseFloat(document.getElementById('pressure').value);
  const pressureUnit = document.getElementById('pressureUnit').value;

  if (isNaN(diameterInput) || isNaN(pressureInput)) {
    alert('Please enter valid numeric values for diameter and pressure.');
    return;
  }

  // Convert diameter to inches if necessary
  let dInches;
  if (diameterUnit === 'mm') {
    dInches = diameterInput / 25.4;
  } else {
    dInches = diameterInput;
  }

  // Convert pressure to inHg
  let pInHg;
  switch (pressureUnit) {
    case 'inHg':
      pInHg = pressureInput;
      break;
    case 'kPa':
      pInHg = pressureInput / 3.386389;
      break;
    case 'mmHg':
      pInHg = pressureInput / 25.4;
      break;
    case 'cmHg':
      pInHg = pressureInput / 2.54;
      break;
    default:
      pInHg = pressureInput;
  }

  // Calculation constants and formulas
  const conversionFactor = 0.491154; // psi per inHg
  const area = Math.PI * Math.pow(dInches, 2) / 4;
  const forceLbf = conversionFactor * pInHg * area;
  const forceKgf = forceLbf / 2.20462262;

  // Output the results
  document.getElementById('forceLbf').textContent = forceLbf.toFixed(3);
  document.getElementById('forceKgf').textContent = forceKgf.toFixed(3);
});
