const createFeedbackCard = (feedback) => {
    return `
    <div class="feedback__card">
          <img src="../../assets/icons/quotes.png" alt="icon quote">
          <p class="subheader">
            <span>${feedback.city}</span>, <span>${feedback.month}</span> <span>${feedback.year}</span>
          </p>
          <p>${feedback.text}</p>
          <p class="feedback__card--user">${feedback.name}</p>
    </div>
  `;
};
export default createFeedbackCard;
