/**
 * Script para la interactividad de la página ELECTRIPARTES.
 * Objetivo principal: Manejar el menú de navegación móvil.
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('navigation');

    // Función para alternar la visibilidad del menú
    menuToggle.addEventListener('click', () => {
        // Toggle de la clase 'active' para mostrar/ocultar el menú
        nav.classList.toggle('active');
        
        // Toggle del atributo aria-expanded para accesibilidad
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Cierra el menú cuando se hace clic en un enlace (útil en móvil)
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Nota: Para que el formulario de contacto envíe datos, 
    // necesitarías un backend (servidor) o un servicio de terceros (Ej: Formspree).
    // Este script solo maneja el Front-End.
});

