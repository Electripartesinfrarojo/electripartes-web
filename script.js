document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // LÓGICA DEL CARRUSEL AUTOMÁTICO
    // ----------------------------------------------------
    const track = document.querySelector('.carousel-track');
    if (!track) return; // Salir si no encuentra el carrusel

    const slides = Array.from(track.children);
    const dotsContainer = document.querySelector('.carousel-dots-container');
    const slideCount = slides.length;
    let currentSlide = 0;

    // 1. Crear los puntos de navegación (dots)
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        // Permite la navegación manual haciendo clic en los puntos
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    // Función principal para mover el carrusel
    const moveToSlide = (index) => {
        if (index < 0) {
            index = slideCount - 1; // Volver a la última
        } else if (index >= slideCount) {
            index = 0; // Volver a la primera
        }
        
        currentSlide = index;
        
        // Calcular la distancia de desplazamiento (porcentaje)
        const amountToMove = currentSlide * 100;
        track.style.transform = `translateX(-${amountToMove}%)`;

        // Actualizar el estado activo de los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    };

    // Función para avanzar automáticamente
    const autoAdvance = () => {
        let nextSlide = currentSlide + 1;
        moveToSlide(nextSlide);
    };

    // Iniciar el carrusel: cambia la imagen cada 3000 milisegundos (3 segundos)
    setInterval(autoAdvance, 3000); 

});
