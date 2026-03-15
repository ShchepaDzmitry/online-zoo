export interface PayAndFeedCard {
    image: string;
    number: string;
    icon: string;
    heading: string;
    description: string;
}


const createPayAndFeedCard = (payAndFeedCard: PayAndFeedCard) => {
    return  `
    <div>
        <div class="pay-and-feed__header">
            <span>${payAndFeedCard.number}</span>
            <hr class="pay-and-feed__header--line">
        </div>
        <div class="pay-and-feed__content">
            <img class="pay-and-feed__image" src="${payAndFeedCard.image}" alt="pay and feed image ${payAndFeedCard.number}">
            <div class="pay-and-feed__description">
                <img class="pay-and-feed__icon" src="${payAndFeedCard.icon}" alt="pay and feed icon ${payAndFeedCard.number}">
                <p class="subheader">${payAndFeedCard.heading}</p>
                <p>${payAndFeedCard.description}</p>
            </div>
        </div>
    </div>
  `
};

export default createPayAndFeedCard;