const createDonationChip = (donationAmount: string) => {
    return `
    <button class="button turquoise" type='button' id='${donationAmount.slice(1)}'>
        ${donationAmount}
    </button>
    `
};

export default createDonationChip;