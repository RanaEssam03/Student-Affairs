
function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }
  
  function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
  }

  function viewStudents(){
    students = getData();
    let table = document.getElementById("table");
    table.innerHTML = students[1].first_name;
  }
  