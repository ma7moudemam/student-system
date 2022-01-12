let getDepartments = async function() {
    // get data
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data = await response.json();
    return data;
}

async function renderDepartment() {
    let departments = await getDepartments();
    // console.log(departments)

    let studentDepartments = document.querySelector('select');

    departments.forEach(dep => {

        let createdOption = document.createElement('option');
        createdOption.setAttribute('value', dep._id);
        let htmlSegment = `
                            ${dep.Name} 
                        `;
        createdOption.innerHTML = htmlSegment;
        studentDepartments.append(createdOption);
    });





}




// get departement data 
renderDepartment();

// Get the modal
let modalDelete = document.getElementById("myModalDelete");

// Get the modal
let modalUpdate = document.getElementById("myModalUpdate");
// Get the <span> element that closes the modal
let span = document.querySelector('.close');


// delete btn
let deleteDepartment = document.querySelector(".delete")
    .addEventListener('click', function() {
        let departmentID = document.querySelector('select').value;
        let deleteStudent = async function() {
            let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments", {
                method: "delete",
                body: JSON.stringify({ id: departmentID }),
                headers: { "Content-Type": "application/json" }
            });
            let data = await response.json();
            console.log(data, typeof data);
        }
        deleteStudent();

        modalDelete.style.display = "block";

    }); //end of delete btn


let selectedDepartment = document.querySelector('select');
let departmentName = document.querySelector('.addName');
selectedDepartment.addEventListener('change', function() {
    depName = selectedDepartment.options[selectedDepartment.selectedIndex].text;
    departmentName.value = `${depName}`;
    departmentName.textContent = `${depName}`;
});


let updateDepartment = document.querySelector(".update")
    .addEventListener('click', function() {
        let departmentID = document.querySelector('select').value;
        let departmentName = document.querySelector(".addName");
        let updateStudent = async function() {
            let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments", {
                method: "put",
                body: JSON.stringify({ id: departmentID, name: departmentName.value }),
                headers: { "Content-Type": "application/json" }
            });
            let data = await response.json();
            console.log(data, typeof data);
        }

        updateStudent();

        modalUpdate.style.display = "block";
    }); // end of update btn




span.addEventListener('click', function() {
    modalDelete.style.display = "none";
    modalUpdate.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modalDelete) {
        modalDelete.style.display = "none";
    }
    if (event.target == modalUpdate) {
        modalUpdate.style.display = "none";
    }
}