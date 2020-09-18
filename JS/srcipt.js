AOS.init();
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
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
document.getElementById('name').addEventListener('blur',validateName)
document.getElementById('email').addEventListener('blur',validateEmail)
function validateName()
{
    const name=document.getElementById('name');
    const re=/^[a-zA-Z]{2,20}$/
    if(!re.test(name.value))
    {
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
    } 
    else
    {
        name.classList.add('is-valid');
        name.classList.remove('is-invalid');
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