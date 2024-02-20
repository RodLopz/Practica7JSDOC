/**
 * Event listener que se activa cuando el DOM está completamente cargado.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Selecciona el formulario de contacto.
     * @type {HTMLFormElement}
     */
    const contactForm = document.getElementById('contactForm');

    /**
     * Event listener para el evento de submit del formulario de contacto.
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página

        // Obtiene los valores del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset(); // Resetea el formulario después del envío
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
