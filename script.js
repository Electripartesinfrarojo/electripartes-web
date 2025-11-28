document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDAD DEL MENÚ MOBILE 🍔
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        
        // Cambiar el ícono del botón
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 2. FUNCIONALIDAD DEL CARRUSEL 🖼️
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselDots = document.getElementById('carouselDots');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let autoSlideInterval;

    // Crear los puntos (dots)
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            moveToSlide(i);
        });
        carouselDots.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    // Función para mover el carrusel
    const moveToSlide = (index) => {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        currentSlide = index;
        const offset = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Actualizar los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
        
        // Reiniciar el temporizador al mover manualmente
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Botones de navegación
    prevButton.addEventListener('click', () => moveToSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => moveToSlide(currentSlide + 1));
    
    // Auto-avance
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            moveToSlide(currentSlide + 1);
        }, 3000); // Velocidad de 3 segundos
    };

    // Iniciar el auto-avance
    startAutoSlide();
});
