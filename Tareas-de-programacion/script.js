function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    var result = document.getElementById('result').value;
    try {
      var output = eval(result);
      document.getElementById('result').value = output;
    } catch (e) {
      document.getElementById('result').value = 'Error';
    }
  }