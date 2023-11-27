
function convertTemperature(celsius) {

    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;

    return [kelvin, fahrenheit];
}


const celsiusTemperature = 24.69;
const result = convertTemperature(celsiusTemperature);
console.log(result);

const convertTemperatur = celsius => {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.80 + 32.00;
  return [kelvin, fahrenheit];
};


const celsiusTemperatur = 24.69;
const [kelvinResult, fahrenheitResult] = convertTemperature(celsiusTemperature);
console.log([kelvinResult, fahrenheitResult]);
