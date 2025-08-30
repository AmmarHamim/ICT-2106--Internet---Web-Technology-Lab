// let student1 = {
//     name: "Hamim",
//     roll: 1965,
//     courses:["OOP","DS","IWT"]
// };

// document.writeln(student1.courses[0] +"<br>");
// document.writeln(student1.roll);

// let car1= {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// document.writeln("Car Brand: " + car1.year + "<br>");
// document.writeln("Car Model: " + car1.model + "<br>");

//using constructor function
// function student(name, roll, courses) {
//     this.name = name;
//     this.roll = roll;
//     this.courses = courses;
//     this.display = function() {
//         document.writeln("Name: " + this.name + "<br>");
//         document.writeln("Roll: " + this.roll + "<br>");
//         document.writeln("Courses: " + this.courses.join(", ") + "<br>");
//     }
// }
// let student2 = new student("Hamim", 1965, ["OOP", "DS", "IWT"]);
// student2.display();


// document.writeln("the student has choosen "+ student2.courses[1] + " as his second course.<br>");

// //getelementbyid
// document.writeln("<br>");
// document.writeln(document.getElementById("id1").innerText + "<br>");
// document.writeln(document.getElementById("id1").innerHTML);

// let element = document.getElementById("id1");
// let originalText = element.innerText;
// document.writeln("Original Text: " + originalText + "<br>");
// element.innerText = '<span style="color: red;">This is my id1</span>';
// document.writeln("Updated Text: " + element.innerText + "<br>");


// let element2= document.getElementsByName("id2");
// document.writeln("Element with name 'id2': " + element2[0].innerText + "<br>");

let stu = [
    {
        name:"Ammar",
        roll:1960,
        courses:["OOP", "DS", "IWT"]
    },
    {
        name:"hamim",
        roll:1965,
        courses:["OOP", "DS", "IWT"]
    },
    {
        name:"Sakib",
        roll:1966,
        courses:["OOP", "DS", "IWT"]
    }
];

for(let i=0;i<stu.length;i++){
    document.writeln("Name: " + stu[i].name + "<br>");
    document.writeln("Roll: " + stu[i].roll + "<br>");
    document.writeln("Courses: " + stu[i].courses + "<br>");
    document.writeln("<br>");
}
let tags = document.getElementsByTagName("p");
for(let i=0;i<tags.length;i++){
    // tags[i].style.color = "blue";
    // document.writeln("<span style='color:red'>" + tags[i].innerText + "</span><br>");
    document.writeln("<span style='color:blue'>" + tags[i].innerText+ "</span><br>");
}
let cls= document.getElementsByClassName("note");
for(let i=0;i<cls.length;i++){
    document.writeln("<span style='color:green'>" + cls[i].innerText + "</span><br>");
}
 var text2= document.querySelector(".note");
document.writeln(text2.innerText);
document.writeln("<br>");
var text3= document.querySelectorAll(".note")[2];
document.writeln(text3.innerText);
document.writeln("<br>");
var text4= document.querySelector(".note li"); 
document.writeln(text4.innerText);
