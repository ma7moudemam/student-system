let studentTable = document.querySelector('table');



let getDepartments = async function() {
    // get data
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data = await response.json();
    return data;
}

async function renderDepartment() {
    let departments = await getDepartments();
    console.log(departments)

    let tableData = document.querySelector("table");

    departments.forEach(dep => {

        let createdTr = document.createElement('tr');
        let htmlSegment = `
                            <td>${dep.Name} </td>
                        `;
        createdTr.innerHTML = htmlSegment;
        tableData.append(createdTr);
    });
}

renderDepartment();