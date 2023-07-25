function calculateTemperature() {
    var input = parseInt(document.getElementById('inp').value);
    var temp = document.getElementById('temp').value;
    var resultElement = document.getElementById('res');

    if (temp === 'fah') {
        var c = (input - 32) * 5 / 9;
        resultElement.textContent = "Temperature in Celsius: " + c;
    } else {
        var f = (input * 9 / 5) + 32;
        resultElement.textContent = "Temperature in Fahrenheit: " + f;
    }
}
function validateInput() {
    var input = document.getElementById('inp').value;

    if (input === '' || isNaN(input) || !Number.isInteger(parseFloat(input))) {
      // Invalid input
      alert('Please enter a valid integer.');
      return false;
    }

    // Valid input
    return true;
  }