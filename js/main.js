'use strict';

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

const kittenOne = `<li class="card"><article><img class="card_img" src="${kittenOneUrl}" alt="gatito"/> <h3 class="card_title">${kittenOneName}</h3> <h4 class="card_race">${kittenOneRace}</h4> <p class="card_description">${kittenOneDesc} </p> </article> </li>`;

const kittenTwo = `<li class="card"><article> <img class="card_img" src="${kittenTwoUrl}" alt="gatito"/> <h3 class="card_title">${kittenTwoName}</h3> <h4 class="card_race">${kittenTwoRace}</h4> <p class="card_description">${kittenTwoDesc} </p> </article> </li>`;

const kittenThree = `<li class="card"><article> <img class="card_img" src="${kittenThreeUrl}" alt="gatito"/> <h3 class="card_title">${kittenThreeName}</h3> <h4 class="card_race">${kittenThreeRace}</h4> <p class="card_description">${kittenThreeDesc} </p> </article> </li>`;



list.innerHTML =  kittenOne + kittenTwo + kittenThree; 
console.log(list);

