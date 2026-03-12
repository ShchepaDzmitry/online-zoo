const createDonationChip = (donationAmount: string) => {
    return `
    <button class="button turquoise">
        <span id='${donationAmount.slice(1)}'>${donationAmount}</span>
    </button>
    `
};

export default createDonationChip;