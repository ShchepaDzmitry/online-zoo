import createAnimalMapIcon from "./createAnimalMapIcon.js";
import animals from "../../data/animals.js";
import highlightNavElements from "../../utils/headerNavHighlightsUtils.js";

const mapContainerElement = document.querySelector('.map-container');

mapContainerElement.innerHTML = animals.map((animal) => createAnimalMapIcon(animal)).join('');

window.onload = () => {
    highlightNavElements(1);
}