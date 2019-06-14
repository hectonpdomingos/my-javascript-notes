//import js files
import { products } from './data';
import { presidents } from './classes.js';


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


//working with classes
let p = new presidents();

// p.constructor;

//obj
var data = {
    id: (Math.floor(Math.random() * 9999)),
    name: 'Hecton',
    country: 'Brazil',
    age: 33
}
//add the obj into the array
p.setPresident(data)

//get the president 
// let f = new presidents();
// f.findPresident('Brazil');

//delete president by country
let d = new presidents();
d.deletePresident('Brazil');

