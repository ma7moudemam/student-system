let departmentId = document.querySelector('.addId');
let departmentName = document.querySelector('.addName');

let getDepartments = async function() {
    // get data
    let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments");
    let data = await response.json();
    return data;
}

// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.querySelector('.close');

let nameErrorMessage = document.querySelector('.errorMsg');
nameErrorMessage.style.display = "none";

let idErrorMessage = document.querySelector('.idErrorMsg');
idErrorMessage.style.display = "none";

let addButton = document.querySelector('.add')
    .addEventListener('click', async function(e) {

        let departments = await getDepartments();



        if (departmentName.value == null || departmentName.value == false || departmentName.value == undefined) {
            nameErrorMessage.style.display = "block";
        } else if (!isIdValid()) {
            idErrorMessage.style.display = "block";
        } else {
            let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments", {
                method: "post",
                body: JSON.stringify({ id: departmentId.value, name: departmentName.value }),
                headers: { "Content-Type": "application/json" }
            });
            let data = await response.json();
            console.log(data, typeof data);
            nameErrorMessage.style.display = "none";
            idErrorMessage.style.display = "none";
            modal.style.display = "block";
        }

        function isIdValid() {
            for (let key in departments) {
                if (departments[key]._id == departmentId.value) {
                    return false;
                } else if (departmentId.value == null || departmentId.value == false || departmentId.value == undefined) {
                    return false;
                } else {
                    return true;
                }
            }
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