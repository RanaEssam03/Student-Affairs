function updateStudent(form){
    if(document.getElementById("hidden").value != "1")
        alert("Student updated!")
    
}

function deleteStd(){
    document.getElementById("hidden").value = "1"
    document.getElementById("fields").submit();
    return;
} 

function confirmDeletion(){
    const reponse = confirm("Are you sure you want to delete this student?");
    if (reponse == true){
        deleteStd();
    }   
}