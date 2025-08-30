let students = [
{
    id:1,name:"Ammar",section:"A",year:2 
},
{
     id:2,name:"Hamim",section:"B",year:3 
},
{ 
    id:3,name:"Tanvir",section:"C",year:1 
}
];

for(let i=0;i<students.length;i++){
    document.writeln("ID: " + students[i].id + "<br>");
    document.writeln("Name: " + students[i].name + "<br>");
    document.writeln("Section: " + students[i].section + "<br>");
    document.writeln("Year: " + students[i].year + "<br>");
    document.writeln("<br>");
}

students.shift();
students.push({id:4,name:"Sakib",section:"D",year:2});

for(let i=0;i<students.length;i++){
    document.writeln("ID: " + students[i].id + "<br>");
    document.writeln("Name: " + students[i].name + "<br>");
    document.writeln("Section: " + students[i].section + "<br>");
    document.writeln("Year: " + students[i].year + "<br>");
    document.writeln("<br>");
}