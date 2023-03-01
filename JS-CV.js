/*Modo Oscuro*/
const btn = document.getElementById('btn-modo');
const contenido = document.querySelector('body');
btn.addEventListener('click', function () {
    this.classList.toggle('bi-sun-fill');

    if (this.classList.toggle('bi-moon-stars-fill')) {
        document.getElementById('res_personal').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('aptitudes_tit').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('contacto_tit').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('hist_lab').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('hist_acad').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('ref').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('boton_descarga').style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        if (window.matchMedia("(min-width: 760px)").matches) {

            document.querySelector('.lateral_izq').style.backgroundImage = 'linear-gradient(to bottom, rgb(255, 51, 0), rgb(255, 98, 0))';
            document.querySelector('.contenido').style.background = 'rgb(30,30,30)';
            document.querySelector('.contenido').style.transition = '2s';
        } else {
            contenido.style.backgroundColor = 'rgb(71,67,67)';
            contenido.style.transition = '2s';
        };
        btn.style.backgroundImage = 'linear-gradient(to right, rgb(255, 111, 0), rgb(240, 174, 52), rgb(239, 207, 117))';
        document.getElementById('cuadro_personal').style.color = 'white';
        document.getElementById('cuadro_personal').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('cuadro_personal').style.fontWeight = 'lighter';
        document.getElementById('lista_ap').style.color = 'white';
        document.getElementById('lista_ap').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('lista_ap').style.fontWeight = 'lighter';
        document.getElementById('cuadro_contacto').style.color = 'white';
        document.getElementById('cuadro_contacto').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('cuadro_contacto').style.fontWeight = 'lighter';
        document.getElementById('cuadro_lab').style.color = 'white';
        document.getElementById('cuadro_lab').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('cuadro_lab').style.fontWeight = 'lighter';
        document.getElementById('cuadro_acad').style.color = 'white';
        document.getElementById('cuadro_acad').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('cuadro_acad').style.fontWeight = 'lighter';
        document.getElementById('cuadro_ref').style.color = 'white';
        document.getElementById('cuadro_ref').style.backgroundImage = 'linear-gradient(to right, rgb(62, 62, 62), rgb(152, 152, 152))';
        document.getElementById('cuadro_ref').style.fontWeight = 'lighter';
    } else {
        document.getElementById('res_personal').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('aptitudes_tit').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('contacto_tit').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('hist_lab').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('hist_acad').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('ref').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('boton_descarga').style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        if (window.matchMedia("(min-width: 760px)").matches) {
            document.querySelector('.lateral_izq').style.backgroundImage = 'linear-gradient(to bottom, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
            document.querySelector('.contenido').style.backgroundColor = 'rgb(160, 160, 160)';
            document.querySelector('.contenido').style.transition = '2s';
        } else {
            contenido.style.backgroundColor = 'rgb(192,192,192)';
            contenido.style.transition = '2s';
        };
        btn.style.backgroundImage = 'linear-gradient(90deg, rgba(89, 0, 195, 1) 0%, rgba(58, 0, 228, 1)24%, rgba(34, 87, 239, 1)75%, rgba(0, 212, 255, 1)100%)';
        document.getElementById('cuadro_personal').style.color = 'rgb(35, 35, 35)';
        document.getElementById('cuadro_personal').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('cuadro_personal').style.fontWeight = 640;
        document.getElementById('lista_ap').style.color = 'rgb(35, 35, 35)';
        document.getElementById('lista_ap').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('lista_ap').style.fontWeight = 640;
        document.getElementById('cuadro_contacto').style.color = 'rgb(35, 35, 35)';
        document.getElementById('cuadro_contacto').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('cuadro_contacto').style.fontWeight = 640;
        document.getElementById('cuadro_lab').style.color = 'rgb(35, 35, 35)';
        document.getElementById('cuadro_lab').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('cuadro_lab').style.fontWeight = 640;
        document.getElementById('cuadro_acad').style.color = 'rgb(35, 35, 35)';
        document.getElementById('cuadro_acad').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('cuadro_acad').style.fontWeight = 640;
        document.getElementById('cuadro_ref').style.color = 'rgb(35, 35, 35)';
        document.getElementById('cuadro_ref').style.backgroundImage = 'linear - gradient(to right, rgb(77, 77, 77), rgb(228, 228, 228))';
        document.getElementById('cuadro_ref').style.fontWeight = 640;
    }
});

const cuerpo = document
    .querySelector('body');

const btn1 = document.getElementById('btn-mostrar-1');
const btn2 = document.getElementById('btn-mostrar-2');

btn1.addEventListener('click', e => {

    const actual = e.target;

    // const mostrar = actual.className.includes('mostrar');

    if (!btn1)
        return;

    const texto_actual = e.target.parentNode.querySelector('.lateral_izq');

    texto_actual.classList.toggle('presentado');

    actual.textContent = actual.textContent.includes('MOSTRAR MAS') ? 'MOSTRAR MENOS' : 'MOSTRAR MAS';

});

btn2.addEventListener('click', e => {

    const actual = e.target;

    // const mostrar = actual.className.includes('mostrar');

    if (!btn1)
        return;

    const texto_actual = e.target.parentNode.querySelector('.lateral_der');

    texto_actual.classList.toggle('presentado');

    actual.textContent = actual.textContent.includes('MOSTRAR MAS') ? 'MOSTRAR MENOS' : 'MOSTRAR MENOS';

});