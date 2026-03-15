import createAnimalMapIcon from "./createAnimalMapIcon";
import animals from "../../data/animals";
import highlightNavElements from "../../utils/headerNavHighlightsUtils";
const mapContainerElement = document.querySelector('.map-container');
mapContainerElement.innerHTML = animals.map((animal) => createAnimalMapIcon(animal)).join('');
window.onload = () => {
    highlightNavElements(1);
};
