export interface AnimalFeedCard {
    feedCardImgPath: string;
    feedCardDescription: string;
}

const createFeedCard = (animal: AnimalFeedCard) => {
    return `
        <div class="feedcard">
            <img src="${animal.feedCardImgPath}" alt="feedcard">
            <p>${animal.feedCardDescription}</p>
            <button class="button blank">
                <span>feed</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `
};

export default createFeedCard;