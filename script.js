const cartas = [
  {
    nombre: "Accesibilidad",
    ilustracion: "recursos/cartas/accesibilidad.png",
    definicion: "Diseño de interfaces que pueden ser utilizadas por personas con distintas capacidades.",
    ejemploImg: "recursos/icons/ic_wcag.png",
    ejemploTexto: "Un sitio con navegación por teclado y alto contraste."
  },
  {
    nombre: "Píxel",
    ilustracion: "recursos/cartas/pixel.png",
    definicion: "Unidad más pequeña de una imagen digital; representa un punto de color.",
    ejemploImg: "recursos/icons/manzana.png",
    ejemploTexto: "Pantallas con más píxeles por pulgada se ven más nítidas."
  },
  {
    nombre: "Interfaz Gráfica de Usuario (GUI)",
    ilustracion: "recursos/cartas/GUI.png",
    definicion: "Zona media que permite a los usuarios interactuar con dispositivos mediante elementos gráficos.",
    ejemploImg: "recursos/icons/ic_gui.png",
    ejemploTexto: "Windows o macOS."
  },
  {
    nombre: "Metáfora del escritorio",
    ilustracion: "recursos/cartas/escritorio.png",
    definicion: "Metáfora empleada que simula un escritorio en el computador para facilidad del usuario.",
    ejemploImg: "recursos/icons/ic_escritorio.png",
    ejemploTexto: "Las carpetas, archivos y la forma en la que está organizada la pantalla."
  },
  {
    nombre: "Responsive Design",
    ilustracion: "recursos/cartas/Responsive.png",
    definicion: "Diseño que adapta contenido a distintos tamaños de pantalla.",
    ejemploImg: "recursos/icons/ic_responsive.png",
    ejemploTexto: "Sitio de Amazon que se ajusta a cualquier dispositivo."
  },
  {
    nombre: "Skeumorfismo",
    ilustracion: "recursos/cartas/Skeumorphim.png",
    definicion: "Diseño que imita objetos reales.",
    ejemploImg: "recursos/icons/ic_boton.png",
    ejemploTexto: "Antiguo iOS con iconos de vidrio y relieves.."
  },
  {
    nombre: "User Experience (UX)",
    ilustracion: "recursos/cartas/UX.png",
    definicion: "Experiencia global del usuario al interactuar con un producto/servicio.",
    ejemploImg: "recursos/icons/ic_UX.png",
    ejemploTexto: "Navegar por Netflix para ver películas."
  },
  {
    nombre: "SEO (Search Engine Optimization)",
    ilustracion: "recursos/cartas/SEO.png",
    definicion: "Técnicas para mejorar visibilidad en buscadores orgánicos.",
    ejemploImg: "recursos/icons/ic_seo.png",
    ejemploTexto: "Uso de palabras claves, etiquetas en imágenes."
  },
  {
    nombre: "Metáfora Digital",
    ilustracion: "recursos/cartas/metDig.png",
    definicion: "Uso de símbolos del mundo real para representar funciones digitales.",
    ejemploImg: "recursos/icons/ic_metDig.png",
    ejemploTexto: "Icono de 'papelera' para eliminar archivos."
  },
  {
    nombre: "Gamificación",
    ilustracion: "recursos/cartas/gamificacion.png",
    definicion: "Uso de mecánicas de juego (recompensas, niveles) en contextos no lúdicos.",
    ejemploImg: "recursos/icons/ic_gamificacion.png",
    ejemploTexto: "Duolingo con puntos por aprender idiomas."
  },
  {
    nombre: "WCAG 2.0",
    ilustracion: "recursos/cartas/wcag.png",
    definicion: "Pautas para hacer contenido web accesible (niveles A, AA, AAA).",
    ejemploImg: "recursos/icons/ic_wcag.png",
    ejemploTexto: "Texto con alto contraste para daltonismo."
  },
  {
    nombre: "Modelo RGB",
    ilustracion: "recursos/cartas/rgb.png",
    definicion: "Sistema de colores basado en luz (Rojo, Verde, Azul) para pantallas digitales.",
    ejemploImg: "recursos/icons/ic_rgb.png",
    ejemploTexto: "Pantallas OLED que mezclan estos colores."
  },
    {
    nombre: "Usabilidad",
    ilustracion: "recursos/cartas/usabilidad.png",
    definicion: "Facilidad con que usuarios logran objetivos en un sistema.",
    ejemploImg: "recursos/icons/ic_usabilidad.png",
    ejemploTexto: "Formulario de contacto simple en un sitio web."
  },
  {
    nombre: "Comunicación Visual",
    ilustracion: "recursos/cartas/comvisual.png",
    definicion: "Todo elemento visual que es importante en el proceso comunicativo.",
    ejemploImg: "recursos/icons/ic_comvisual.png",
    ejemploTexto: "Fotografías, formas, ilustraciones, tipografía, colores, etc"
  },
  {
    nombre: "Síntesis gráfica",
    ilustracion: "recursos/cartas/lobo.png",
    definicion: "Busca el reducir los elementos visuales de un objeto y dejar solo lo escencial para sea reconocido.",
    ejemploImg: "recursos/icons/ic_lobo.png",
    ejemploTexto: "Íconos"
  }
];
const btnAyuda = document.getElementById('btn-ayuda');
const btnMapa = document.getElementById('btn-mapa');
const ayuda = document.getElementById('ayuda');
const btnIndex = document.getElementById('btn-index');

// Función para ocultar todos los paneles menos el que quieres mostrar
function togglePanel(panel) {
  [ayuda].forEach(p => {
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

btnMapa.addEventListener('click', () => {
  window.location.href = 'mapa.html';
});
btnIndex.addEventListener('click', () => {
  window.location.href = 'index.html';
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
/*  const imgFront = document.createElement('img');
  imgFront.src = carta.ilustracion;
  front.appendChild(imgFront);*/
  front.style.backgroundImage = `url('${carta.ilustracion}')`;
  front.style.backgroundSize = "cover";
  front.style.backgroundPosition = "center";
  front.style.backgroundRepeat = "no-repeat";

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
