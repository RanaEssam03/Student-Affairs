
function deleteStd(){
    document.getElementById("hidden").value = "1"
    document.getElementById("fields").submit();
    return;
} 
let flag = false ;

function confirmDeletion(form){
    const reponse = confirm("Are you sure you want to delete this student?");
    flag = true

    if (reponse == true){
    
        deleteStd();
    }
 
}
function updateStd(event){
    if(!flag && document.getElementById("hidden").value =='0')
        alert("student updated")

    event.preventDefault();
}


