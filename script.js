// Get all filter buttons and pet cards
const filterButtons = document.querySelectorAll('.filter ul a');
const petCards = document.querySelectorAll('.pet-card');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the selected pet type (convert to lowercase)
        const petType = button.querySelector('li').textContent.toLowerCase();
        
        // Show all pets if "All" is clicked, otherwise filter by pet type
        petCards.forEach(card => {
            if (petType === 'all') {
                card.style.display = '';
            } else {
                if (card.getAttribute('data-type') === petType) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

const boxes = document.querySelectorAll('.box');

window.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero','.contact-form');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('show');
        }, 100);
    }
    checkBoxes();
});

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerWindow = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerWindow) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

// Auto-play
setInterval(() => moveSlide(1), 3000);
