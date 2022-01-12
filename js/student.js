let studentTable = document.querySelector('table');


let getStudents = async function() {
    // get data
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/students");
    let data = await response.json();
    return data;
}


let getDepartments = async function() {
    // get data
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data = await response.json();
    return data;
}

async function renderUsers() {
    let students = await getStudents();

    let tableData = document.querySelector("table");

    students.forEach(student => {





        // Add student name
        let createdTr = document.createElement('tr');
        let htmlSegment = `
                            <td>${student.Name} </td>
                        `;
        createdTr.innerHTML = htmlSegment;

        let createdTd = document.createElement('td');

        // add student department
        for (let key in student) {
            if (key == "Department" && student[key] != null) {
                createdTd.innerText = student[key].Name;
            }
            createdTr.append(createdTd);
            tableData.append(createdTr);
        }


        // update button
        let updateButton = `
        <input class="updateBtn" type="button" value="update">
            `
        let updateTd = document.createElement('td');
        updateTd.innerHTML = updateButton;
        createdTr.append(updateTd);
        tableData.append(createdTr);



        // delete btn   
        let deleteTd = document.createElement('td');
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("deleteBtn");
        deleteTd.append(deleteButton);
        createdTr.append(deleteTd);
        tableData.append(createdTr);

        deleteButton.onclick = function() {
            let deltedID = student._id;

            let deleteStudent = async function() {
                let response = await fetch("https://node-monge-iti-project.herokuapp.com/students", {
                    method: "delete",
                    body: JSON.stringify({ id: deltedID }),
                    headers: { "Content-Type": "application/json" }
                });
                let data = await response.json();
                console.log(data, typeof data);
            }
            deleteStudent();
            this.parentElement.parentElement.remove();
        }

    });
}

renderUsers();