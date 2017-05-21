function logout(){
    storageManager.logoutUser();
    window.location.href = "../index.html";
}

function filterChanged(){
    storageManager.setPropertiesListFilter(document.getElementById('filter').value);
    
    var properties = storageManager.getPropertiesBasedOnFilter();
    displayProperties(properties);
}

function displayProperties(properties){
    emptyPropertiesList();

    for(var i = 0; i < properties.length; i++){
        var divCard = createDiv(properties[i].id, 'card');
        var imageElement = createImage(properties[i].images[0]);
        var divElement = createDiv('innerDiv-' + i,'');
        var priceElement = createH2(properties[i].price);
        var roomsElement = createSpan(properties[i].numberOfBedrooms);
        var yearElement = createSpan(properties[i].year);
        var addressElement = createParagraph(properties[i].address + ' ' + properties[i].city);
        var descriptionElement = createParagraph(properties[i].description);
        
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

function createImage(imageUrl){
    var image = document.createElement('img');
    image.src = imageUrl;
    return image;
}

function createH2(content){
    var h2 = document.createElement('h2');
    h2.innerHTML = content;
    return h2;
}

function createSpan(content){
    var span = document.createElement('span');
    span.innerHTML = content;
    return span;
}

function createParagraph(content){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = content;
    return paragraph;
}
