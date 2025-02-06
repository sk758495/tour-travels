// Smooth Scroll Effect for Navigation
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Hover Effect for the Search Button
const searchButton = document.querySelector('.btn-primary');

searchButton.addEventListener('mouseenter', () => {
    searchButton.style.transform = 'scale(1.1)';
    searchButton.style.transition = 'transform 0.3s ease';
});

searchButton.addEventListener('mouseleave', () => {
    searchButton.style.transform = 'scale(1)';
});

// Focus Effect for the Search Input
const searchInput = document.querySelector('.form-control');

searchInput.addEventListener('focus', () => {
    searchInput.style.borderColor = '#007bff';
    searchInput.style.boxShadow = '0 0 10px rgba(0, 123, 255, 0.5)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.borderColor = '';
    searchInput.style.boxShadow = '';
});

// Optional: Animate Hero Text on Scroll into View
const heroText = document.querySelector('.hero-header .display-3');
const heroDesc = document.querySelector('.hero-header .fs-4');

window.addEventListener('scroll', () => {
    const rect = heroText.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        heroText.classList.add('animate__animated', 'animate__fadeInUp');
        heroDesc.classList.add('animate__animated', 'animate__fadeInUp');
    }
});



// About section

// Select all the elements inside the About section that we want to animate
const aboutContent = document.querySelectorAll('.container-xxl .row > div');

const fadeInSlideUpStaggeredWithBounce = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Check if the entry is the image (for bounce effect)
            if (entry.target.classList.contains('about-image')) {
                entry.target.classList.add('bounce-up');
            } else {
                entry.target.classList.add('fade-in-slide-up');
            }
            
            // Set staggered delay based on index of the element
            entry.target.style.animationDelay = `${index * 0.2}s`;
        }
    });
};

// Create an Intersection Observer instance to observe the About content
const observer = new IntersectionObserver(fadeInSlideUpStaggeredWithBounce, {
    threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Observe each element inside the About section
aboutContent.forEach(item => {
    observer.observe(item);
});


