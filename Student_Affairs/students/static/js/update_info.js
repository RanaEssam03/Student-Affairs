
// function getStudent(){
//     let students = getData();
//     let id = localStorage.getItem("id");
//     id = JSON.parse(id);
//     let student;
//     for (let i = 0; i < students.length; i++){
//         if (students[i].id == id){
//             student = students[i];
//         }
//     }
//     return student;
// }


// function confirmDeletion(){
//     const reponse = confirm("Are you sure you want to delete this student?");
//     if (reponse == true){
//         deleteStd();
//     }
    
// }

// function updateStudent(event){
//     alert("herrre")

//     let Id = localStorage.getItem("id");

//     let fName = document.getElementById("first_name").value + " ";
//     let lName = document.getElementById("last_name").value;
//     let Email = document.getElementById("email").value;
//     let phoneNum = document.getElementById("phone").value;
//     let Level = document.getElementById("level").value;
//     let GPA = document.getElementById("gpa").value;
//     const myRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//     const validateEmail = Email.match(myRe);
    
//     if(fName == " " ){
//         alert("Invalid first name");
//         event.preventDefault()
//         return
//     }
//     if(!lName){
//         alert("Invalid last name");
//         return;
//     }
//     if(!Email || !validateEmail ){
//         alert("Invalid email");
//         return;
//     }
//     if(!phoneNum || phoneNum.length != 11 ){
//         alert("Invalid phone number");
//         return;
//     }
//     if(!Level || Level < 1 || Level >4 ){
//         alert("Invalid level");
//         return;
//     }
//     if( GPA >4 || GPA <= 0){
//         alert("Invalid GPA");
//         return;
//     }


    


//     pushData(students);
//     alert("Student updated successfully");
// }


// function deleteStudent(){
//     let Id = localStorage.getItem("id");
//     let students = getData();
//     let index;
//     for (let i = 0; i < students.length; i++){
//         if (students[i].id == Id){
//             index = i;
//             break;
//         }
//     }
//     students.splice(index, 1);
//     pushData(students);
//     alert("Student deleted successfully");
//     window.location.href = "../view_student_screen/view_student_screen.html";
// }

// function deleteStd(){
//     alert("herrre")
//     document.getElementById("hidden").value = "1"
//     document.getElementById("fields").submit();
// }


// // function submit(event){
// //     event.preventDefault();
// //     form = document.getElementById("fields")
// //     form.delete();
// // }



function deleteStd(){
    alert("delete")
    document.getElementById("hidden").value = "1"
    document.getElementById("fields").submit();
}   
function confirmDeletion(){
    const reponse = confirm("Are you sure you want to delete this student?");
    if (reponse == true){
        deleteStd();
    }
    
}

function updateStudent(event){
    alert("herrre22")

    let Id = localStorage.getItem("id");
    let form;
    let fName = document.getElementById("first_name").value + " ";
    let lName = document.getElementById("last_name").value;
    let Email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phone").value;
    let Level = document.getElementById("level").value;
    let GPA = document.getElementById("gpa").value;
    const myRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const validateEmail = Email.match(myRe);
    
    if(fName == " " ){
        alert("Invalid first name");
         form.disabled();
    }
    if(!lName){
        alert("Invalid last name");
        form.disabled();

    }
    if(!Email || !validateEmail ){
        alert("Invalid email");
        form.disabled();
        return
    
    }
    if(!phoneNum || phoneNum.length != 11 ){
        ralert("Invalid phone number");
         form.disabled();

    }
    if(!Level || Level < 1 || Level >4 ){
        alert("Invalid level");
        form.disabled();

    }
    if( GPA >4 || GPA <= 0){
        alert("Invalid GPA");
        event.preventDefault();
        return
    }
    function deleteStd(){
        alert("herrre")
        document.getElementById("hidden").value = "1"
        document.getElementById("fields").submit();
    }
    

}
