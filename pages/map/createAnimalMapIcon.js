const createAnimalMapIcon = (animal) => {
    const className = animal.mapPageIconPath.split('/')[4].split('.')[0];
    return `
    <img src="${animal.mapPageIconPath}" alt="Animal map icon" class="${className}">
  `;
};
export default createAnimalMapIcon;
