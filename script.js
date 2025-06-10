const cartas = [
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
    {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Accesibilidad",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  }
];
const btnAyuda = document.getElementById('btn-ayuda');
const btnDesarrolladora = document.getElementById('btn-desarrolladora');
const btnMapa = document.getElementById('btn-mapa');
const ayuda = document.getElementById('ayuda');
const infoDesarrolladora = document.getElementById('info-desarrolladora');

// Función para ocultar todos los paneles menos el que quieres mostrar
function togglePanel(panel) {
  [ayuda, infoDesarrolladora].forEach(p => {
    if (p === panel) {
      p.classList.toggle('oculto');
    } else {
      p.classList.add('oculto');
    }
  });
}

btnAyuda.addEventListener('click', () => {
  togglePanel(ayuda);
});

btnDesarrolladora.addEventListener('click', () => {
  togglePanel(infoDesarrolladora);
});

btnMapa.addEventListener('click', () => {
  // Cambia 'mapa.html' por la URL de tu mapa mental
  window.location.href = 'mapa.html';
});

const mazoInicial = document.getElementById('mazo-inicial');
const zonaCentro = document.getElementById('zona-centro');
const mazoFinal = document.getElementById('mazo-final');
const contador = document.getElementById('restantes');
const reiniciarBtn = document.getElementById('reiniciar');

let cartaActual = null;

function actualizarContador() {
  contador.textContent = mazoInicial.children.length;
}

function crearCarta(carta, offset) {
  const container = document.createElement('div');
  container.classList.add('card-container');
  container.style.setProperty('--offset', offset);

  const card = document.createElement('div');
  card.classList.add('card');

  const inner = document.createElement('div');
  inner.classList.add('card-inner');

  // Frente
  const front = document.createElement('div');
  front.classList.add('card-front');
  const imgFront = document.createElement('img');
  imgFront.src = carta.ilustracion;
  front.appendChild(imgFront);

  // Dorso
  const back = document.createElement('div');
  back.classList.add('card-back');
  back.innerHTML = `
    <h2>${carta.nombre}</h2>
    <p>${carta.definicion}</p>
    <div class="ejemplo-visual">
      <img src="${carta.ejemploImg}" alt="Ejemplo de ${carta.nombre}">
      <p>${carta.ejemploTexto}</p>
    </div>
  `;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  container.appendChild(card);

  container.addEventListener('click', () => manejarCartaSeleccionada(container));

  return container;
}

function manejarCartaSeleccionada(container) {
  if (zonaCentro.firstChild || container.classList.contains('ya-usada')) return;

  // Mover al centro
  cartaActual = container;
  container.classList.add('active', 'animacion-entrada');
  zonaCentro.appendChild(container);

  actualizarContador();
  if (mazoInicial.children.length === 0) reiniciarBtn.classList.remove('oculto');
}

function moverAlMazoFinal() {
  if (!cartaActual) return;

  cartaActual.classList.add('animacion-salida', 'ya-usada');

  setTimeout(() => {
    cartaActual.classList.remove('animacion-salida', 'active');
    cartaActual.style.setProperty('--offset', mazoFinal.children.length);
    mazoFinal.appendChild(cartaActual);
    zonaCentro.innerHTML = '';
    cartaActual = null;
  }, 600);
}

function iniciarJuego() {
  cartas.forEach((carta, i) => {
    const nuevaCarta = crearCarta(carta, cartas.length - i);
    mazoInicial.appendChild(nuevaCarta);
  });
  actualizarContador();
}

function reiniciarJuego() {
  const usadas = [...mazoFinal.children].reverse();
  usadas.forEach((carta, i) => {
    carta.classList.remove('ya-usada');
    carta.style.setProperty('--offset', usadas.length - i);
    mazoInicial.appendChild(carta);
  });

  mazoFinal.innerHTML = '';
  zonaCentro.innerHTML = '';
  cartaActual = null;
  reiniciarBtn.classList.add('oculto');
  actualizarContador();
}

reiniciarBtn.addEventListener('click', reiniciarJuego);
zonaCentro.addEventListener('click', moverAlMazoFinal);

iniciarJuego();
