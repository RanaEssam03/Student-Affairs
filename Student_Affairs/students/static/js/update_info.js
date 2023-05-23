


function deleteStd(){
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
}
