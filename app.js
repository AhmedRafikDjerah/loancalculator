
const form = document.querySelector('form');
form.addEventListener('submit', calculate);

function calculate(e) {

    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#annual');
    const years = document.querySelector("#years");
    const monthly_payement = document.querySelector('#monthly-payement');
    const total_payement = document.querySelector("#total-payement");
    const total_interest = document.querySelector("#total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayement = parseFloat(years.value) * 12;
    const x = Math.pow(1+calculatedInterest, calculatedPayement);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    if (isFinite(monthly)) {
        monthly_payement.value = monthly.toFixed(2);
        total_payement.value = (monthly * calculatedPayement).toFixed(2);
        total_interest.value = ((monthly * calculatedPayement) - principal).toFixed(2) ;
        showResult();


    }else {
        document.querySelector('#result').style.display = 'none';
        showError("There was an error");
    }
    e.preventDefault();
}

function showResult() {
    document.querySelector("#spinner").style.display = "flex";
    document.querySelector("#result").style.display = "none";
    setTimeout(clearSpinner, 4000);
}

function clearSpinner() {

    document.querySelector('#spinner').style.display = 'none';
    document.querySelector('#result').style.display = 'block';

}

function showError(error) {
    if(document.querySelector('.alert') === null) {
        document.querySelector("#spinner").style.display = "flex";
        setTimeout(addError, 3000, error);
    }
}


function addError(error) {
    document.querySelector("#spinner").style.display = "none";
    const div = document.createElement('div');
    div.className = 'alert alert-danger'; 

    const err = document.createTextNode(error);
    div.appendChild(err);

    const card_body = document.querySelector('.card-body');

    card_body.insertBefore(div, document.querySelector('h5'));
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();

}



