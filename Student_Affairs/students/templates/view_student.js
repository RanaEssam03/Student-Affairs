
function pushData(students){
    localStorage.setItem("students", JSON.stringify(students));
  
  }
  
  function getData(){
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
  }

  function changeState(Id){
      let students = getData();
      let index;
      for (let i = 0; i < students.length; i++){
          if (students[i].id == Id){
              index = i;
              break;
          }
      }
      d = document.getElementById(Id).value;
      students[index].state = d;
      pushData(students);
  }


  function viewStudents(){
    let students = getData();
    let tbody = document.getElementById("table");
    for (let i = 0; i < students.length; i++){
      var setState;
      if(students[i].state == "true"){
          setState =  "<option value=\"false\" >Inactive</option >\n" +
          "<option value=\"true\" selected >Active</option>\n" ;
      }
      else {
          setState =  "<option value=\"false\" selected >Inactive</option >\n" +
          "<option value=\"true\" >Active</option>\n" ;
      }
      document.write(
          "<tr><td><strong>" + students[i].id + "</strong></td>" +
          "<td>" + students[i].first_name + students[i].last_name + "</td>" +
          "<td>" + students[i].level + "</td>" +
          "<td>" + students[i].department + "</td>" +
          "<td>" + students[i].gpa + "</td>" +
          "<td>\n" +
          "<label for=\"options\"></label>\n" +
          " <select class=\"dropdown\"  name=\"options\" onchange=\"changeState("+students[i].id+")\" id=" + students[i].id + " value = "+students[i].state+">\n" +
          setState +
          "</select>\n" +
          "</td>" +
          "<td><a class=\"button\" href=\"../update_info/update_info_screen.html\" onclick= setId("+students[i].id+")><button type=\"button\"  >Edit</button></a></td>\n" +
          "<td><a class=\"button\" href=\"../view_more_info/view_more_info.html\" onclick= setId("+students[i].id+")><button type=\"button\">View Info</button></a></td>\n"
          + "</tr>"
      )
      // getElementById(students[i].id).value = students[i].state;
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



  