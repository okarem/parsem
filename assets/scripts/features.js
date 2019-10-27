(function writeHello(){ console.log('hello!');
	makeSearchBar(document.querySelector('body'));
})();

function makeSearchBar(parent){
    // if(typeof(parent)!='string'){return;} //throw an error or return something appropriate
    // var parentNode= document.getElementById(parent);
    var form=document.createElement('span');
    var searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('id', 'search-input-box');
    searchInput.setAttribute('placeholder', 'what\'re you looking for?');
    searchInput.classList.add('search-input-box');
    parent.appendChild(searchInput);
    //making the Button
    var submitButton = document.createElement('button');
    submitButton.addEventListener('click',submitButtonFunction);
    submitButton.textContent= "Search";
    parent.appendChild(submitButton);
}
function submitButtonFunction(){
	var textBox = document.getElementById('search-input-box');
	var str= textBox.value;	//finished getting data
	textBox.value = textBox.defaultValue; //finished reseting the textBox
	
	//process the data from textBox
	console.log(str);
}