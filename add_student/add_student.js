
function addStudent(e) {
  let cnt = localStorage.getItem("cnt");

  let GPA = document.getElementById("gpa").value;
  let phoneNum = document.getElementById("phone").value;
  let fName = document.getElementById("first_name").value;
  let lName = document.getElementById("last_name").value;
  let Email = document.getElementById("email").value;
  let BirthDate = document.getElementById("birthdate").value;
  let Level = document.getElementById("level").value;
  let Gender =  document.querySelector('input[name = gender]:checked').value;

  let students = getData();

  if (cnt == null) {
    cnt = students.length;
  }

  if(GPA < 0 || GPA> 4){
    alert("Invalid GPA");
    e.preventDefault();
    return;
  }


  let student = {
    id: 20210000 + parseInt(cnt),
    first_name: fName + " ",
    last_name: lName,
    email: Email,
    birthdate: BirthDate,
    gpa: GPA,
    phone: phoneNum,
    level: Level,
    department: "General",
    state: "false",
    gender: Gender
  }
  cnt++;
  localStorage.setItem("cnt", cnt);
  students.push(student);

  pushData(students);

  alert("Student added successfully");



}



function pushData(students) {
  localStorage.setItem("students", JSON.stringify(students));

}

function getData() {
  let students = localStorage.getItem("students");
  students = JSON.parse(students);
  // while(students.length){                  //  uncomment these lines to clear the local storage
  //   students.pop();
  // }

  return students;
}





