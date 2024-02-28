const slider = document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => {
    clickPresionado = true;

    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    
    // e.pageX - Coordenada horizontal del evento. En que coordenada dimos click con respeto al documento.
    // console.log('pageX: ', e.pageX);
    // console.log('slider.offsetLeft: ', slider.offsetLeft);
    // console.log('scrollLeft', slider.scrollLeft);
};
const mueve = (e) => {
    if(!clickPresionado){
        return;
    }

    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;    
};
const suelta = (e) => {
    clickPresionado = false;
    // console.log('suelta');
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);
