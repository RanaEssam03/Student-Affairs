function getData() {
    let students = localStorage.getItem("students");
    students = JSON.parse(students);
    return students;
}

function getVal() {
    var val = document.querySelector("#search").value;
    localStorage.setItem("value-to-search-for", val);
    searchData(val);
}


function searchData(val) {
    let studentResult = getData();
    let studentsData = getData();
    for (i = 0; i < studentsData.length; i++) {
        if (studentsData[i].first_name.toLowerCase() == val.toLowerCase() + ' ') {
            studentResult.push(studentsData[i]);
        } else if (studentsData[i].first_name.toLowerCase() + studentsData[i].last_name.toLowerCase() == val.toLowerCase()) {
            studentResult.push(studentsData[i]);
        }
    }
    studentResult = studentResult.filter(function (el) {
        return studentsData.includes(el);
    });
    console.log(studentResult);
    pushResultData(studentResult);
}

function pushResultData(studentResult) {
    localStorage.setItem("results", JSON.stringify(studentResult));
}

// For styling menu list
// function displaymenu() {
//     var checkBox = document.getElementById("menu_checkbox");
//     // Get the output text
//     var text = document.getElementById("menuAdded");

//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }
