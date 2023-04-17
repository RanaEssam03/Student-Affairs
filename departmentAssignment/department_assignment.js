function getData() {
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
}


function getResultData() {
    let studentResults = localStorage.getItem("results");
    studentResults = JSON.parse(studentResults);
    return studentResults
}

function getCurrentId() {
    var id = localStorage.getItem("currentStudentId");
    id = JSON.parse(id);
    return id;
}

function loadData() {
    var students = getResultData();
    var currentID = getCurrentId();
    console.log(currentID);
    for (i = 0; i < students.length; i++) {
        if (students[i].id == currentID) {
            document.getElementById("IdResult").innerHTML = students[i].id;
            document.getElementById("nameResult").innerHTML = students[i].first_name + students[i].last_name;
        }
    }
}

function writeData() {
    var selectedOption = document.querySelector('#department');
    var val = selectedOption.value;
    var allStudents = getData();
    // var students = getResultData();
    var currentID = getCurrentId();
    for (i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id == currentID) {
            if (allStudents[i].level == "3") {
                if (allStudents[i].state == "true") {
                    allStudents[i].department = val;
                    alert("Assigned successfully");
                    break;
                } else {
                    alert("cannot assign department, student state must be active");
                }
            } else {
                alert("cannot assign department, level must be = 3");
            }
        }
    }
    pushData(allStudents);

}

function pushData(students) {
    localStorage.setItem("students", JSON.stringify(students));

}

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
