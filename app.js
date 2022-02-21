// CREO L'ARRAY DI OGGETTI PER IL CAROUSEL
const items = [
    {
        name: 'Svezia',
        image: 'img/01.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        name: 'Svizzera',
        image: 'img/02.jpg',
        text: 'Lorem ipsum',
    },
    {
        name: 'Gran Bretagna',
        image: 'img/03.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        name: 'Germania',
        image: 'img/04.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
    {
        name: 'Paradise',
        image: 'img/05.jpg',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
]

console.log(items);

// CREO LA VARIABILE COLLEGATA ALLO SLIDER-WRAPPER DELL'HTML
const sliderWrapper = document.querySelector('.ms__slider_wrapper');
console.log(sliderWrapper);

// CREO IL CONTENITORE DENTRO LO SLIDER-WRAPPER
const slider = document.createElement('div');
console.log(slider);

// ASSEGNO LA CLASSE "SLIDER" AL CONTENITORE CREATO IN PRECEDENZA, CON LE MIE REGOLE CSS GIÀ APPLICATE
sliderWrapper.append(slider);
slider.classList.add('slider');

// CREO IL TAG IMMAGINE DENTRO IL CONTENITORE "SLIDER"
const sliderImage = document.createElement('img');
console.log(sliderImage);

// ASSEGNO L'IMMAGINE AL TAG IMG
slider.append(sliderImage);
sliderImage.src = null;

// CREO LA VARIABILE COLLEGATA ALL'ITEM-WRAPPER DELL'HTML
const itemWrapper = document.querySelector('.ms__item_wrapper');
console.log(itemWrapper);

// // VARIABILE CURRENT INDEX
// let currentIndex = 0;

// // CREO IL CICLO PER GENERARE I DIV DELLE PREVIEW
// for (let i = 0; i < items.length ; i++) {
//     const itemBox = document.createElement('div');
//     console.log(itemBox);

//     itemWrapper.append(itemBox);
//     itemBox.classList.add('item');
    
//     const itemImage = document.createElement('img');
//     console.log(itemImage);

//     itemBox.append(itemImage);
//     itemImage.src = items[i];

//     if (currentIndex == i ) {
//         itemBox.classList.add('active_bis');
//     }
// }

// // CREO VARIABILE PER RAGGRUPPARE TUTTE LE CLASSI DELLE IMMAGINI
// let allImages = document.querySelectorAll('.item');
// console.log(allImages);

// // CREO LA VARIABILE COLLEGATA ALLA CHEVRON-UP DELL'HTML
// const prevButton = document.getElementById('chevron-up');
// console.log(prevButton);

// prevButton.addEventListener('click', function() {
//     console.log('It works!');
// })

// // CREO LA VARIABILE COLLEGATA ALLA CHEVRON-DOWN DELL'HTML
// const nextButton = document.getElementById('chevron-down');
// console.log(nextButton);

// // CREAO AZIONE AZIONE AL CLICK DELLA CHEVRON-DOWN
// nextButton.addEventListener('click', function() {
//     console.log('And it works as well!');

//     if (currentIndex < 4 ) {
//         allImages[currentIndex].classList.remove('active_bis');
//         currentIndex++
//         allImages[currentIndex].classList.add('active_bis');
//     }
// })