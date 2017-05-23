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


function navHomePrevious(){
    var sortedProperties = storageManager.getPropertiesBasedOnFilter();
    // ToDo var propertyId = ?? Get it from the <input type="hidden" id="propertyId">
    var propertyId=propertyId-1;

    for (var i=0;i < sortedProperties.length;i++){
        if (sortedProperties[i].id==propertyId){
            displayProperty(sortedProperties[i-1].id);
        }
    }
}

function navHomeNext(){
    var sortedProperties = storageManager.getPropertiesBasedOnFilter();
    // ToDo var propertyId = ?? Get it from the <input type="hidden" id="propertyId">
    var propertyId=propertyId+1;
    for (var i=0;i < sortedProperties.length;i++){
        if (sortedProperties[i].id==propertyId){
            displayProperty(sortedProperties[i+1].id);
        }
    }
}

function publishComment(){
    // ToDo call storageManager.addLikeToProperty passing the id of the property displayed (you can find it in the HTML, in the input of type hidden with id propertyId)
}

// Sets the elements' values of the HTML document with the property's properties
function displayProperty(property){
    document.getElementById('propertyId').value = property.id;
    document.getElementById('main-image').src = property.images[0];
    document.getElementById("price").innerHTML = property.price + ' €'; 
    document.getElementById('likes').innerHTML = property.likes;   
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
            
            var miniatureClicked = event.srcElement;
            document.getElementById('main-image').src =miniatureClicked.src;
        });

        // adds the miniature image to the miniature-images-section
        var miniatureImagesSection = document.getElementById('miniature-images-section');
        miniatureImagesSection.appendChild(image);
    }
}

// Listens to the click event on the main image to open a new tab with the image only.
document.getElementById('main-image').onclick = function(){
    
    var mainImage = document.getElementById('main-image').src;
    window.open(mainImage);
}
