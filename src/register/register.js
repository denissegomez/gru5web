function register(){
    var user = getUser();

    var validated = validate(user);

    
    // if validated var result = storageManager.addUser(user);

    // ToDo: if result is false show error message, if true, login the user and redirect.
}

function getUser(){
        var user = { 
        // name
        // lastname
        // fullname = name + lastname
        // DNI
        // birthdate
        // address
        // city
        // zipcode
        // country
        // phone
        // email
        // username
        // password
    };
    
    user.name = document.getElementById("name").value;
    user.lastname = document.getElementById("lastname").value;
    user.fullname = user.name + " " + user.lastname;
    user.DNI = document.getElementById("dni").value;
    user.birthdate = document.getElementById("birthdate").value;
    user.address = document.getElementById("address").value;
    user.city = document.getElementById("city").value;
    user.zipcode = document.getElementById("zipcode").value;
    user.phone = document.getElementById("phone").value;
    user.email = document.getElementById("email").value;
    user.username  = document.getElementById("username").value;
    user.password = document.getElementById("password").value;  

    return user;   
}

function isAdult(birthdate) {
    var today = new Date();
    var birth = new Date(birthdate);
    var age = today.getFullYear() - birth.getFullYear();
    var month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age = age - 1;
    }
    return age > 18;
}

function validate(user){
    var result = true;
    var errorMessage = document.getElementById("errorMessage");

    if (isAdult(user.birthdate) == false){
        errorMessage.innerText = errorMessage.innerText + "\n Debe ser mayor de edad para poder registrarse.";
        result = false;
    }

    var verifyPassword = document.getElementById("verifyPassword").value;
    if (user.password !== verifyPassword){
        errorMessage.innerText = errorMessage.innerText + "\n No coinciden las contraseñas.";
        result = false;
    }

    if (result) {
        errorMessage.innerText = "";
    }

    return result;
}