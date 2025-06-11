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
    nombre: "Interfaz Gráfica de Usuario (GUI)",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Zona media que permite a los usuarios interactuar con dispositivos mediante elementos gráficos.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Windows o macOS."
  },
  {
    nombre: "Metáfora del escritorio",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Metáfora empleada que simula un escritorio en el computador para facilidad del usuario.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Las carpetas, archivos y la forma en la que está organizada la pantalla."
  },
  {
    nombre: "Responsive Design",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Diseño que adapta contenido a distintos tamaños de pantalla.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Sitio de Amazon que se ajusta a cualquier dispositivo."
  },
  {
    nombre: "Skeumorfismo",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Diseño que imita objetos reales.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Antiguo iOS con iconos de vidrio y relieves.."
  },
  {
    nombre: "User Experience (UX)",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Experiencia global del usuario al interactuar con un producto/servicio.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Navegar por Netflix para ver películas."
  },
  {
    nombre: "SEO (Search Engine Optimization)",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Técnicas para mejorar visibilidad en buscadores orgánicos.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Uso de palabras claves, etiquetas en imágenes."
  },
  {
    nombre: "Metáfora Digital",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Uso de símbolos del mundo real para representar funciones digitales.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Icono de 'papelera' para eliminar archivos."
  },
  {
    nombre: "Gamificación",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Uso de mecánicas de juego (recompensas, niveles) en contextos no lúdicos.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Duolingo con puntos por aprender idiomas."
  },
  {
    nombre: "WCAG 2.0",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Pautas para hacer contenido web accesible (niveles A, AA, AAA).",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Texto con alto contraste para daltonismo."
  },
  {
    nombre: "Modelo RGB",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Sistema de colores basado en luz (Rojo, Verde, Azul) para pantallas digitales.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Pantallas OLED que mezclan estos colores."
  },
    {
    nombre: "Usabilidad",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Facilidad con que usuarios logran objetivos en un sistema.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Formulario de contacto simple en un sitio web."
  },
  {
    nombre: "Comunicación Visual",
    ilustracion: "ilustracion-accesibilidad.svg",
    definicion: "Todo elemento visual que es importante en el proceso comunicativo.",
    ejemploImg: "ejemplo-accesibilidad.svg",
    ejemploTexto: "Fotografías, formas, ilustraciones, tipografía, colores, etc"
  },
  {
    nombre: "Síntesis gráfica",
    ilustracion: "ilustracion-pixel.svg",
    definicion: "Busca el reducir los elementos visuales de un objeto y dejar solo lo escencial para sea reconocido.",
    ejemploImg: "ejemplo-pixel.svg",
    ejemploTexto: "Íconos"
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
