const createFeedbackCard = (feedback) => {
  return `
    <div class="feedback__card">
          <img src="${feedback.iconPath}" alt="icon quote">
          <p class="subheader">${feedback.placeAndDate}0</p>
          <p>${feedback.description}</p>
          <p class="feedback__card--user">${feedback.name}</p>
    </div>
  `
};

export default createFeedbackCard;