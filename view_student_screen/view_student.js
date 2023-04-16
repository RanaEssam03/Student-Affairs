
function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }
  
  function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
  }

  function viewStudents(){
    let students = getData();
    let tbody = document.getElementById("table");
    for (let i = 0; i < students.length; i++){
      document.write(
          "<tr></tr><td><strong>" + students[i].id + "</strong></td>" +
          "<td>" + students[i].first_name + students[i].last_name + "</td>" +
          "<td>" + students[i].level + "</td>" +
          "<td>" + students[i].department + "</td>" +
          "<td>" + students[i].gpa + "</td>" +
          "<td>\n" +
          "<label for=\"options\"></label>\n" +
          " <select class=\"dropdown\"  name=\"options\" id=\"options\"" + students[i].id + ">\n" +
          "<option>Active</option>\n" +
          "<option>Inactive</option>\n" +
          "</select>\n" +
          "</td>" +
          "<td><a class=\"button\" href=\"../update_info/update_info_screen.html\" onclick= setId("+students[i].id+")><button type=\"button\"  >Edit</button></a></td>\n" +
          "<td><a class=\"button\" href=\"../view_more_info/view_more_info.html\" onclick= setId("+students[i].id+")><button type=\"button\">View Info</button></a></td>\n"
          + "</tr>"
      )
    }
  }

  function setId(id){
    localStorage.setItem("id", JSON.stringify(id));
  }

  
function pushData(students){
  localStorage.setItem("students", JSON.stringify(students));

}


  