
//go to the blog page using window.location.href ="blog.html"

document.getElementById('blog-button').addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = 'blog-page.html';
})



//card number - 1

document.getElementById('first-Section-donate-button').addEventListener('click', function () {

    //get the my PERSONAL amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);

    //get the input value how much i want to pay (shared-function used)
    const donateInputValue = payment('.donate-input-field-first', myAccountFund);


    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('first-section-fund');
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);





    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;



    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;



});



//card number - 2
document.getElementById('second-Section-donate-button').addEventListener('click', function () {


    //get the my personal amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);


    //get the input value how much i want to pay (shared-function used)
    const donateInputValue = payment('.donate-input-field-second', myAccountFund);
    console.log(donateInputValue);

    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('second-section-fund'); //change-2
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);




    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;


    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;



})



//card number - 3
document.getElementById('third-Section-donate-button').addEventListener('click', function () {

    //get the my personal amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);

    //get the input value how much i want to pay (shared-function used)
    const donateInputValue = payment('.donate-input-field-third', myAccountFund);
    console.log(donateInputValue);

    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('third-section-fund'); //change-2
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);




    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;


    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;



})
