

var headerChange = function(e){
    var h = document.getElementById('h');
    h.innerHTML = this.innerHTML;
}


var listItems = document.getElementsByTagName("ol");
listItems.addEventListener("mouseover", headerChange());

var addItem = function(e){
    
}

var restoreHead = function(e){

}

