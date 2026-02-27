const createFeedCard = (feedcard) => {
    return `
    <div class="feedcard">
        <img src="${feedcard.imgPath}" alt="feedcard">
        <p>${feedcard.description}</p>
        <button class="button blank">
            <span>feed</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    </div>
    `
};

export default createFeedCard;