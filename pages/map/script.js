import createAnimalMapIcon from "./createAnimalMapIcon.js";
import animals from "../../data/animals.js";

const navItemsElement = document.querySelectorAll('.nav-item a');
const secondNavItemElement = navItemsElement[1];
const mapContainerElement = document.querySelector('.map-container');

secondNavItemElement.classList.add('active');

navItemsElement.forEach(item => {
    item.addEventListener('mouseenter', () => {
        secondNavItemElement.classList.remove('active');
    });
  
    item.addEventListener('mouseleave', () => {
        secondNavItemElement.classList.add('active');
    });
});

mapContainerElement.innerHTML = animals.map((animal) => createAnimalMapIcon(animal)).join('');
  