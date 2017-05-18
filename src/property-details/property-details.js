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

// Sets the elements' values of the HTML document with the property's properties
function displayProperty(property){
    document.getElementById('main-image').src = property.images[0];
    document.getElementById("price").innerHTML = property.price + ' €';    
    document.getElementById("year").innerHTML = property.year;
    document.getElementById("description").innerHTML = property.description;
    document.getElementById("address").innerHTML = property.address + '. ' + property.city + ' (' + property.region + ')';
    document.getElementById("numberOfBedrooms").innerHTML = property.numberOfBedrooms + ' habitaciones';

    addMiniatureImages(property.images);
}

// Creates miniature images for all of the property images below the main image
function addMiniatureImages(images){
    for (var i = 0; i < images.length; i++){
        
        // Creates the html img element, sets its id,  src and its class
        var image = document.createElement('img');
        image.src = images[i];
        image.setAttribute('id', i);
        image.setAttribute('class', 'miniature-image');

        // Creates the function that will be called when clicking on this miniature image to show it in the main-image element
        image.addEventListener('click', function(event){
            /* ToDo
             * 1. Get the main image element and assign it to a variable
             * 2. Get the path of the image that was clicked and assign it to the src of the main image
             *    (Note: the event object that is passed to this function when a miniature image is clicked
             *     passes the clicked html image element in event.srcElement
             *     As event.srcElement already represents an html img element, it is possible to access to its src)
             */
        });

        // adds the miniature image to the miniature-images-section
        var miniatureImagesSection = document.getElementById('miniature-images-section');
        miniatureImagesSection.appendChild(image);
    }
}

// Listens to the click event on the main image to open a new tab with the image only.
document.getElementById('main-image').onclick = function(){
    // ToDo
    // 1. get the main image element and assign it to a variable
    // 2. access its src and navigate in a new window to its source
}