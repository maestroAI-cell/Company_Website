
const TOTAL_IMAGES = 35;

const gallery = document.getElementById("gallery");
const hero = document.getElementById("hero-image");


let current = 1;

// Build gallery
for (let i = 1; i <= TOTAL_IMAGES; i++) {
    const img = document.createElement("img");

    img.src = `../gallery-images/${i}.jpg`;
    img.alt = `PRESPRINT ${i}`;

    img.addEventListener("click", () => {
        current = i;
        openLightbox();
    });

    gallery.appendChild(img);
}



// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = `../gallery-images/${current}.jpg`;
}

document.getElementById("close").onclick = () => {
    lightbox.style.display = "none";
};

document.getElementById("next").onclick = () => {
    current = current < TOTAL_IMAGES ? current + 1 : 1;
    lightboxImg.src = `../gallery-images/${current}.jpg`;
};

document.getElementById("prev").onclick = () => {
    current = current > 1 ? current - 1 : TOTAL_IMAGES;
    lightboxImg.src = `../gallery-images/${current}.jpg`;
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};