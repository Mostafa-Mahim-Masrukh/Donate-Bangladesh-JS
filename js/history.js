


//toggle 1
document.getElementById('toggle-button-history').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('toggle-button-donate').classList.remove('bg-lime-300');
    document.getElementById('toggle-button-history').classList.add('bg-lime-300');

})


//toggle 2
document.getElementById('toggle-button-donate').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('toggle-button-history').classList.remove('bg-lime-300');
    document.getElementById('toggle-button-donate').classList.add('bg-lime-300');

})