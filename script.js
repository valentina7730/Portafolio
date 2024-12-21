document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación básica de campos
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Enviar el formulario usando EmailJS
    emailjs.send('service_39j92tl', 'template_2jlcptn', {
        from_name: name,
        from_email: email,
        message: message,
    })
    .then(function(response) {
        // Mostrar mensaje de éxito si el correo se envió correctamente
        alert(`Gracias por tu mensaje, ${name}! Nos pondremos en contacto contigo pronto.`);
        document.getElementById('contact-form').reset(); // Resetear el formulario
    }, function(error) {
        // Mostrar mensaje de error si hubo un problema al enviar el correo
        console.error('Error al enviar el correo:', error);
        alert('Hubo un problema al enviar tu mensaje. Inténtalo más tarde.');
    });
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

