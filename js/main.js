"use strict";

const input_search_desc = document.querySelector(".js_in_search_desc");

const list = document.querySelector(".js-list");

const kittenDataList = [
  {
    image: "https://dev.adalab.es/gato-siames.webp",
    name: "Anastacio".toUpperCase(),
    desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
    race: "Siamés",
  },

  {
    image: "https://dev.adalab.es/sphynx-gato.webp",
    name: "Fiona".toUpperCase(),
    desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
    race: "Sphynx",
  },

  {
    image: "https://dev.adalab.es/maine-coon-cat.webp",
    name: "Cielo".toUpperCase(),
    desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
    race: "Maine Coon",
  },
];

const kittenOne = `
<li class="card js-cardOne">
    <article>
        <img class="card_img" src="${kittenDataList[0].image}" alt="gatito"/> <h3 class="card_title">${kittenDataList[0].name}</h3>
        <h4 class="card_race">${kittenDataList[0].race}</h4>
        <p class="card_description">${kittenDataList[0].desc}</p>
    </article>
</li>`;

const kittenTwo = `
<li class="card js-cardTwo">
    <article>
        <img class="card_img" src="${kittenDataList[1].image}" alt="gatito"/> <h3 class="card_title">${kittenDataList[1].name}</h3>
        <h4 class="card_race">${kittenDataList[1].race}</h4>
        <p class="card_description">${kittenDataList[1].desc}</p>
        </article>
</li>`;

const kittenThree = `
<li class="card js-cardThree">
    <article>
        <img class="card_img" src="${kittenDataList[2].image}" alt="gatito"/> <h3 class="card_title">${kittenDataList[2].name}</h3>
        <h4 class="card_race">${kittenDataList[2].race}</h4>
        <p class="card_description">${kittenDataList[2].desc}</p>
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
const inputRace = document.querySelector(".js-input-race");
const labelMessageError = document.querySelector(".js-label-error");

buttonAdd.addEventListener("click", (event) => {
  const valueRace = inputRace.value;
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (
    valueDesc === "" ||
    valuePhoto === "" ||
    valueName === "" ||
    valueRace === ""
  ) {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    renderKitten(valuePhoto, valueDesc, valueName, valueRace);
  }
});

function renderKitten(url, desc, name, race) {
  const newKitten = `
    <li class="card">
        <article>
            <img class="card_img" src="${url}" alt="gatito"/> 
            <h3 class="card_title">${name}</h3>
            <h4 class="card_race">${race}</h4>
            <p class="card_description">${desc}</p>
        </article>
    </li>`;

  list.innerHTML += newKitten;
}

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
  const descrSearchText = input_search_desc.value;

  if (descrSearchText === "") {
    catThree.classList.remove("hidden");
    catOne.classList.remove("hidden");
    catTwo.classList.remove("hidden");
  } else if (kittenDataList[0].desc.includes(descrSearchText)) {
    catOne.classList.remove("hidden");
    catTwo.classList.add("hidden");
    catThree.classList.add("hidden");
    console.log(1);
  } else if (kittenDataList[1].desc.includes(descrSearchText)) {
    catTwo.classList.remove("hidden");
    catOne.classList.add("hidden");
    catThree.classList.add("hidden");
    console.log(2);
  } else if (kittenDataList[2].desc.includes(descrSearchText)) {
    catThree.classList.remove("hidden");
    catOne.classList.add("hidden");
    catTwo.classList.add("hidden");
    console.log(3);
  }
};

buttonSearch.addEventListener("click", filterKitten);

