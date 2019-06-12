//import js files
import { products } from './data';
import { presidents } from './data';


//####Basic DOM manipulation###/
var app = document.querySelector('#app'); //select the element with id = app

var ulElement = document.createElement('ul'); // create HTML Element
app.appendChild(ulElement);

for(let i = 0; i < products.length; i++){
    var liElement = document.createElement('li');
    var liText = document.createTextNode(products[i].name);
    liElement.appendChild(liText);
    ulElement.appendChild(liElement);   
}




