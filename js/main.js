'use strict';

const input_search_desc = document.querySelector('.js_in_search_desc');
console.log('> input_search_desc', input_search_desc);
const descrSearchText = input_search_desc.value;
console.log('> descrSearchText', descrSearchText);


const list = document.querySelector(".js-list");
const kittenOneUrl = "https://dev.adalab.es/gato-siames.webp";
const kittenOneName = "Anastasio".toUpperCase();
const kittenOneRace = "Siamés";
const kittenOneDesc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."



const kittenTwoUrl = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona".toUpperCase();
const kittenTwoRace = "Sphynx";
const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."

const kittenThreeUrl = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo".toUpperCase();
const kittenThreeRace = "Maine Coon";
const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."

const kittenOne = `<li class="card js-cardOne"><article><img class="card_img" src="${kittenOneUrl}" alt="gatito"/> <h3 class="card_title">${kittenOneName}</h3> <h4 class="card_race">${kittenOneRace}</h4> <p class="card_description">${kittenOneDesc} </p> </article> </li>`;

const kittenTwo = `<li class="card js-cardTwo"><article> <img class="card_img" src="${kittenTwoUrl}" alt="gatito"/> <h3 class="card_title">${kittenTwoName}</h3> <h4 class="card_race">${kittenTwoRace}</h4> <p class="card_description">${kittenTwoDesc} </p> </article> </li>`;

const kittenThree = `<li class="card js-cardThree"><article> <img class="card_img" src="${kittenThreeUrl}" alt="gatito"/> <h3 class="card_title">${kittenThreeName}</h3> <h4 class="card_race">${kittenThreeRace}</h4> <p class="card_description">${kittenThreeDesc} </p> </article> </li>`;

list.innerHTML =  kittenOne + kittenTwo + kittenThree; 

const catOne = document.querySelector('.js-cardOne');
const catTwo = document.querySelector('.js-cardTwo');
const catThree = document.querySelector('.js-cardThree');

console.log('kittenOneDesc', kittenOneDesc);

/*
 Si descrSearchText es "", añadais block a todas
 sino --> else if
    1
    2
    3
*/

// if (descrSearchText === "") {
//     catOne.style.display = 'block';
//     catTwo.style.display = 'block';
//     catThree.style.display = 'block';
// } else {
//     catOne.style.display = 'none';
//     catTwo.style.display = 'none';
//     catThree.style.display = 'none';
// }

// if (kittenOneDesc.includes(descrSearchText)) {
//     catOne.style.display = 'block';
// } else if (kittenTwoDesc.includes(descrSearchText)) {
//     catTwo.style.display = 'block';
// } else if (kittenThreeDesc.includes(descrSearchText)) {
//     catThree.style.display = 'block';
// }






if(descrSearchText === "") {
    catOne.style.display = 'block';
    catTwo.style.display = 'block';
    catThree.style.display = 'block';
} else if (kittenOneDesc.includes(descrSearchText)) {
    catOne.style.display = 'block';
    catTwo.style.display = 'none';
    catThree.style.display = 'none';
} else if (kittenTwoDesc.includes(descrSearchText) ) { 
    catOne.style.display = 'none';
    catTwo.style.display = 'block';
    catThree.style.display = 'none';
} else if( kittenThreeDesc.includes(descrSearchText) ) {
    catOne.style.display = 'none';
    catTwo.style.display = 'none';
    catThree.style.display = 'block';
} 

console.log(list);


// EJERCICIO 14 DE FEBRERO 1. FORMULARIO: Adicionar nuevo gatito

const buttonDeploy = document.querySelector('.js-btn-deploy');
const buttonAdd = document.querySelector('.js-btn-add')
const buttonCancel = document.querySelector('.js-btn-cancel')
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const deploy = document.querySelector('.new-form');





  buttonDeploy.addEventListener('click', (event) => {
    deploy.style.display = 'block';
});



buttonAdd.addEventListener('click', (event) => { 
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
  
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
      labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
    } else {
      // Completa el código
    }
  });



  buttonCancel.addEventListener('click', (event) => {
    deploy.style.display = 'none';
});


