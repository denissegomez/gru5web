function logout(){
    storageManager.logoutUser();
    window.location.href = "../index.html";
}

function showErrorAndExit(){
    alert('Se ha producido un error intentando mostrar el detalle de la vivienda seleccionada');
    window.history.back();
}

// It is only possible to get into this page by passing the id of the Property to be shown
// If no id is passed, it will navigate back to the previous page
function getProperty(){
    var queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('id') == true){
        var id = queryParams.get('id');

        var property = storageManager.getProperty(id);
        if (property != null){
            displayProperty(property);
        } 
        else {
            showErrorAndExit();
        }        
    }
    else {
        showErrorAndExit();
    }
}

function displayProperty(property){
    document.getElementById('mainImage').src = property.images[0];
    document.getElementById("price").innerHTML = property.price + ' €';    
    document.getElementById("year").innerHTML = property.year;
    document.getElementById("description").innerHTML = property.description;
    document.getElementById("address").innerHTML = property.address + '. ' + property.city + ' (' + property.region + ')';
    document.getElementById("numberOfBedrooms").innerHTML = property.numberOfBedrooms + ' habitaciones';
}
