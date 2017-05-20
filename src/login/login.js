// function called when login form is valid
function login(){
    var credentials = getCredentials();

    var user = storageManager.getUserByUsername(credentials.username);

    if (validateUser(credentials, user)) {
        storageManager.setCurrentUser(user);
        window.location.href = '../map/map.html';
    }
}

// gets the values from the form fields
function getCredentials(){
    var credentials = {
        username: '',
        password: '', 
    };

    credentials.username = document.getElementById('username').value;
    credentials.password = document.getElementById('password').value;

    return credentials;
}

// validates the login, counts the attempts and bans the user if needed
function validateUser(credentials, user) {
    var result = true;
    var maxAttempts = 3;
    var remainingAttempts = 0;
    var attempts = document.getElementById('attempts').value;
    
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "";

    if (user == null){
        result = false;
        errorMessage.innerText = 'El usuario introducido no existe.';
    }
    else if(user.banned){
        result = false;
        attempts = maxAttempts;
    }
    else if(credentials.password != user.password){
        result = false;
        attempts++;
        remainingAttempts = maxAttempts - attempts;
        errorMessage.innerText = 'La contraseña introducida no es correcta. Le quedan ' + remainingAttempts + ' intentos.';
    }
    
    if (attempts == maxAttempts){
        storageManager.banUser(user);
        errorMessage.innerText = 'Su usuario está bloqueado. Por favor contacte con su administrador';
    }

    document.getElementById('attempts').value = attempts;

    return result;
}
