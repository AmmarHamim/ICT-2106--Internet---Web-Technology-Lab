// Variables
var a = 10;
var a = 12; // redeclaration allowed with var
document.writeln("Value of a: " + a + "<br>");

// Let variables
let b = 100;
let c = "Meawrer";
let v = 23.566;

// Display types
document.writeln("Type of b: " + typeof(b) + "<br>");
document.writeln("Type of c: " + typeof(c) + "<br>");
document.writeln("Type of v: " + typeof(v) + "<br><br>");

// Type Casting
// Number to String
let s = b.toString();
document.writeln("b to string: " + s + "<br>");

// String to Number
let x = "100.03";
x = parseFloat(x);
document.writeln("x to number: " + x + " (type: " + typeof(x) + ")<br>");

// Number conversion examples
document.writeln("Convert 'ASDDDF' to number: " + Number("ASDDDF") + "<br>");
document.writeln("Convert '175646.99' to number: " + Number("175646.99") + "<br>");

// Number formatting
let y = 12.676;
document.writeln("y toFixed(3): " + y.toFixed(3) + "<br>");
document.writeln("y toPrecision(5): " + y.toPrecision(5) + "<br><br>");

// User Input
let studFirstName = prompt("Enter your First Name");
let studLastName = prompt("Enter your Last Name");

// Display user input
document.writeln("<p style='color:red; font-weight:bold;'>Hello, " + 
                 studFirstName + " " + studLastName + "!</p>");
