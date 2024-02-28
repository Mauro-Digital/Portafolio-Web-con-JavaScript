const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');

botonesEmail.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();

        ventanaCorreo.classList.add('ventana--active');        
    });
});

botonesCerrar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();

        ventanaCorreo.classList.remove('ventana--active');        
    });
});