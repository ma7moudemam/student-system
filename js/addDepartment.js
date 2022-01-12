let departmentId = document.querySelector('.addId');
let departmentName = document.querySelector('.addName');





// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.querySelector('.close');


let addButton = document.querySelector('.add')
    .addEventListener('click', async function() {
        let response = await fetch("https://node-monge-iti-project.herokuapp.com/departments", {
            method: "post",
            body: JSON.stringify({ id: departmentId.value, name: departmentName.value }),
            headers: { "Content-Type": "application/json" }
        });
        let data = await response.json();
        console.log(data, typeof data);

        modal.style.display = "block";

    });


span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}