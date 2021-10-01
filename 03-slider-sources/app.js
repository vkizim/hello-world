const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    sidebar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('div').length,
    container = document.querySelector('.container');
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', (e) => {
    changeSlide('up');
});
downBtn.addEventListener('click', (e) => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {

        activeSlideIndex++;

        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;

        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}