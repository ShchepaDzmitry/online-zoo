const createDonationChip = (donationAmount) => {
    return `
    <button class="button turquoise">
        <span>${donationAmount}</span>
    </button>
    `
};

export default createDonationChip;