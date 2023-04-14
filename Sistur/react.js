const loginForm = document.querySelector('#login_form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    fetch('https://cenope-dev.ejercito.mil.ar/api/v1/login', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const token = data.token;
        document.cookie = token;
        window.location.href = 'index1.html';  //esto te redirige hacia el hola .html
    })
    .catch(error => {
        console.log(error);
    });
});


$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    });



