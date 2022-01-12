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

renderDepartment();


let studnetName = document.querySelector('.addStudent');

// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.querySelector('.close');


let errorMessage = document.querySelector('.errorMsg');
errorMessage.style.display = "none";
let addButton = document.querySelector('.add')
    .addEventListener('click', async function() {
        let departmentID = document.querySelector('select').value;
        // let departmentName = document.querySelector('select');
        // let depName = departmentName.options[departmentName.selectedIndex].text;

        if (studnetName.value == null && studnetName.value == false) {
            errorMessage.style.display = "block";

        } else {
            let response = await fetch("https://node-monge-iti-project.herokuapp.com/students", {
                method: "post",
                body: JSON.stringify({ name: studnetName.value, department: departmentID }),
                headers: { "Content-Type": "application/json" }
            });
            let data = await response.json();
            console.log(data, typeof data);

            modal.style.display = "block";
        }


    });


span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}