// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentUrl = window.location.href;

    // Select all navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    navbarLinks.forEach(link => {
        // If the link's href matches the current page URL, add the 'active' class
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Add a class to the images after the page loads
    const images = document.querySelectorAll(".carousel-images img");

    // Add the animation class to both images when page loads
    images[0].classList.add("animate-from-top");
    images[1].classList.add("animate-from-bottom");
});




document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel-image');
    const carouselSlide = document.querySelector('.carousel-slide');
    let currentIndex = 0;
    const totalImages = images.length;

    // Function to move to the next image
    function moveToNextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0;  // Loop back to the first image
        }
        updateCarouselPosition();
    }

    // Function to update the carousel's position
    function updateCarouselPosition() {
        const offset = -currentIndex * 100;  // Move left by 100% of one image's width
        carouselSlide.style.transform = `translateX(${offset}%)`;
    }

    // Automatic image slide every 4 seconds
    setInterval(moveToNextImage, 4000);
});


