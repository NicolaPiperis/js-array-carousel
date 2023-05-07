// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// Per prima cosa, creiamo il markup statico : costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

// ARRAY
let img = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
console.log(img);
// SELEZIONE CONTENITORE IMMAGINI
let element = document.querySelector(".container_img");
console.log(element);
let image;

// INDICE DI POSIZIONE
let activeImage = 0;
console.log(activeImage);

// CICLIZZIAMO LE IMMAGINI
for(let i = 0; i < img.length; i++) {   
    
    let image = img[i];
    console.log(image);
    if(i === activeImage) {
        element.innerHTML += `<img class="active" src="${image}">`;
    } else {
        element.innerHTML += `<img src="${image}">`;
    }   
}



// arrows dichiarazione
let next = document.getElementById("next");
let prev = document.getElementById("prev");
console.log(next, prev);

//Qua dovresti definirti un array con il riferimento a tutte le slide del dom ordinate
let count = 0;
if(count === 0 ) {
    prev.classList.add("hidden");
}

next.addEventListener("click",
    function(){
        
        let item = document.getElementsByTagName("img");
        console.log(item);

        // rimuovo dall'img in cui suono posizionato la classe active
        item[count].classList.remove("active");
        
        // incremento il contatore dell'immagine su cui sono posizionato in questo momento
        count++;
        console.log(count);
        
        // and aggiungo la classe active al successivo
         item[count].classList.add("active");

        if(count === (item.length - 1)) {
            next.classList.add("hidden");
        }
        else {
            prev.classList.remove("hidden");
        }
        
       
    }
    )

    prev.addEventListener("click",
    function(){
        
        let item = document.getElementsByTagName("img");
        console.log(item);

        // rimuovo dall'img in cui suono posizionato la classe active
        item[count].classList.remove("active");
        
        // incremento il contatore dell'immagine su cui sono posizionato in questo momento
        count--;
        console.log(count);
        
        // and aggiungo la classe active al successivo
         item[count].classList.add("active");

        if(count === 0) {
            prev.classList.add("hidden");
        }
        else {
            next.classList.remove("hidden");
        }
        
       
    }
    )











    // Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. 
    // Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 
    
    
    
    