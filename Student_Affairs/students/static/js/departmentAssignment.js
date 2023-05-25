window.onsubmit = function() {
    document.myform.action = get_action();
}

function alerting(){
    var selectedOption = document.querySelector('#department');
    var value = selectedOption.value;
    alert("Student is assigned successfully in " + value + " department");
}