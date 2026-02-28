const createFeedCard = (animal) => {
    return `
    <a  href="../zoos/?id=${animal.id}">
        <div class="feedcard">
            <img src="${animal.feedCardImgPath}" alt="feedcard">
            <p>${animal.feedCardDescription}</p>
            <button class="button blank">
                <span>feed</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </a>
    `
};

export default createFeedCard;