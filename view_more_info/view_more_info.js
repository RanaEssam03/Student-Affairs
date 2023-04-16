
function get_id(){
    let id = localStorage.getItem("id");
    id = JSON.parse(id);
    return id;
}

function get_data(){
    student_list = localStorage.getItem("students");
    student_list= JSON.parse(student_list);
    return student_list;
}


function get_student(){
    let id = get_id();
    let students = get_data();
    console.log(id);
    for(let i = 0; i < students.length; i++){
        if(students[i].id === id){
            //let student = student[i];
            return students[i];  
        }
    }
}

function view_student(){
    student = get_student();
    console.log(student);
    document.getElementById('id').innerHTML = student.id;
    document.getElementById('firstName').innerHTML = student.first_name;
    document.getElementById('lastName').innerHTML = student.last_name;
    document.getElementById('gpa').innerHTML = student.gpa;
    document.getElementById('gender').innerHTML = student.gender;
    document.getElementById('email').innerHTML = student.email;
    document.getElementById('department').innerHTML = student.department;
    document.getElementById('phone').innerHTML = student.phone;
    document.getElementById('birthdate').innerHTML = student.birthdate;
}
