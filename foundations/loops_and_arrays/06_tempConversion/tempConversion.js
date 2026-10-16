const convertToCelsius = function(tempreture) {
  fahrenheit = ((tempreture - 32) * 5/9).toFixed(1)
  return fahrenheit
};

const convertToFahrenheit = function(tempreture) {
  celcius = ((tempreture * 9/5) + 32).toFixed(1)
  return celcius
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
