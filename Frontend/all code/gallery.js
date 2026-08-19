const TOTAL_IMAGES = 39;

const gallery=document.getElementById("gallery");
const hero=document.getElementById("hero-image");

let current=1;

// Build gallery automatically
for(let i=1;i<=TOTAL_IMAGES;i++){

    const img=document.createElement("img");

    img.src=`../gallery-images/${i}.jpg`;
    img.alt=`PRESPRINT ${i}`;

    img.onclick=()=>{
        current=i;
        openLightbox();
    };

    gallery.appendChild(img);   
}

// Hero slideshow
setInterval(()=>{

    current=current<TOTAL_IMAGES?current+1:1;

    hero.style.opacity=0;

    setTimeout(()=>{
        hero.src=`Frontend/gallery-images/${current}.jpg`;
        hero.style.opacity=1;
    },400);

},3000);

// Lightbox
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

function openLightbox(){
    lightbox.style.display="flex";
    lightboxImg.src=`Frontend/gallery-images/${current}.jpg`;
}

document.getElementById("close").onclick=()=>{
    lightbox.style.display="none";
};

document.getElementById("next").onclick=()=>{
    current=current<TOTAL_IMAGES?current+1:1;
    lightboxImg.src=`Frontend/gallery-images/${current}.jpg`;
};

document.getElementById("prev").onclick=()=>{
    current=current>1?current-1:TOTAL_IMAGES;
    lightboxImg.src=`Frontend/gallery-images/${current}.jpg`;
};

// Automatically update the copyright year
const copyright = document.querySelector(".footer-copyright p");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Presprint Plc. All Rights Reserved";
}