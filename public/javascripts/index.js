document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        document.getElementById('loginDiv').classList.add('fullWidthAnimation');
        document.getElementById('loginFormDiv').classList.add('hideForm');
        setTimeout(function () {
            window.location.href = '/dashboard';
        }, 1000 * 1.2);
        event.preventDefault();
    });
});