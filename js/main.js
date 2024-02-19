"use strict";

const input_search_desc = document.querySelector(".js_in_search_desc");

const list = document.querySelector(".js-list");

const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio".toUpperCase(),
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siamés",
};

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona".toUpperCase(),
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
};

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo".toUpperCase(),
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",
};

const kittenOne = `
<li class="card js-cardOne">
    <article>
        <img class="card_img" src="${kittenData_1.image}" alt="gatito"/> <h3 class="card_title">${kittenData_1.name}</h3>
        <h4 class="card_race">${kittenData_1.race}</h4>
        <p class="card_description">${kittenData_1.desc}</p>
    </article>
</li>`;

const kittenTwo = `
<li class="card js-cardTwo">
    <article>
        <img class="card_img" src="${kittenData_2.image}" alt="gatito"/> <h3 class="card_title">${kittenData_2.name}</h3>
        <h4 class="card_race">${kittenData_2.race}</h4>
        <p class="card_description">${kittenData_2.desc}</p>
        </article>
</li>`;

const kittenThree = `
<li class="card js-cardThree">
    <article>
        <img class="card_img" src="${kittenData_3.image}" alt="gatito"/> <h3 class="card_title">${kittenData_3.name}</h3>
        <h4 class="card_race">${kittenData_3.race}</h4>
        <p class="card_description">${kittenData_3.desc}</p>
    </article>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

const catOne = document.querySelector(".js-cardOne");
const catTwo = document.querySelector(".js-cardTwo");
const catThree = document.querySelector(".js-cardThree");

const buttonAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");

const searchMessage = document.querySelector(".js-message");

buttonAdd.addEventListener("click", (event) => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    //completa el código
  }
});

const linkNewFormElement = document.querySelector(".menu-nav"); //botón
const newFormElement = document.querySelector(".new-form"); // contenedor

function showNewCatForm() {
  newFormElement.classList.remove("collapsed");
}

function hideNewCatForm() {
  newFormElement.classList.add("collapsed");
}

linkNewFormElement.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

const buttonSearch = document.querySelector(".js-button-search");

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value; // movido el value a dentro de la función, para que coja el valor de lo que hay dentro del input, antes lo teníamos fuera, y entonces, nunca tenía valor.

  if (descrSearchText === "") {
    catOne.classList.remove("hidden");
    catTwo.classList.remove("hidden");
    catThree.classList.remove("hidden");
    console.log("Mostrar todos los gatos");
  } else if (kittenData_1.desc.includes(descrSearchText)) {
    catOne.classList.remove("hidden");
    catTwo.classList.add("hidden");
    catThree.classList.add("hidden");
    console.log(1);
  } else if (kittenData_2.desc.includes(descrSearchText)) {
    catTwo.classList.remove("hidden");
    catOne.classList.add("hidden");
    catThree.classList.add("hidden");
    console.log(2);
  } else if (kittenData_3.desc.includes(descrSearchText)) {
    catThree.classList.remove("hidden");
    catOne.classList.add("hidden");
    catTwo.classList.add("hidden");
    console.log(3);
  } else {
    catOne.classList.add("hidden");
    catTwo.classList.add("hidden");
    catThree.classList.add("hidden");

    searchMessage.innerHTML = "No hay coincidencias";
  }
};

buttonSearch.addEventListener("click", filterKitten);
