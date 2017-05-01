var storageManager = {
    
    set: function(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    },

    get: function(key){
        return JSON.parse(localStorage.getItem(key));
    },

    // Gets the stored users. Always returns an array even if empty
    getUsers: function(){
        var users = this.get('users');
        if (users == null){
            users = []
        }

        return users;
    },

    // Adds a new user if not already registerd
    addUser: function(user){
        var result = true;
        var users = this.getUser();
        
        // Check if user does not exist already.
        for(var i = 0; i <= users.lenght -1; i++){
            if (users[i].fullname == user.fullname
                || users[i].DNI == user.DNI
                || users[i].email == user.email){
                    result = false;
                    break;
            }
        }

        if (result == true){
            // If the user does not exist, we register it!
            users.push(user);
            this.set("users", users);
        }

        return result;
    }, 
    
    /* Añadir más funciones para usuarios a medida que sean necesarias (ejemplo: getUser(username)) */

    addProperties: function(properties){
        var storedProperties = this.getProperties();
        if (storedProperties == null){
            localStorage.setItem('properties', JSON.stringify(PROPERTIES));
        }
    },

    getProperties: function(){
       
    }

    /* Añadir más funciones para inmuebles a medida que sean necesarias (ejemplo: addCommentToProperty()) */
}