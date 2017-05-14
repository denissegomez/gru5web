function register(){
    var user = getUser();

    var validated = validate(user);

    if (validated == true){
        var addUserResult = storageManager.addUser(user);
        if (addUserResult = ''){
            window.location.href = '../login/login.html';
        }
        else{
            manageDuplicateUser(addUserResult);
        }
    }
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
    user.DNI = document.getElementById("dni").value.toUpperCase();
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
    errorMessage.innerText = "";

    if (isDniValid(user.DNI) == false){
        errorMessage.innerText = errorMessage.innerText + "\n - Debe introducir un DNI válido.";
        result = false;
    } 

    if (isAdult(user.birthdate) == false){
        errorMessage.innerText = errorMessage.innerText + "\n - Debe ser mayor de edad para poder registrarse.";
        result = false;
    }

    if (user.zipcode.length !== 5){
        errorMessage.innerText = errorMessage.innerText + "\n - El código postal tiene que tener una longitud de 5 números.";
        result = false;
    }

    if (user.phone.length !== 9){
        errorMessage.innerText = errorMessage.innerText + "\n - El teléfono tiene que tener una longitud de 9 números.";
        result = false;
    }

    if (user.password.length < 8){
        errorMessage.innerText = errorMessage.innerText + "\n - La contraseña tiene que tener una longitud de al menos 8 caracteres.";
        result = false;
    }

    if (user.password.replace(/[^A-Z]/g, "").length < 2){
        errorMessage.innerText = errorMessage.innerText + "\n - La contraseña tiene que tener más de una mayúscula.";
        result = false;
    }

    if (user.password.replace(/[^0-9]/g, "").length < 2){
        errorMessage.innerText = errorMessage.innerText + "\n - La contraseña tiene que tener más de un número.";
        result = false;
    }

    var verifyPassword = document.getElementById("verifyPassword").value;
    if (user.password !== verifyPassword){
        errorMessage.innerText = errorMessage.innerText + "\n - No coinciden las contraseñas.";
        result = false;
    } 

    if (result) {
        errorMessage.innerText = "";
    }

    return result;
}

function isDniValid(dni) {
    var dniNumber;
    var letr;
    var letters;

    dniNumber = dni.substr(0,dni.length-1);
    letr = dni.substr(dni.length-1,1);
    dniNumber = dniNumber % 23;
    letters='TRWAGMYFPDXBNJZSQVHLCKET';
    letters=letters.substring(dniNumber,dniNumber+1);
    if (letters == letr.toUpperCase()) {
        return true;
    }
    else{
        return false;
    }
}

function manageDuplicateUser(addUserResult){
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "";

    switch(addUserResult){
        case 'username':
            errorMessage.innerText = errorMessage.innerText + "\n - El nombre de usuario elegido no está disponible.";
            document.getElementById("username").focus();
            break;
        case 'DNI':
            errorMessage.innerText = errorMessage.innerText + "\n - Ya existe un usuario con el DNI introducido.";
            document.getElementById("dni").focus();
            break;
        case 'email':
            errorMessage.innerText = errorMessage.innerText + "\n - Ya existe un usuario con el email introducido.";
            document.getElementById("email").focus();
            break;
        case 'fullname':
            errorMessage.innerText = errorMessage.innerText + "\n - Ya existe un usuario con el nombre introducido.";
            document.getElementById("name").focus();
            break;
    }
}