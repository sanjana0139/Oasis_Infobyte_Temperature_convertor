document.addEventListener('DOMContentLoaded', function() {
    var convertButton = document.querySelector('.convert');
    var resetButton = document.querySelector('.Reset');
  
    convertButton.addEventListener('click', tempConvert);
    resetButton.addEventListener('click', clearForm);
  
    function tempConvert() {
      var fahrenheitInput = document.querySelector('.fahrenheit');
      var celsiusInput = document.querySelector('.celsius');
      var kelvinInput = document.querySelector('.kelvin');
  
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = parseFloat(celsiusInput.value);
      var kelvin = parseFloat(kelvinInput.value);
  
      if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) / 1.8;
        kelvin = celsius + 273.15;
      } else if (!isNaN(celsius)) {
        fahrenheit = celsius * 1.8 + 32;
        kelvin = celsius + 273.15;
      } else if (!isNaN(kelvin)) {
        celsius = kelvin - 273.15;
        fahrenheit = celsius * 1.8 + 32;
      }
  
      fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(1);
      celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(1);
      kelvinInput.value = isNaN(kelvin) ? '' : kelvin.toFixed(1);
    }
  
    function clearForm() {
      var inputs = document.querySelectorAll('input[type="text"]');
      inputs.forEach(function(input) {
        input.value = '';
      });
    }
  });
  