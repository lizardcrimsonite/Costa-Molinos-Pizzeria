// Manejo del envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejarlo con JS
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');

    // Aquí puedes agregar lógica para enviar los datos a un servidor si lo deseas
});

// Cambiar el fondo del navbar al hacer scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón del navbar-toggler
    const toggler = document.querySelector('.navbar-toggler');
    // Selecciona el menú de navegación (puede que sea un colapsable, como un div o una lista de enlaces)
    const navbarMenu = document.querySelector('.navbar-collapse');

    // Agrega un evento de clic al toggler
    toggler.addEventListener('click', function() {
        this.classList.toggle('collapsed');

        // Alterna la clase "show" en el menú de navegación
        navbarMenu.classList.toggle('show');
    });

    // Carousel
    let currentSlide = 0; // Índice de la diapositiva actual
    const slides = document.querySelectorAll('.carousel-item'); // Selecciona todas las diapositivas
    const totalSlides = slides.length; // Cantidad total de diapositivas

    // Selecciona los botones de control
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    // Función para mostrar la diapositiva en el índice actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none'; // Solo muestra la diapositiva actual
        });
    }

    // Función para ir a la siguiente diapositiva
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Pasa a la siguiente diapositiva y vuelve al inicio si llega al final
        showSlide(currentSlide);
    }

    // Función para ir a la diapositiva anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Vuelve a la diapositiva anterior y va al final si llega al inicio
        showSlide(currentSlide);
    }

    // Inicializa el carousel mostrando la primera diapositiva
    showSlide(currentSlide);

    // Agrega eventos a los botones de control
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Manejo de las tarjetas del menú
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBody').textContent = description;

            const modal = new bootstrap.Modal(document.getElementById('cardModal'));
            modal.show();
        });
    });

    // Manejo del botón "Enviar" que abre el cliente de correo
    document.getElementById('enviarBtn').addEventListener('click', function() {
        window.location.href = 'mailto:correo@ejemplo.com';
    });

    // Manejo de los íconos de redes sociales en el footer
    const socialIcons = document.querySelectorAll('footer .fab');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el link redirija inmediatamente
            const socialNetwork = icon.classList[1].split('-')[1]; // Obtenemos el nombre de la red social del icono
            alert(`Te estás dirigiendo a nuestra página de ${socialNetwork.toUpperCase()}.`);

            // Redirigir después de un breve retraso
            setTimeout(() => {
                window.location.href = icon.parentElement.href; // Cambia el enlace a la URL del icono
            }, 1000); // Espera 1 segundo antes de redirigir
        });
    });
});
