/**
 * Event listener que se activa cuando el DOM está completamente cargado.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Arreglo que contiene las rutas de las imágenes a mostrar.
     * @type {Array<string>}
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    
    /**
     * Índice de la imagen actual en el arreglo de imágenes.
     * @type {number}
     */
    let currentIndex = 0;

    /**
     * Elemento de imagen en el DOM.
     * @type {HTMLImageElement}
     */
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Event listener para el evento de click en la imagen.
     */
    imageElement.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});
