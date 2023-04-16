
function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }
  
  function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
  }

  function changeState(id){
      let students = getData();
      let index;
      for (let i = 0; i < students.length; i++){
          if (students[i].id == id){
              index = i;
              break;
          }
      }
      d = document.getElementById(id).value;
      students[index].state = d;
      pushData(students);
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
          " <select class=\"dropdown\"  name=\"options\" onchange=\"changeState(students[i].id)\" id=" + students[i].id + ">\n" +
          "<option value=\"false\">Inactive</option>\n" +
          "<option value=\"true\" >Active</option>\n" +
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


// For styling menu list
function displaymenu() {
  var checkBox = document.getElementById("menu_checkbox");
  // Get the output text
  var text = document.getElementById("menuAdded");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}



  