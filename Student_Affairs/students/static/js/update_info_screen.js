
function deleteStd(){
    document.getElementById("hidden").value = "1"
    document.getElementById("fields").submit();
    return;
} 

function confirmDeletion(form){
    const reponse = confirm("Are you sure you want to delete this student?");
    if (reponse == true){
        deleteStd();
    }
 
}