const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
    {
        id: '1',
        titulo: 'Trabajo #1',
        texto: 'Como desarrollador web frontend, me especializo en la creación de experiencias visuales cautivadoras a través de HTML, CSS y JavaScript',
        fecha: '1 Enero de 2024',
    },
    {
        id: '2',
        titulo: 'Trabajo #2',
        texto: 'El proceso de transcripción de audio y video implica escuchar cuidadosamente el contenido hablado y transcribirlo con precisión en un documento de texto escrito',
        fecha: '4 febrero de 2024',
    },
    {
        id: '3',
        titulo: 'Trabajo #3',
        texto: 'El proceso de transcripción de audio y video implica escuchar cuidadosamente el contenido hablado y transcribirlo con precisión en un documento de texto escrito',
        fecha: '6 febrero de 2024',
    },
    {
        id: '4',
        titulo: 'Trabajo #4',
        texto: 'El proceso de transcripción de audio y video implica escuchar cuidadosamente el contenido hablado y transcribirlo con precisión en un documento de texto escrito',
        fecha: '8 febrero de 2024',
    },
    {
        id: '5',
        titulo: 'Trabajo #5',
        texto: 'El proceso de transcripción de audio y video implica escuchar cuidadosamente el contenido hablado y transcribirlo con precisión en un documento de texto escrito',
        fecha: '9 febrero de 2024',
    },
    {
        id: '6',
        titulo: 'Trabajo #6',
        texto: 'El proceso de transcripción de audio y video implica escuchar cuidadosamente el contenido hablado y transcribirlo con precisión en un documento de texto escrito',
        fecha: '10 febrero de 2024',
    },
];

trabajos.addEventListener('click', (e) => {
    e.preventDefault();

    // Comprobamos que el usuario de click en un trabajo.
    const trabajoClickeado = e.target.closest('.trabajos__trabajo');

    if (trabajoClickeado) {
        // Obtenemos el id del trabajo clickeado.
        const id = trabajoClickeado.dataset.id;

        const trabajo = datos.filter((trabajo) => {            
            if(trabajo.id === id) {
                return trabajo;
            }
        });

        const {titulo, fecha, texto} = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
    }
});

// EventListener para cerrar ventana con el boton.
ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.matches('.ventana__overlay')) {
        ventanaTrabajos.classList.remove('ventana--active');
    }   
});