
//get the input value that i want to pay
function payment(id, myAccountFund) {

    let donateInputValueField = document.querySelector(id);
    let donateInputValue = parseFloat(donateInputValueField.value);

    if (donateInputValue <= myAccountFund) {


        //clear the input field
        donateInputValueField.value = "";

        return donateInputValue;
    }
    else {
        alert("not sufficent fund you have ");
        
        //clear the input field
        donateInputValueField.value = "";

        return 0; 
    }



}






