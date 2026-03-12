const highlightNavElements = (elementIndex: number) => {
    const navItemsElement = document.querySelectorAll('.nav-item a');
    const orderedElement = navItemsElement[elementIndex];

    orderedElement.classList.add('active');

    navItemsElement.forEach(item => {
        item.addEventListener('mouseenter', () => {
            orderedElement.classList.remove('active');
        });
    
        item.addEventListener('mouseleave', () => {
            orderedElement.classList.add('active');
        });
    });
};

export default highlightNavElements;