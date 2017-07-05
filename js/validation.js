function formValidation()                  //Simple validation functon
{

    var phone = document.registration.phone;
    var uemail = document.registration.email;
    if(ValidateEmail(uemail))
        {
            if(allnumeric(phone))
            {
            }
        }
    return false;
}
function allnumeric(phone)                 // Telepone number verification code only checks weather value is numeric
{
    var numbers = /^[0-9]+$/;
    if(phone.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Please enter a valid Phone Number');
        phone.focus();
        return false;
    }
}
function ValidateEmail(uemail)                             // Email Verification code
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("Please enter a valid email address!");
        uemail.focus();
        return false;
    }
}
