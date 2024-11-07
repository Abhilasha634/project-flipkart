document.getElementById("myform").addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const errormessage=document.getElementById("errormessage");

    errormessage.textContent=" "
    errormessage.style.color='red';

    if(!name || !email || !product || !quantity ){
        errormessage.textContent=" please fill the required field";

    }
    else{
        alert("Form submitted successfully");
    }

    
});
