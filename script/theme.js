const heroImage = document.querySelector('.hero__photo');

function heroImageClick() {
    heroImage.addEventListener('mousedown', () => {
        heroImage.style.transform = 'scale(.95, .95)';
    });
    heroImage.addEventListener('mouseup', () => {
        heroImage.style.transform = 'scale(1, 1)';
    });
}

heroImageClick();

const page = document.querySelector('.page');
const features = document.querySelector('.features');
heroImage.addEventListener('mouseup', () => {
    const pageStyles = getComputedStyle(page, null);
    const featuresStyles = getComputedStyle(features, null);
    if(pageStyles.getPropertyValue('background-color').trim() === pageStyles.getPropertyValue('--dark-color').trim()) {
        page.style.backgroundColor = pageStyles.getPropertyValue('--light-color');
        features.style.backgroundColor = featuresStyles.getPropertyValue('--light-color');
    } else {
        page.style.backgroundColor = pageStyles.getPropertyValue('--dark-color');
        features.style.backgroundColor = featuresStyles.getPropertyValue('--dark-color');   
    }
});

page.style.setProperty('--light-color', '#5ab8b1'); //аналогично заданию через ~.style.~ но можно использовать для переменныъх

// page.style.background = 'linear-gradient(to right, #1B2944 50%, #39ccc5 50%)';

// let animationStart = Date.now();
// let gradientProcent = 0;
// let timer = setInterval(() => {
//     if (gradientProcent <= 100) {
//         page.style.background = `linear-gradient(to right, #1B2944 ${gradientProcent}%, #39ccc5 ${gradientProcent}% 100%)`;
//         gradientProcent++;
//     } else {
//         clearInterval(timer);
//     }
// },17);

//linearg-radient + анимации для процентов заливки экрана

// const heroImage = document.querySelector('.hero__photo');
// let scale = 0.001;
// function animationUp() {
//     requestAnimationFrame(animationUp);
//     if (scale < 0.5) {
//         heroImage.style.transform = `scale(${1 + scale}, ${1 + scale})`;
//         scale += 0.001;
//     }
// }
// requestAnimationFrame(animationUp);