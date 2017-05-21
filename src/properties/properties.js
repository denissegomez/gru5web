function logout(){
    storageManager.logoutUser();
    window.location.href = "../index.html";
}

function pageLoaded(){
     var queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('region') == true && queryParams.get('region') == 'Navarra'){
        filterChanged();
    }
    else {    
        alert('Se ha producido un error intentando mostrar el detalle de la vivienda seleccionada');
        window.history.back();
    }
    
}

function filterChanged(){
    storageManager.setPropertiesListFilter(document.getElementById('filter').value);
    
    var properties = storageManager.getPropertiesBasedOnFilter();
    displayProperties(properties);
}

function displayProperties(properties){
    emptyPropertiesList();

    for(var i = 0; i < properties.length; i++){
        var propertyId = properties[i].id
        var divCard = createDiv('card-' + propertyId, 'card');
        var imageElement = createImage('image-' + propertyId, properties[i].images[0]);
        var divElement = createDiv('innerDiv-' + propertyId,'');
        var priceElement = createH2('price-' + propertyId, properties[i].price);
        var roomsElement = createSpan('rooms-' + propertyId, properties[i].numberOfBedrooms);
        var yearElement = createSpan('year-' + propertyId, properties[i].year);
        var addressElement = createParagraph('address-' + propertyId, properties[i].address + ' ' + properties[i].city);
        var descriptionElement = createParagraph('description-' + propertyId, properties[i].description);
        
        divCard.addEventListener('click', function(event){
            var clickedPropertyId = event.srcElement.id.split('-')[1];
            window.location.href = '../property-details/property-details.html?id=' + clickedPropertyId;
        });

        divElement.appendChild(priceElement);
        divElement.appendChild(roomsElement);
        divElement.appendChild(yearElement);
        divElement.appendChild(addressElement);
        divElement.appendChild(descriptionElement);

        divCard.appendChild(imageElement);
        divCard.appendChild(divElement);

        document.getElementById('propertiesList').appendChild(divCard);

    }
}

function emptyPropertiesList(){
    var propertiesList = document.getElementById('propertiesList');
    while(propertiesList.firstChild){
        propertiesList.removeChild(propertiesList.firstChild);
    }
}

function createDiv(id, className){
    var div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', className);
    return div;
}

function createImage(id, imageUrl){
    var image = document.createElement('img');
    image.setAttribute('id', id);
    image.src = imageUrl;
    return image;
}

function createH2(id, content){
    var h2 = document.createElement('h2');
    h2.setAttribute('id', id);
    h2.innerHTML = content;
    return h2;
}

function createSpan(id, content){
    var span = document.createElement('span');
    span.setAttribute('id', id);
    span.innerHTML = content;
    return span;
}

function createParagraph(id, content){
    var paragraph = document.createElement('p');
    paragraph.setAttribute('id', id);
    paragraph.innerHTML = content;
    return paragraph;
}
