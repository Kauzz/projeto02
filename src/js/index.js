document.addEventListener('DOMContentLoaded', function () {
    const btnTema = document.getElementById('tema');
    const body = document.body;

    btnTema.addEventListener('click', function () {
        body.classList.toggle('dark-tema');
    });
});