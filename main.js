var name_of_student_array= [];

function submit()


{
for (var i = 1; i  <= 4; i++)
{
var name = document.getElementById("name_of_the_student_"+i).value;
name_of_student_array.push(name)
}
console.log(name_of_student_array)

var display_student_array= [];

for (var k = 0; k < name_of_student_array.length; k++)
{
    display_student_array.push("<h4>NAME- " +name_of_student_array[k]+"</h4>")
}
console.log(display_student_array)
}
