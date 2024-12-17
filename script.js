// Obtener el enlace de contacto y la pantalla de carga
const contactoLink = document.getElementById('contacto-link');
const loadingScreen = document.getElementById('loading-screen');

// Agregar el evento de clic al enlace de "Contacto"
contactoLink.addEventListener('click', function (e) {
    e.preventDefault();  // Prevenir la redirección inmediata

    // Mostrar la pantalla de carga
    loadingScreen.classList.add('show');  // Añadir la clase 'show' para hacer visible la pantalla de carga

    // Esperar 1.5 segundos antes de redirigir a la página de contacto
    setTimeout(function () {
        window.location.href = "html-css/contacto.html";  // Redirigir a la página de contacto
    }, 1500);  // Esperar 1.5 segundos
});


const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const booksContainer = document.querySelector('.books-container');

// Función para mover el primer libro al final
function moveToEnd() {
    const firstBook = booksContainer.firstElementChild; // Primer libro visible
    booksContainer.style.transition = 'transform 0.5s ease-in-out';
    booksContainer.style.transform = 'translateX(-236px)'; // 220px + gap de 16px

    booksContainer.addEventListener('transitionend', function moveBook() {
        booksContainer.style.transition = 'none'; // Elimina la transición temporalmente
        booksContainer.appendChild(firstBook); // Mueve el primer libro al final
        booksContainer.style.transform = 'translateX(0)'; // Restablece la posición del contenedor
        booksContainer.removeEventListener('transitionend', moveBook);
    });
}

// Flecha derecha
nextBtn.addEventListener('click', moveToEnd);

// Flecha izquierda
prevBtn.addEventListener('click', () => {
    const lastBook = booksContainer.lastElementChild; // Último libro visible
    booksContainer.style.transition = 'none';
    booksContainer.insertBefore(lastBook, booksContainer.firstElementChild); // Mueve el último libro al inicio
    booksContainer.style.transform = 'translateX(-236px)';

    setTimeout(() => {
        booksContainer.style.transition = 'transform 0.5s ease-in-out';
        booksContainer.style.transform = 'translateX(0)'; // Desliza hacia la posición original
    });
});
