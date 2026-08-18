// const TOTAL_IMAGES = 50;

// const gallery = document.getElementById("gallery");
// const hero = document.getElementById("hero-image");

// let current = 1;

// // Create gallery automatically
// for(let i=1;i<=TOTAL_IMAGES;i++){

// const img=document.createElement("img");

// img.src=`gallery-images/${i}.jpg`;
// img.alt=`PRESPRINT ${i}`;

// img.style.animationDelay=`${i*0.04}s`;

// img.addEventListener("click",()=>{
// current=i;
// openLightbox();
// });

// gallery.appendChild(img);

// }

// // Hero slideshow
// setInterval(()=>{

// current++;

// if(current>TOTAL_IMAGES)
// current=1;

// hero.style.opacity=0;

// setTimeout(()=>{
// hero.src=`gallery-images/${current}.jpg`;
// hero.style.opacity=1;
// },500);

// },3000);

// // Lightbox

// const lightbox=document.getElementById("lightbox");
// const lightboxImg=document.getElementById("lightbox-img");

// function openLightbox(){

// lightbox.style.display="flex";
// lightboxImg.src=`gallery-images/${current}.jpg`;

// }

// document.getElementById("close").onclick=()=>{
// lightbox.style.display="none";
// };

// document.getElementById("next").onclick=()=>{

// current=current<TOTAL_IMAGES?current+1:1;
// lightboxImg.src=`gallery-images/${current}.jpg`;

// };

// document.getElementById("prev").onclick=()=>{

// current=current>1?current-1:TOTAL_IMAGES;
// lightboxImg.src=`gallery-images/${current}.jpg`;

// };

// // Auto-play while lightbox is open
// setInterval(()=>{

// if(lightbox.style.display==="flex"){

// current=current<TOTAL_IMAGES?current+1:1;
// lightboxImg.src=`gallery-images/${current}.jpg`;

// }

// },4000);
const TOTAL_IMAGES = 35;

const gallery = document.getElementById("gallery");
const hero = document.getElementById("hero-image");

let current = 1;

/* Build gallery automatically */

for(let i=1;i<=TOTAL_IMAGES;i++){

    const img=document.createElement("img");

    img.src=`gallery-images/${i}.jpg`;
    img.alt=`PRESPRINT ${i}`;

    img.style.animationDelay=`${i*0.03}s`;

    img.onclick=()=>{
        current=i;
        openLightbox();
    };

    gallery.appendChild(img);
}

/* Hero slideshow */

setInterval(()=>{

    current++;

    if(current>TOTAL_IMAGES)
        current=1;

    hero.style.opacity=0;

    setTimeout(()=>{
        hero.src=`gallery-images/${current}.jpg`;
        hero.style.opacity=1;
    },500);

},3000);

/* Lightbox */

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

function openLightbox(){

    lightbox.style.display="flex";
    lightboxImg.src=`gallery-images/${current}.jpg`;

}

document.querySelector(".close").onclick=()=>{
    lightbox.style.display="none";
};

document.querySelector(".next").onclick=()=>{

    current=current<TOTAL_IMAGES?current+1:1;
    lightboxImg.src=`gallery-images/${current}.jpg`;

};

document.querySelector(".prev").onclick=()=>{

    current=current>1?current-1:TOTAL_IMAGES;
    lightboxImg.src=`gallery-images/${current}.jpg`;

};

setInterval(()=>{

    if(lightbox.style.display==="flex"){

        current=current<TOTAL_IMAGES?current+1:1;
        lightboxImg.src=`gallery-images/${current}.jpg`;

    }

},4000);

/* Mobile menu */

const menuBtn=document.querySelector(".header__menu-btn");
const nav=document.querySelector(".header__nav");

menuBtn.addEventListener("click",()=>{

    nav.style.display = nav.style.display==="flex" ? "none":"flex";

});