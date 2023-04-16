function getResultData() {
    let studentResults = localStorage.getItem("results");
    studentResults = JSON.parse(studentResults);
    return studentResults
}

function logResults() {
    var val = localStorage.getItem("value-to-search-for");
    console.log(val);
    let box = document.getElementById("header1");
    let text = document.createTextNode(val);
    box.appendChild(text);
    let studentResult = getResultData();

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('mytable').appendChild(tbody);

    for (i = 0; i < studentResult.length; i++) {
        let row = document.createElement('tr');
        let d1 = document.createElement('td');
        d1.setAttribute("id", "id")
        d1.innerHTML = studentResult[i].id;
        let d2 = document.createElement('td');
        d2.innerHTML = studentResult[i].first_name + studentResult[i].last_name;
        let d3 = document.createElement('td');
        d3.innerHTML = studentResult[i].level;
        let d4 = document.createElement('td');
        d4.setAttribute("class", "assign");
        let formdata = document.createElement('form');
        formdata.setAttribute("action", "../departmentAssignment/departmentAssignment.html");
        let buttontag = document.createElement("button");
        buttontag.setAttribute("id", studentResult[i].id);
        buttontag.setAttribute("Onclick", "getStudent(this.id);");
        buttontag.innerHTML = "Assign";
        formdata.appendChild(buttontag);
        d4.appendChild(formdata);


        row.appendChild(d1);
        row.appendChild(d2);
        row.appendChild(d3);
        row.appendChild(d4);
        tbody.appendChild(row);
    }
    if (studentResult.length == 0) {
        let row = document.createElement('tr');
        let d1 = document.createElement('td');
        d1.setAttribute("colspan", "4");
        d1.setAttribute("id", "notFound");
        d1.innerHTML = "No Matching Names";
        row.appendChild(d1);
        tbody.appendChild(row);

    }
}

function getStudent(id) {
    localStorage.setItem("currentStudentId", id);
}

// For styling menu list
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