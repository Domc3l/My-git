const registrationForm = document.getElementById('registration-form');
const clientList = document.getElementById('client-list');

let clients = [];

function registerClient(name, phone, email) {
    clients.push({ name, phone, email });
    displayClients();
}

function displayClients() {
    clientList.innerHTML = '';
    clients.forEach(client => {
        const li = document.createElement('li');
        li.textContent = `Name: ${client.name}, Phone: ${client.phone}, Email: ${client.email}`;
        clientList.appendChild(li);
    });
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    registerClient(name, phone, email);
    registrationForm.reset();
});