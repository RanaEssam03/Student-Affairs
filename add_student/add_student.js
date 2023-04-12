
let students;
let list;



function addStudent(){

  let GPA = document.getElementById("gpa").value;
let phoneNum = document.getElementById("phone").value;
let fName = document.getElementById("first_name").value;
let lName = document.getElementById("last_name").value;
let Email = document.getElementById("email").value;
let BirthDate = document.getElementById("birthdate").value;
  let students = getData();

  let student = {
    id: students.length,
    first_name: fName,
    last_name: lName,
    email: Email,
    birthdate: BirthDate,
    gpa: GPA,
    phone: phoneNum,
    department:null,
  }
  students.push(student);

  pushData(students);

  alert("Student added successfully");



}

// const form = document.getElementById("form");
// form.addEventListener("submit", function(e){
//   // e.preventDefault();
//   console.log("the form has been submited");
//   let GPA = document.getElementById("gpa");
//   let phoneNum = document.getElementById("phone");
//   let fName = document.getElementById("first_name");
//   let lName = document.getElementById("last_name");
//   let Email = document.getElementById("email");
//   let BirthDate = document.getElementById("birthdate");
//     // let students = getData();

//     // console.log(students);
//     let student = {
//       id: 5,
//       first_name: fName,
//       last_name: lName,
//       email: Email,
//       birthdate: BirthDate,
//       gpa: GPA,
//       phone: phoneNum
//     }
//     let students;
//     console.log(student);
//     students.push(student);
  
//     pushData(students);
// })



function pushData(students){
  localStorage.setItem("students", JSON.stringify(students));

}

function getData(){
  let students = localStorage.getItem("students");
  students = JSON.parse(students);
  // while(students.length){
  //   students.pop();
  // }

  return students;
}





// let myPromis = new Promise(function(myResolve, myReject){
  
//     loadDoc();
//     setTimeout(function(){
//         if(students){
//             myResolve(students);
//         }
//         else{
//             myReject("Error");
//         }
//     }, 2000);

    
// });
// myPromis.then(function(value){
//     getList(value);
//     console.log(list);
// })
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         students= this.responseText;
//       }
    
//     };
//     xhttp.open("GET", "data.txt", true);
//     xhttp.send();

//   }

//   function getList(value){
//     list = JSON.parse(value);
//   }

  