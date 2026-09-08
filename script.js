const perroImg = document.getElementById('perro-img');
const perroTitulo = document.getElementById('perro-titulo');
const perroDesc = document.getElementById('perro-desc');

const razas = {
    'Digit1': {
        titulo: "Pastor Alemán",
        descripcion: "Perro inteligente, versátil y leal, ampliamente reconocido por su capacidad de trabajo y protección.",
        imagen: "img/pastor aleman.jpg",
        badgeId: "badge-1"
    },
    'Digit2': {
        titulo: "Pitbull",
        descripcion: "Raza enérgica, atlética y de carácter afable con su familia cuando recibe el cuidado adecuado.",
        imagen: "img/pitbull.jpg",
        badgeId: "badge-2"
    },
    'Digit3': {
        titulo: "Pug",
        descripcion: "Compañero compacto y carismático, célebre por su temperamento afectuoso y personalidad juguetona.",
        imagen: "img/pug.jpg",
        badgeId: "badge-3"
    },
    'Digit4': {
        titulo: "Salchicha (Dachshund)",
        descripcion: "De cuerpo alargado y patas cortas, destaca por su valentía, curiosidad y rasgo distintivo.",
        imagen: "img/salchicha.jpg",
        badgeId: "badge-4"
    },
    'Digit5': {
        titulo: "Schnauzer",
        descripcion: "Reconocible por su característica barba y cejas, es un perro alerta, enfocado y protector.",
        imagen: "img/schnauzer.jpg",
        badgeId: "badge-5"
    }
};

function cargarInicial() {
    const inicial = razas['Digit1'];
    perroImg.src = inicial.imagen;
    perroImg.alt = inicial.titulo;
    perroTitulo.textContent = inicial.titulo;
    perroDesc.textContent = inicial.descripcion;
    resaltarBoton(inicial.badgeId);
}

document.addEventListener('keydown', (event) => {
    const tecla = event.code;

    if (razas[tecla]) {
        const info = razas[tecla];

        perroImg.src = info.imagen;
        perroImg.alt = info.titulo;
        perroTitulo.textContent = info.titulo;
        perroDesc.textContent = info.descripcion;

        resaltarBoton(info.badgeId);
    }
});

function resaltarBoton(badgeId) {
    document.querySelectorAll('.key-item').forEach(item => item.classList.remove('active'));
    const actual = document.getElementById(badgeId);
    if (actual) {
        actual.classList.add('active');
    }
}

cargarInicial();
