document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let counter = 0;
    const images = slider.querySelectorAll("img");
    const imageWidth = images[0].clientWidth;

    function slideImages() {
        counter = (counter + 1) % images.length;
        slider.style.transform = `translateX(-${counter * imageWidth}px)`;
    }

    setInterval(slideImages, 5000); // Change the time (in milliseconds) as needed
});