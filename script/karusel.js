const arrows = document.querySelectorAll('.arrow');
const leftArrow = arrows[0];
const rightArrow = arrows[1];
const cardsList = document.querySelector('.cards__list');
const cardsCount = document.querySelectorAll('.cards__item').length;
const cardWidth = document.querySelector('.cards__item').clientWidth;
console.log(cardsCount);

let move = 0, count = 1;

rightArrow.addEventListener('click', () => {
    if(count === cardsCount) {
        move += cardWidth * (cardsCount - 1);
        count = 1;
    } else {
        move -= cardWidth;
        count++;
    }
    cardsList.style.transform = `translate(${move}px, 0)`;
});

leftArrow.addEventListener('click', () => {
    if(count === 1) {
        move -= cardWidth * (cardsCount - 1);
        count = cardsCount;
    } else {
        move += cardWidth;
        count--;
    }
    cardsList.style.transform = `translate(${move}px, 0)`;
});