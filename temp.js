function convertTemperature(celsius) {
    const resultElement = document.getElementById("result");
    const inputElement = document.querySelector("input[type='text']");
  
    if (celsius === "") {
      resultElement.textContent = "";
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
    resultElement.innerHTML = ` ${fahrenheit.toFixed(2)}°F <br>(User Entered: ${inputElement.value}°C)`;
  }