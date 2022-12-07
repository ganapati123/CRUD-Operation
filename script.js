var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onAdd(this)" class="btn btn-primary btn-sm Add">Add</a>
                       <a onClick="onEdit(this)" class="btn btn-warning btn-sm Edit">Edit</a>
                       <a onClick="onDelete(this)" class="btn btn-danger btn-sm Delete">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

//Edit
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

//Delete
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
//Add
function onAdd(td) {
    if (confirm('do you want to add')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").addRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.add("show");
    } 
    else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("show"))
            document.getElementById("fullNameValidationError").classList.add("show");
    }
    return isValid;
}
//localstorage
function signup(e){
    event.preventDefault();
    
    var fullName = document.getElementById('fullName').value;
    var empCode = document.getElementById('empCode').value;
    var salary = document.getElementById('salary').value;
    var city = document.getElementById('city').value;
   
    //
    
    //

    var user = {
        fullName:fullName,
        empCode:empCode,
        salary:salary,
        city:city,
    };

    // var json = JSON.stringify(user);
    localStorage.setItem("fullName",fullName);
    localStorage.setItem("empCode",empCode);
    localStorage.setItem("salary",salary);
    localStorage.setItem("city",city);
    
    console.log('user added');
}
