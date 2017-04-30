var storage = {
    
    addUser: function(user){
        var result = false;

        var users = this.getUsers();

        // TODO: antes de hacer el push (añadir al array users), comprobar que el usuario no existe y devulver true si se añadió bien.

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        return result;
    }, 
    
    getUsers: function(){
        var users = JSON.parse(localStorage.getItem('users'));
        if (users == null){
            users = []
        }

        return users;
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