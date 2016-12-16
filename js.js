var headerChange = function(e){
    var h = document.getElementById('h');
    h.innerHTML = this.innerHTML;
}

var restoreHead = function(e){
    var h = document.getElementById('h');
    h.innerHTML = "Hello World!";
}

var addItem = function(e){
    var li = document.createElement("li");
    li.innerHTML = "New thing";
    li.addEventListener("mouseover", headerChange);
    li.addEventListener("mouseout", restoreHead);
    li.addEventListener("click", deleteItem);
    var ol = document.getElementById("thelist");
    ol.appendChild(li);
}

var deleteItem = function(e){
    var li = this;
    this.remove();
}


var listItems = document.getElementsByTagName("li");

for (i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("mouseover", headerChange);
    listItems[i].addEventListener("mouseout", restoreHead);
    listItems[i].addEventListener("click", deleteItem);
}

var button = document.getElementById("b");
button.addEventListener("click", addItem);

//----------------------------------------------------------------------

var calc = function(n, e){
    if (n == 0)
	return 1;
    if (n == 1)
	return 1;
    return calc(n - 1, e) + calc(n - 2, e);
}

var fib = function(e){
    var li = document.createElement("li");
    var ol = document.getElementById("fib");
    console.log(ol.length);
    li.innerHTML = calc(ol.length);
    ol.appendChild(li);
}

var fibbutton = document.getElementById("b2");
fibbutton.addEventListener("click", fib);
