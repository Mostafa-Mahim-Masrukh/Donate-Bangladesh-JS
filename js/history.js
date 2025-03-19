


//toggle 1
document.getElementById('toggle-button-history').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('toggle-button-donate').classList.remove('bg-lime-300');
    document.getElementById('toggle-button-history').classList.add('bg-lime-300');


    document.getElementById('transaction-history-page').classList.remove('hidden');
    document.getElementById('card-design-container').classList.add('hidden');


})


//toggle 2
document.getElementById('toggle-button-donate').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('toggle-button-history').classList.remove('bg-lime-300');
    document.getElementById('toggle-button-donate').classList.add('bg-lime-300');


    document.getElementById('transaction-history-page').classList.add('hidden');
    document.getElementById('card-design-container').classList.remove('hidden');

})


//update the history - transaction

function updateThehistroy(id,title){

    const historyContainer = document.getElementById('history-container');

    const p = document.createElement('p');
    p.innerText = `${id} BDT  ${title}`;
    historyContainer.append(p);
}



