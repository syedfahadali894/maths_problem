function solve() {
    var equation = document.getElementById("equation").value;
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
  
    var tolerance = 0.00001; // Desired tolerance for the solution
    var maxIterations = 100; // Maximum number of iterations
  
    var f = function(x) {
      // Define the function f(x) based on the equation entered
      return eval(equation);
    };
  
    var fa = f(a);
    var fb = f(b);
  
    if (fa * fb > 0) {
      document.getElementById("result").innerHTML =
        "The function has the same sign at the interval endpoints.";
      return;
    }
  
    var iteration = 0;
    var c;
  
    while (Math.abs(b - a) > tolerance && iteration < maxIterations) {
      c = (a + b) / 2;
      var fc = f(c);
  
      if (fc === 0 || Math.abs(b - a) / 2 < tolerance) {
        // Found the exact solution or reached the desired tolerance
        document.getElementById("result").innerHTML =
          "The solution is: " + c.toFixed(5);
        return;
      }
  
      iteration++;
  
      if (fa * fc < 0) {
        b = c;
        fb = fc;
      } else {
        a = c;
        fa = fc;
      }
    }
  
    // Failed to find a solution within the given number of iterations
    document.getElementById("result").innerHTML =
      "Failed to find a solution within the maximum number of iterations.";
  }