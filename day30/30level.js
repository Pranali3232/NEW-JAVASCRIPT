function validation(){

var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var telephone = document.getElementById('telephone').value;
var bio = document.getElementById('bio').value;


var fNameCheak = /^[A-Za-z. ]{3,13}$/;
var lNameCheak = /^[A-Za-z. ]{3,13}$/;
var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*][-_](6,20)$/;
var emailCheak = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
var telephoneCheak = /^[789][0-9]{9}$/
var bioCheak = /^[a-z-_]{8,50}$/
//? means at least ek to hona hi cahiye

if(fNameCheak.test(firstName)){
    document.getElementById('ferror').innerHTML = " ";
}
else{
    document.getElementById('ferror').innerHTML = "First name must be alphanumeric and contains 3-16 characters"
    return false //agar wrong hai to wrong hai server ke pass nahi jana
}

if(lNameCheak.test(lastName)){
    document.getElementById('lerror').innerHTML = " ";
}
else{
    document.getElementById('lerror').innerHTML = "Last name must be alphanumeric and contain 3-16 character"
    return false
}


if(password.test(password)){
    document.getElementById('perror').innerHTML = " ";
}
else{
    document.getElementById('perror').innerHTML = "Password must be alphanumeric (@,_and-are also allowed)and between 6-20 character"
    return false  
}

if(emailCheak.test(email)){
    document.getElementById('eerror').innerHTML = " ";
}
else{
    document.getElementById('eerror').innerHTML = "Email must be a valid address,e.gexample@example.com"
    return false 

}
if(telephoneCheak.test(telephone)){
    document.getElementById('terror').innerHTML = " ";
}
else{
    document.getElementById('terror').innerHTML = "A valid telephone nunber must have 10 digits only"
    return false 
}

if(bioCheak.test(bio)){
    document.getElementById('berror').innerHTML = " ";
}
else{
    document.getElementById('berror').innerHTML = "Bio must have contain only lowercase letter,underscore,hyphens and be 8-50 character"
    return false 
}
}