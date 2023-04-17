
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


function confirmDeletion(){
    const reponse = confirm("Are you sure you want to delete this student?");
    if (reponse == true){
        deleteStudent();
    }
    
}

function updateStudent(){
    let Id = localStorage.getItem("id");

    let fName = document.getElementById("first_name").value + " ";
    let lName = document.getElementById("last_name").value;
    let Email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;
    let Level = document.getElementById("level").value;
    let GPA = document.getElementById("gpa").value;
    if(!fName){
        alert("Invalid first name");
        return
    }
    if(!lName){
        alert("Invalid last name");
        return;
    }
    if(!Email){
        alert("Invalid email");
        return;
    }
    if(!phoneNum){
        alert("Invalid phone number");
        return;
    }
    if(!Level){
        alert("Invalid level");
        return;
    }
    if(!GPA){
        alert("Invalid GPA");
        return;
    }
    
    // if(!(fName & lName & Email & phoneNum & Level & GPA & Level )){
    //     alert("Please fill all the fields correctly");
    //     return;
    // }
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
    document.getElementsByName("first_name")[0].value = student.first_name;
    document.getElementsByName("last_name")[0].value = student.last_name;
    document.getElementsByName("email")[0].value = student.email;
    document.getElementsByName("phone")[0].value = student.phone;
    document.getElementsByName("level")[0].value = student.level;
    document.getElementsByName("gpa")[0].value = student.gpa;
    document.getElementsByName("department")[0].value = student.department;
    document.getElementsByName("birthdate")[0].value = student.birthdate;
    document.getElementsByName("id")[0].value = student.id;
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