export const closeModalDialog = (closeModalBtn: HTMLElement, modalContainer: HTMLElement): void => {

    closeModalBtn?.addEventListener('click', () => {
        modalContainer!.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
    });

    document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === "Escape") {
        modalContainer!.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
        }
    })

    document.querySelector<HTMLElement>('.overlay')?.addEventListener('click', (e) => {
        if (!(e.target as HTMLElement).contains(modalContainer)) {
        modalContainer!.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector<HTMLElement>('.overlay')!.style.display = 'none';
        }
    })
};