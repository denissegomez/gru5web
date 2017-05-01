function register(){
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
    
    // TODO read all the pending fields and validate them
    user.name = document.getElementById("name");
    user.lastname = document.getElementById("lastname");
    user.fullname = user.name + " " + user.lastname;
    user.DNI = document.getElementById("DNI");
    
    user.email = document.getElementById("email");    

    var result = storageManager.addUser(user);

    // ToDo: if result is false show error message, if true, login the user and redirect.
}