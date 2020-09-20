AOS.init();
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
document.getElementById('fname').addEventListener('blur',validateFirstName)
document.getElementById('lname').addEventListener('blur',validateLastName)
document.getElementById('email').addEventListener('blur',validateEmail)
function validateFirstName()
{
    const fname=document.getElementById('fname');
    const re=/^[a-zA-Z]{2,20}$/
    if(!re.test(fname.value))
    {
        fname.classList.add('is-invalid');
        fname.classList.remove('is-valid');
    } 
    else
    {
        fname.classList.add('is-valid');
        fname.classList.remove('is-invalid');
    }
}
function validateLastName()
{
    const fname=document.getElementById('lname');
    const re=/^[a-zA-Z]{2,20}$/
    if(!re.test(lname.value))
    {
        lname.classList.add('is-invalid');
        lname.classList.remove('is-valid');
    } 
    else
    {
        lname.classList.add('is-valid');
        lname.classList.remove('is-invalid');
    }
}
function validateEmail()
{
    const email=document.getElementById('email');
    const re=/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.[a-zA-Z]{2,5}$/
    if(!re.test(email.value))
    {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    } 
    else
    {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}