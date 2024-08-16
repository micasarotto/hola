document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');
    var buttonContainer = document.getElementById('button-container');

    button.addEventListener('click', function (event) {
        alert('Hola!');
        event.stopPropagation();
    });

    buttonContainer.addEventListener('click', function () {
        alert('Hola! Soy el div');
    });
});