const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
})

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


function setError(index){
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function nameValidate(){
    if(campos[0].value.length < 3) 
    {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else {
        removeError(1);
    }  
}

