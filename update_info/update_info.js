
function getStudent(){
    let students = getData();
    let id = localStorage.getItem("id");
    id = JSON.parse(id);
    let student;
    for (let i = 0; i < students.length; i++){
        if (students[i].id == id){
            student = students[i];
        }
    }
    return student;
}

function updateStudent(){
    let Id = localStorage.getItem("id");

    let fName = document.getElementById("first_name").value;
    let lName = document.getElementById("last_name").value;
    let Email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;
    let Level = document.getElementById("level").value;
    let GPA = document.getElementById("gpa").value;

    let students = getData();
    let index;
    for (let i = 0; i < students.length; i++){
        if (students[i].id == Id){
            index = i;
            break;
        }
    }
    students[index].first_name = fName;
    students[index].last_name = lName;
    students[index].email = Email;
    students[index].phone = phoneNum;
    students[index].level = Level;
    students[index].gpa = GPA;

    pushData(students);
    alert("Student updated successfully");
}



function viewStudent(){
    let student = getStudent();
    document.write(
       "<label for=\"first_name\">First Name:</label>"+
        "<input  type=\"text\" name=\"first_name\" id=\"first_name\" value="+ student.first_name+">"+
        "<br>"+
       "<br>"+
       "<label for=\"last_name\">Last Name:</label>"+
        "<input  type=\"text\" name=\"last_name\" id=\"last_name\" value="+student.last_name+">"+
       " <br>"+
       " <br>"+
       " <label for=\"id\">ID:</label>"+
       " <input  type=\"text\" name=\"id\" id=\"id\" value="+student.id+"  disabled>"+
         " <br>"+
         " <br>"+
         "<label for=\"level\">Level:</label>"+
         "<input  type=\"text\" name=\"level\" id=\"level\" value="+student.level+" pattern=\"[1-4]{1}\">"+
         "<br>"+
         "<br>"+
         "<label for=\"gpa\">GPA:</label>"+
         "<input  type=\"text\" name=\"gpa\" id=\"gpa\" value="+student.gpa+">"+
         "<br>"+
         "<br>"+
         "<label for=\"department\">Department:</label >"+
         "<input  type=\"text\" name=\"department\" id=\"department\" value="+student.department+" disabled>"+
         "<br>"+
         "<br>"+
       " <label for=\"email\">Email:</label>"+
       " <input  type=\"email\" name=\"email\" id=\"email\" value="+student.email+"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\" >"+
       " <br>"+
       " <br>"+
      "  <label for=\"phone\">Phone:</label>"+
        "<input   name=\"phone\" id=\"phone\" value="+student.phone+"  pattern=\"[0-9]{11}\">"+
        "<br>"+
        "<br>"+
        "<label for=\"birthdate\"> Birthdate:</label>"+
        "<input  type=\"date\" name=\"birthdate\" id=\"birthdate\" value="+student.birthdate+">"+
        "<br>"+
        "<br>"+
     " <button  class=\"UBDATE\" onclick=\"updateStudent()\">UBDATE</button>"+
     " <button  class=\"delete\" onclick=\"deleteStudent()\">DELETE</button>"

    );
}

function deleteStudent(){
    let Id = localStorage.getItem("id");
    let students = getData();
    let index;
    for (let i = 0; i < students.length; i++){
        if (students[i].id == Id){
            index = i;
            break;
        }
    }
    students.splice(index, 1);
    pushData(students);
    alert("Student deleted successfully");
    window.location.href = "../view_student_screen/view_student_screen.html";
}

function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    // while(students.length){                  //  uncomment these lines to clear the local storage  
    //   students.pop();
    // }
  
    return students;
  }
  
  function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }