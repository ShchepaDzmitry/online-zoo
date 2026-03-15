export const closeModalDialog = (closeModalBtn, modalContainer) => {
    closeModalBtn?.addEventListener('click', () => {
        modalContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector('.overlay').style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.querySelector('.overlay').style.display = 'none';
        }
    });
    document.querySelector('.overlay')?.addEventListener('click', (e) => {
        if (!e.target.contains(modalContainer)) {
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.querySelector('.overlay').style.display = 'none';
        }
    });
};
