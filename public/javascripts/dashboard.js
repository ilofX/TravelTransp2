document.addEventListener('DOMContentLoaded', function () {

    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {coverTrigger: false});
    M.Collapsible.init(document.querySelectorAll('.collapsible'));


    document.getElementById('loader').classList.add('fadeOut');
    setTimeout(function () {
        document.getElementById('loader').classList.add('displayNone');
    }, 60);
});