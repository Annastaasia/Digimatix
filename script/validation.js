document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email) || !name || !phone || !email) {
        e.preventDefault();
        alert('Пожалуйста, заполните все поля, и электронная почта должна быть действительной, спасибо!');
    }
});



