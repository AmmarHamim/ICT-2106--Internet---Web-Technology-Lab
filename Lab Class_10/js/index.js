// let age = 20;
// document.writeln("The age is: " + age + "<br>");
// let num=prompt("Enter a number:");
// square(num);
// function square(n) {
//     let result = n * n;
//     document.writeln("The square of " + n + " is: " + result + "<br>");
// }

// let base=prompt("Enter the base of the triangle:");
// let height=prompt("Enter the height of the triangle:");

// function area(base, height) {
//     return 0.5 * base * height;
// }
// // let result=area(base, height);
//  document.writeln("The area of the triangle with base " + base + " and height " + height + " is: " + area(base,height) + "<br>");

//  (function() {
//     let base = prompt("Enter the base of the triangle:");
//     let height = prompt("Enter the height of the triangle:");

//     function area(base, height) {
//         return 0.5 * base * height;
//     }

//     document.writeln("The area of the triangle with base " + base + " and height " + height + " is: " + area(base, height) + "<br>");
// })();

// let arr = new Array("apple", "banana", "cherry",12,13);
// arr.push("orange");  
// arr.unshift("mango");
// let removedEnd = arr.pop();
// let removedStart = arr.shift();
// // for(let i = 0; i < arr.length; i++) {
// //     document.writeln(arr[i]);
// // }
// arr.reverse();
// arr.sort();
// document.writeln("Reversed array:<br>" + arr.join("<br>"));

let arr2D=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i=0;i<arr2D.length;i++) {
    for(let j=0;j<arr2D[i].length;j++) {
        document.writeln(arr2D[i][j] + " ");
    }
    document.writeln("<br>");
}

