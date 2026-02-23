let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}


function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  lightboxImg.src = images[currentIndex].src;
}


function filterImages(category) {
  let boxes = document.querySelectorAll(".image-box");
  let gallery = document.querySelector(".gallery");

  if (category === "all") {
    gallery.classList.remove("three-column");
  } else {
    gallery.classList.add("three-column");
  }

  boxes.forEach(box => {
    if (category === "all" || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

