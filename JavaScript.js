const form = document.getElementById("form")
const email = document.getElementById('input');

function showError(email, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const span = formControl.querySelector('span');
    span.innerText = message;
}

form.addEventListener('submit', function (e){
    e.preventDefault();
    if(email.value === ''){
        showError(email, "Valid email required")
    }
    else{
        window.location.href = 'form.html'
    }
});