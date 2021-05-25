// Pasiemam kintamuosius
var table = document.getElementById('table');
var number = document.getElementById('number');
var speed = document.getElementById('speed');
var time = document.getElementById('time');
var date = document.getElementById('date');
var deleteSubmit = document.getElementById('delete-submit');
var editForm = document.getElementById('edit-form');
var addForm = document.getElementById('add-form');
var addModal = document.getElementById('add-modal');
const newAddModal = new bootstrap.Modal(addModal);
var editModal = document.getElementById('edit-modal');
const newEditModal = new bootstrap.Modal(editModal);
var deleteTr = true;
// Edit inputs
var numberEdit = document.getElementById('number-edit');
var speedEdit = document.getElementById('speed-edit');
var timeEdit = document.getElementById('time-edit');
var dateEdit = document.getElementById('date-edit');
// Funkcija, kuri sukuria tr ir ideda ji i tbody
const createRow = (numeris, greitis, laikas, data) => {
    let tr = `
    <tr>
        <td>${numeris}</td>
        <td>${greitis}</td>
        <td>${laikas}</td>
        <td>${data}</td>
        <td><button type="button" class="btn btn-info edit" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button></td>
        <td><button type="button" class="btn btn-danger delete" data-bs-toggle="modal" data-bs-target="#delete-modal">Delete</button></td>
    </tr>`;
    table.innerHTML += tr;
}

// Sudedam duomenis i letenle is data masyvo
data.forEach(item => {
    createRow(item.numeris, item.greitis, item.laikas, item.data);
});

// Eilutes pridejimas
addForm.addEventListener('submit', e => {
    e.preventDefault();
    createRow(number.value, speed.value, time.value, date.value);
    addForm.reset();
    newAddModal.hide();
});
table.addEventListener('click', e => {
    // Eilutes suradimas
    if (e.target.matches('.delete')) {
        // isimenam eilute, kurios videju paspaudem delete mygtuka
        deleteTr = e.target.closest('tr');
    } else if (e.target.matches('.edit')) {
        // Isimenam redagavimo td elementus
        editValues = e.target.closest('tr').querySelectorAll('td');
        // nustatom redagavimo modalo inputu reiksmes
        numberEdit.value = editValues[0].innerText;
        speedEdit.value = editValues[1].innerText;
        timeEdit.value = editValues[2].innerText;
        dateEdit.value = editValues[3].innerText;
    }
});
deleteSubmit.addEventListener('click', () => {
    // Eilutes trinimas
    deleteTr.remove();
});
// Eilutes redagavimas
editForm.addEventListener('submit', e => {
    e.preventDefault();
    editValues[0].innerText = numberEdit.value;
    editValues[1].innerText = speedEdit.value;
    editValues[2].innerText = timeEdit.value;
    editValues[3].innerText = dateEdit.value;
    newEditModal.hide();
})