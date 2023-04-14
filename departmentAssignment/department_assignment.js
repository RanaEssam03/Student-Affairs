function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }
  
  function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
  
    return students;
  }

  
  
  