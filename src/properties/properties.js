function logout(){
    storageManager.logoutUser();
    window.location.href = "../index.html";
}

function filterChanged(){
    storageManager.setPropertiesListFilter(document.getElementById('filter').value);
    
    var properties = storageManager.getPropertiesBasedOnFilter();
    // ToDo create the list of cards based on the properties received ordered
}
