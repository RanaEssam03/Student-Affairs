
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

  function submitState(){

        
  }




  function setId(id){
    localStorage.setItem("id", JSON.stringify(id));
  }

  
function pushData(students){
  localStorage.setItem("students", JSON.stringify(students));

}


// // For styling menu list
// function displaymenu() {
//   var checkBox = document.getElementById("menu_checkbox");
//   // Get the output text
//   var text = document.getElementById("menuAdded");

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true) {
//       text.style.display = "block";
//   } else {
//       text.style.display = "none";
//   }
// }



//  function submitState(id, state)  {
  
//   // Send the button ID to the Django view function
//   $.ajax({
//     url: "/allstudents/",
//     type: "POST",
//     data: { button_id: buttonId },
//   });
// };

var form
function submitForm(id){
  id2 = id;

  form= document.getElementById(id)
  form.submit()

}

function submitFormReturn(event) {
  event.preventDefault()
  
}

//Get form element
function submitForm2(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.

function submitFormAjax(event, id) {
  alert("Submitted");

  var ajxForm = document.getElementById(id);
  var data = new FormData(ajxForm);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "");
  xhr.send(data);
  xhr.onload = function() {
     alert("Submitted");
  };
  return false;
}

var  id2 ;

function setId(id){
  id2 = id;
}
function login(e){
  e.preventDefault(); //to stop form action i.e. submit
  var ajxForm = document.getElementById(id2);
  alert(ajxForm.get("id"));

  // var data = new FormData(ajxForm);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "");
  xhr.send(ajxForm);
  xhr.onload = function() {
    //  alert("Submitted");
  };
  return false;
}