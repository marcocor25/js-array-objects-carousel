const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

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
sliderImage.src = items[1];

// CREO LA VARIABILE COLLEGATA ALL'ITEM-WRAPPER DELL'HTML
const itemWrapper = document.querySelector('.ms__item_wrapper');
console.log(itemWrapper);

// VARIABILE CURRENT INDEX
let currentIndex = 0;

// CREO IL CICLO PER GENERARE I DIV DELLE PREVIEW
for (let i = 0; i < items.length ; i++) {
    const itemBox = document.createElement('div');
    console.log(itemBox);

    itemWrapper.append(itemBox);
    itemBox.classList.add('item');
    
    const itemImage = document.createElement('img');
    console.log(itemImage);

    itemBox.append(itemImage);
    itemImage.src = items[i];

    if (currentIndex == i ) {
        itemBox.classList.add('active_bis');
    }
}

// CREO VARIABILE PER RAGGRUPPARE TUTTE LE CLASSI DELLE IMMAGINI
let allImages = document.querySelectorAll('.item');
console.log(allImages);

// CREO LA VARIABILE COLLEGATA ALLA CHEVRON-UP DELL'HTML
const prevButton = document.getElementById('chevron-up');
console.log(prevButton);

prevButton.addEventListener('click', function() {
    console.log('It works!');
})

// CREO LA VARIABILE COLLEGATA ALLA CHEVRON-DOWN DELL'HTML
const nextButton = document.getElementById('chevron-down');
console.log(nextButton);

// CREAO AZIONE AZIONE AL CLICK DELLA CHEVRON-DOWN
nextButton.addEventListener('click', function() {
    console.log('And it works as well!');

    if (currentIndex < 4 ) {
        allImages[currentIndex].classList.remove('active_bis');
        currentIndex++
        allImages[currentIndex].classList.add('active_bis');
    }
})