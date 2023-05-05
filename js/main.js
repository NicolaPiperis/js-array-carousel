// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// Per prima cosa, creiamo il markup statico : costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.

// ARRAY
let img = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
console.log(img);
// SELEZIONE CONTENITORE IMMAGINI
let element = document.querySelector(".container_img");
console.log(element);

// CICLIZZIAMO LE IMMAGINI
for(let i = 0; i < img.length; i++) {   
    
    let image = img [i]
    console.log(image);
    element.innerHTML += `<img src="${image}">`;

    // INDICE DI POSIZIONE
    let imagePosition = i + 0;
    console.log(imagePosition);
}

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.


// arrows dichiarazione
let next = document.getElementById("next");
let prev = document.getElementById("prev");
console.log(next, prev);

next.addEventListener("click",
    function(){

        if(imagePosition = image) {
            element.classList.add("active");
        }
    }
)

// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 



