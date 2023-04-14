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
    })
    .catch(error => {
        console.log(error);
    });
});



