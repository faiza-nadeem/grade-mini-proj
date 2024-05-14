                  


var mark1 = +prompt("Enter your English Marks");
var mark2 = +prompt("Enter your Math's Marks");
var mark3 = +prompt("Enter your Computer Marks");
var total=   mark1+ mark2+ mark3;
alert(total);

var percentage= total/300*100;
alert(percentage);

var grade
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B+';
} else if (percentage >= 60) {
    grade = 'B';
}
else if (percentage >= 50) {
    grade = 'C';
}
else if (percentage >= 40) {
    grade = 'D';
}
else {
    grade ='F';
}

alert(grade);
