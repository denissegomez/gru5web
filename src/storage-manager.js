var storageManager = {
    
    // Generic function to set a stringified item into localstorage
    set: function(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    },

    // Generic function to get a parsed item into localstorage
    get: function(key){
        return JSON.parse(localStorage.getItem(key));
    },
   
    // Generic function to remove an item from the localstorage
    remove: function(key){
        localStorage.removeItem(key)
    },

    // It is invoked when the application starts to make sure no user is logged in
    logoutUser: function(){
        this.remove('currentUser');
    },

    setCurrentUser: function(user){
        this.set('currentUser', user);
    },

    // Gets the stored users. Always returns an array even if empty
    getUsers: function(){
        var users = this.get('users');
        if (users == null){
            users = []
        }

        return users;
    },

    // Gets the full user object by the given username
    // If not found, return null
    getUserByUsername: function(username){
        var users = this.getUsers();
        for(var i = 0; i <= users.length -1; i++){
            if(users[i].username == username){
                return users[i];
                break;
            }
        }

        return null;
    },

    // Adds a new user if not already registerd
    /* Returns: 
     * 'fullname' if there is already a user with that name
     * 'DNI' if there is already a user with that DNI
     * 'email' if there is already a user with that email
     * 'username' if there is already a user with that username
     * '' if the user was correctly registered */
    addUser: function(user){
        var result = '';
        var users = this.getUsers();
        
        // Check if user does not exist already.
        for(var i = 0; i <= users.length -1; i++){
            if(users[i].fullname == user.fullname){
                return "fullname";
                break;
            }
            if(users[i].DNI == user.DNI){
                return "DNI";
                break;
            }
            if(users[i].email == user.email){
                return "email";
                break;
            }
            if(users[i].username == user.username){
                return "username";
                break;
            }
        }
        
        // If the user does not exist, we register it!
        users.push(user);
        this.set("users", users);

        return result;
    }, 
    
    getProperties: function(){
       return this.get("properties");
    },

    addProperties: function(properties){
        var storedProperties = this.getProperties();
        if (storedProperties == null){
            this.set('properties',PROPERTIES);
        }
    },

    /* Añadir más funciones para inmuebles a medida que sean necesarias (ejemplo: addCommentToProperty()) */
}