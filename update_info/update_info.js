function detectError(){
    var number = document.getElementById("phone").value;
    var error = document.getElementById("phoneNumError");
    if(isNaN(number)){
        error.innerHTML = "Please enter a valid number";
        error.style.color = "red";
    }
}