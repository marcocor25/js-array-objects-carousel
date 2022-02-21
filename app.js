// CREO L'ARRAY DI OGGETTI PER IL CAROUSEL
const items = [
    {
        titolo: 'Svezia',
        immagine: 'img/01.jpg',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        titolo: 'Svizzera',
        immagine: 'img/02.jpg',
        descrizione: 'Lorem ipsum',
    },
    {
        titolo: 'Gran Bretagna',
        immagine: 'img/03.jpg',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        titolo: 'Germania',
        immagine: 'img/04.jpg',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
    {
        titolo: 'Paradise',
        immagine: 'img/05.jpg',
        descrizione: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    },
]
console.log(items);

// CREO LA VARIABILE COLLEGATA ALL'ITEM-WRAPPER DELL'HTML
const itemWrapper = document.querySelector('.ms__item_wrapper');
console.log(itemWrapper);

// CREO IL CICLO FOREACH PER INSERIRE LE IMMAGINI
items.forEach((element) => {

    const itemBox = document.createElement('div');
    console.log(itemBox);

    itemWrapper.append(itemBox);
    itemBox.classList.add('item');

    itemBox.innerHTML = `<img src="${element.immagine}" alt="${element.titolo}">`;

    console.log(element);
})

// // CREO LA VARIABILE COLLEGATA ALLO SLIDER-WRAPPER DELL'HTML
// const sliderWrapper = document.querySelector('.ms__slider_wrapper');
// console.log(sliderWrapper);

// // CREO IL CONTENITORE DENTRO LO SLIDER-WRAPPER
// const slider = document.createElement('div');
// console.log(slider);

// // ASSEGNO LA CLASSE "SLIDER" AL CONTENITORE CREATO IN PRECEDENZA, CON LE MIE REGOLE CSS GIÀ APPLICATE
// sliderWrapper.append(slider);
// slider.classList.add('slider');

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