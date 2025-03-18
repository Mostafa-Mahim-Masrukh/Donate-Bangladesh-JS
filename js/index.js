document.getElementById('first-Section-donate-button').addEventListener('click', function () {

    //get the input value how much i want to pay
    const donateInputValueField = document.querySelector('.donate-input-field-first');
    const donateInputValue = parseFloat(donateInputValueField.value);

    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('first-section-fund');
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);


    //get the my personal amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);


    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;



    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;


    //clear the input field
    donateInputValueField.value = "";




});


document.getElementById('second-Section-donate-button').addEventListener('click', function () {



    //get the input value how much i want to pay
    const donateInputValueField = document.querySelector('.donate-input-field-second');  //change-1
    const donateInputValue = parseFloat(donateInputValueField.value);

    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('second-section-fund'); //change-2
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);
   


    //get the my personal amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);


    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;


    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;

    

})




document.getElementById('third-Section-donate-button').addEventListener('click', function () {



    //get the input value how much i want to pay
    const donateInputValueField = document.querySelector('.donate-input-field-third');  //change-1
    const donateInputValue = parseFloat(donateInputValueField.value);

    //get the value of stock fund of them
    const firstSectionFundTextt = document.getElementById('third-section-fund'); //change-2
    const firstSectionFundValue = parseFloat(firstSectionFundTextt.innerText);
   


    //get the my personal amount that i have in my bank account
    const myAccountFundtext = document.getElementById('my-personal-fund');
    const myAccountFund = parseFloat(myAccountFundtext.innerText);


    //calculation
    const newFundValue = donateInputValue + firstSectionFundValue;
    const newPersonalFundValue = myAccountFund - donateInputValue;


    //update the displayed values
    firstSectionFundTextt.innerText = newFundValue;
    myAccountFundtext.innerText = newPersonalFundValue;

    

})
