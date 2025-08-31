// External JS

// Variables
var x = 23;
var y = 12;

// Get button and output div
var button = document.getElementById('calculateBtn');
var output = document.getElementById('output');

// Function to calculate sum
function calculateSum() {
    var sum = x + y;
    console.log("Sum:", sum);                     // Log in console
    alert("The sum of " + x + " and " + y + " is " + sum); // Show alert
    output.textContent = "Sum: " + sum;          // Show result on page
}

// Add click event listener
button.addEventListener('click', calculateSum);
