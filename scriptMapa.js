const concepts = {
            "sintesis-grafica": {
                id: "sintesis-grafica",
                name: "Síntesis Gráfica",
                category: "design",
                description: "Proceso de simplificación visual que reduce elementos complejos a formas esenciales manteniendo su significado.",
                examples: ["Icono de 'guardar' como disquete", "Emojis que representan emociones"],
                relations: ["iconos", "pixel-art", "proyecto-isotype", "susan-kare"],
                position: {x: 35, y: 72}
            },
            "iconos": {
                id: "iconos",
                name: "Iconos",
                category: "ui",
                description: "Representaciones visuales simplificadas que comunican funciones o conceptos en interfaces digitales.",
                examples: ["Iconos de carpetas en sistemas operativos", "Botones de redes sociales"],
                relations: ["sintesis-grafica", "interfaces-graficas", "metáfora-escritorio", "susan-kare", "kiss"],
                position: {x: 52, y: 23}
            },
            "interfaces-graficas": {
                id: "interfaces-graficas",
                name: "Interfaces Gráficas (GUI)",
                category: "ui",
                description: "Sistemas de interacción que utilizan elementos visuales como ventanas, iconos y menús.",
                examples: ["Windows 95", "macOS Finder"],
                relations: ["iconos", "metáfora-escritorio", "xerox-alto", "computer-as-theatre", "usabilidad"],
                position: {x: 70, y: 22}
            },
            "metáfora-escritorio": {
                id: "metáfora-escritorio",
                name: "Metáfora del Escritorio",
                category: "ui",
                description: "Analogía que trata la pantalla como un escritorio físico con documentos y carpetas.",
                examples: ["Papelera de reciclaje", "Carpetas de archivos"],
                relations: ["interfaces-graficas", "xerox-alto", "apple-lisa", "susan-kare", "paradigma-papel"],
                position: {x: 75, y: 47}
            },
            "susan-kare": {
                id: "susan-kare",
                name: "Susan Kare",
                category: "design",
                description: "Diseñadora pionera que humanizó las interfaces con iconos memorables para el Macintosh original.",
                examples: ["Icono 'Mac sonriente'", "Reloj de arena de espera"],
                relations: ["iconos", "pixel-art", "computer-as-theatre", "metáfora-escritorio"],
                position: {x: 55, y: 60}
            },
            "computer-as-theatre": {
                id: "computer-as-theatre",
                name: "Computer as Theatre",
                category: "theory",
                description: "Teoría de Brenda Laurel que compara la interacción computacional con una experiencia teatral emocional.",
                examples: ["Videojuegos narrativos", "Interfaces con storytelling"],
                relations: ["susan-kare", "interfaces-graficas", "experiencia-usuario", "narrativas-digitales"],
                position: {x: 75, y: 35}
            },
            "proyecto-isotype": {
                id: "proyecto-isotype",
                name: "Proyecto Isotype",
                category: "history",
                description: "Sistema de símbolos visuales creado en 1920 para comunicación universal, precursor de los iconos modernos.",
                examples: ["Pictogramas de aeropuertos", "Símbolos de seguridad"],
                relations: ["sintesis-grafica", "iconos"],
                position: {x: 24, y: 57} //
            },
            "xerox-alto": {
                id: "xerox-alto",
                name: "Xerox Alto",
                category: "history",
                description: "Primera computadora con interfaz gráfica y mouse, desarrollada en 1973.",
                examples: ["Primera implementación de ventanas superpuestas", "Uso del ratón como dispositivo apuntador"],
                relations: ["interfaces-graficas", "metáfora-escritorio"],
                position: {x: 92, y: 10}
            },
            "pixel-art": {
                id: "pixel-art",
                name: "Pixel Art",
                category: "design",
                description: "Técnica de creación gráfica a nivel de píxel, fundamental en los primeros iconos e interfaces.",
                examples: ["Iconos de Macintosh original", "Juegos retro como Super Mario Bros"],
                relations: ["sintesis-grafica", "susan-kare"],
                position: {x: 55, y: 72}
            },
            "kiss": {
                id: "kiss",
                name: "Principio KISS",
                category: "design",
                description: "Keep It Simple, Stupid! - Filosofía de diseño que prioriza la simplicidad y eliminación de complejidad innecesaria.",
                examples: ["Iconos minimalistas", "Interfaces limpias sin elementos superfluos"],
                relations: ["iconos", "sintesis-grafica", "usabilidad"],
                position: {x: 40, y: 58} //{x: 35, y: 69}
            },
            "paradigma-papel": {
                id: "paradigma-papel",
                name: "Paradigma del Papel",
                category: "ui",
                description: "Enfoque de diseño que imita documentos físicos con texto negro sobre fondo blanco.",
                examples: ["Interfaces de procesadores de texto", "Lectores de PDF digitales"],
                relations: ["metáfora-escritorio"],
                position: {x: 92, y: 25}
            },
            "usabilidad": {
                id: "usabilidad",
                name: "Usabilidad",
                category: "ui",
                description: "Calidad que mide qué tan fácil de usar es una interfaz para los usuarios.",
                examples: ["Formularios con validación en tiempo real", "Menús intuitivos"],
                relations: ["interfaces-graficas", "kiss", "accesibilidad"],
                position: {x: 89, y: 63}
            },
            "experiencia-usuario": {
                id: "experiencia-usuario",
                name: "Experiencia de Usuario (UX)",
                category: "theory",
                description: "Percepción y respuesta de una persona al usar un producto, sistema o servicio.",
                examples: ["Flujo intuitivo de compra en e-commerce", "Apps con animaciones satisfactorias"],
                relations: ["computer-as-theatre", "usabilidad"],
                position: {x: 92, y: 45}
            },
            "emocion-ux": {
                id: "emocion-ux",
                name: "Emoción en UX",
                category: "theory",
                description: "Estudia cómo las emociones influyen en la experiencia del usuario al interactuar con un producto digital.",
                examples: ["Interfaces que inspiran alegría o sorpresa", "Diseños que evocan nostalgia"],
                relations: ["computer-as-theatre", "narrativas-digitales"],
                position: {x: 74, y: 60}
            },
            "narrativas-digitales": {
                id: "narrativas-digitales",
                name: "Narrativas Digitales",
                category: "theory",
                description: "Uso de la narrativa como herramienta de diseño para guiar al usuario y mejorar su experiencia.",
                examples: ["Storytelling en videojuegos", "Tutoriales interactivos"],
                relations: ["emocion-ux", "videojuegos"],
                position: {x: 73, y: 72} //{x: 55, y: 72}
            },
            "videojuegos": {
                id: "videojuegos",
                name: "Videojuegos",
                category: "tech",
                description: "Medio interactivo que combina diseño gráfico, narración y experiencia de usuario.",
                examples: ["Super Mario Bros", "Journey"],
                relations: ["narrativas-digitales", "gamificacion"],
                position: {x: 79, y: 83} //{x: 63, y: 83}
            },
            "gamificacion": {
                id: "gamificacion",
                name: "Gamificación",
                category: "theory",
                description: "Aplicación de elementos de juego en contextos no lúdicos para motivar la participación.",
                examples: ["Sistemas de puntos y recompensas", "Progresos visuales en apps"],
                relations: ["videojuegos"],
                position: {x: 63, y: 83}
            },
            "resolucion": {
                id: "resolucion",
                name: "Resolución",
                category: "tech",
                description: "Cantidad de píxeles que puede mostrar una pantalla o imagen digital.",
                examples: ["1920x1080", "Retina Display"],
                relations: ["pixel-art", "formatos-imagen"],
                position: {x: 48, y: 84}
            },
            "formatos-imagen": {
                id: "formatos-imagen",
                name: "Formatos Imagen",
                category: "tech",
                description: "Tipos de archivo que almacenan imágenes digitales con distintas propiedades de compresión y color.",
                examples: ["PNG", "JPEG", "SVG"],
                relations: ["resolucion", "modelo-rgb"],
                position: {x: 45, y: 95}
            },
            "modelo-rgb": {
                id: "modelo-rgb",
                name: "Modelo RGB",
                category: "tech",
                description: "Sistema de representación del color basado en la combinación de Rojo, Verde y Azul.",
                examples: ["Pantallas LED", "Edición de imágenes digitales"],
                relations: ["formatos-imagen"],
                position: {x: 63, y: 95}
            },
            "accesibilidad": {
                id: "accesibilidad",
                name: "Accesibilidad",
                category: "ui",
                description: "Capacidad de un sistema para ser usado por personas con distintas capacidades.",
                examples: ["Lector de pantalla", "Contraste alto"],
                relations: ["usabilidad", "wcag"],
                position: {x: 92, y: 75}
            },
            "wcag": {
                id: "wcag",
                name: "WCAG 2.0",
                category: "ui",
                description: "Pautas para mejorar la accesibilidad de los sitios web para todos los usuarios.",
                examples: ["Texto alternativo en imágenes", "Navegación con teclado"],
                relations: ["accesibilidad"],
                position: {x: 77, y: 95}
            },
            "diseno-inclusivo": {
                id: "diseno-inclusivo",
                name: "Diseño Inclusivo",
                category: "theory",
                description: "Diseño que considera una amplia gama de capacidades, edad, género, cultura y nivel de experiencia.",
                examples: ["Interfaces adaptables", "Contenido multicultural"],
                relations: ["accesibilidad"],
                position: {x: 92, y: 95}
            },
            "evolucion-historica": {
                id: "evolucion-historica",
                name: "Evolución Histórica",
                category: "history",
                description: "Resumen de hitos clave en la historia del diseño digital y la computación.",
                examples: ["Transición de la computación analógica a digital", "Nacimiento de las interfaces gráficas"],
                relations: ["colossus", "arpa", "engelbart", "licklider"],
                position: {x: 20, y: 5}
            },
            "colossus": {
                id: "colossus",
                name: "Colossus/ENIAC",
                category: "history",
                description: "Primeras computadoras electrónicas programables utilizadas durante y después de la Segunda Guerra Mundial.",
                examples: ["Colossus (1943)", "ENIAC (1945)"],
                relations: ["evolucion-historica"],
                position: {x: 8, y: 17}
            },
            "arpa": {
                id: "arpa",
                name: "ARPA/Internet",
                category: "history",
                description: "Agencia estadounidense que desarrolló el precursor de Internet (ARPANET).",
                examples: ["ARPANET en 1969", "Base de la red mundial"],
                relations: ["evolucion-historica"],
                position: {x:40, y: 5}
            },
            "web-2": {
                id: "web-2",
                name: "Web 2.0",
                category: "tech",
                description: "Evolución de la web hacia una participación más activa del usuario y contenido colaborativo.",
                examples: ["Redes sociales", "Blogs, wikis"],
                relations: ["licklider", "redes-sociales", "impacto-actual"],
                position: {x: 22, y: 24}
            },
            "licklider": {
                id: "licklider",
                name: "Licklider",
                category: "history",
                description: "Visión temprana sobre la simbiosis humano-computadora y predecesor de la Web.",
                examples: ["Promovió ARPANET", "Inspiró la Web 2.0"],
                relations: ["evolucion-historica", "web-2"],
                position: {x: 8, y: 30}
            },
            "engelbart": {
                id: "engelbart",
                name: "Douglas Engelbart",
                category: "history",
                description: "Inventor del ratón y pionero en interacción humano-computadora.",
                examples: ["The Mother of All Demos (1968)"],
                relations: ["evolucion-historica"],
                position: {x: 37, y: 16}
            },
            "principios-diseno": {
                id: "principios-diseno",
                name: "Principios de Diseño",
                category: "design",
                description: "Conjunto de reglas que guían el diseño visual y funcional.",
                examples: ["Consistencia", "Jerarquía visual", "Contraste"],
                relations: ["kiss", "consistencia", "espacio-blanco", "skeumorfismo"],
                position: {x: 13, y: 70}
            },
            "consistencia": {
                id: "consistencia",
                name: "Consistencia",
                category: "design",
                description: "Uso coherente de elementos visuales y funcionales en una interfaz.",
                examples: ["Mismos colores para botones con igual función"],
                relations: ["principios-diseno"],
                position: {x: 13, y: 83} //{x: 13, y: 70}
            },
            "espacio-blanco": {
                id: "espacio-blanco",
                name: "Espacio Blanco",
                category: "design",
                description: "Espacios vacíos intencionados que mejoran la legibilidad y jerarquía visual.",
                examples: ["Márgenes entre bloques de texto", "Separación de secciones"],
                relations: ["principios-diseno"],
                position: {x: 8, y: 55}
            },
            "skeumorfismo": {
                id: "skeumorfismo",
                name: "Skeumorfismo",
                category: "design",
                description: "Estilo de diseño que imita objetos reales con texturas y sombras.",
                examples: ["App de Notas con apariencia de libreta"],
                relations: ["principios-diseno", "flat-design"],
                position: {x: 32, y: 83} 
            },
            "flat-design": {
                id: "flat-design",
                name: "Flat Design",
                category: "design",
                description: "Estilo minimalista que elimina detalles decorativos para enfocarse en la funcionalidad.",
                examples: ["Diseños con colores planos y tipografía clara"],
                relations: ["skeumorfismo", "neomorfismo"],
                position: {x: 10, y: 95}  //x: 26, y: 95
            },
            "neomorfismo": {
                id: "neomorfismo",
                name: "Neomorfismo",
                category: "design",
                description: "Estilo de diseño visual que combina elementos del skeumorfismo y el flat design con sombras suaves.",
                examples: ["Botones que parecen embebidos en la superficie"],
                relations: ["flat-design"],
                position: {x: 26, y: 95}
            },
            "impacto-actual": {
                id: "impacto-actual",
                name: "Impacto Actual",
                category: "theory",
                description: "Influencia contemporánea del diseño digital en la sociedad, la economía y la cultura.",
                examples: ["Diseño adaptativo", "IA en creación gráfica"],
                relations: ["web-2", "responsive", "ia-diseno"],
                position: {x: 58, y: 8}
            },
            "redes-sociales": {
                id: "redes-sociales",
                name: "Redes Sociales",
                category: "tech",
                description: "Plataformas que permiten compartir contenido y conectar usuarios a escala global.",
                examples: ["Instagram, TikTok, X"],
                relations: ["web-2", "marketing-contenido"],
                position: {x: 30, y: 35}
            },
            "marketing-contenido": {
                id: "marketing-contenido",
                name: "Marketing de Contenidos",
                category: "tech",
                description: "Estrategia de crear contenido relevante para atraer y retener usuarios.",
                examples: ["Blogs, videos, infografías"],
                relations: ["redes-sociales"],
                position: {x: 52, y: 35} //x: 50, y: 22
            },
            "responsive": {
                id: "responsive",
                name: "Responsive Design",
                category: "tech",
                description: "Técnica de diseño web que adapta el contenido a diferentes tamaños de pantalla.",
                examples: ["Diseño adaptable en móvil y escritorio"],
                relations: ["impacto-actual", "experiencia-movil"],
                position: {x: 10, y: 43}
            },
            "experiencia-movil": {
                id: "experiencia-movil",
                name: "Experiencia Móvil",
                category: "ui",
                description: "Diseño optimizado para la interacción en dispositivos móviles.",
                examples: ["Interfaces táctiles optimizadas", "Carga rápida en móviles"],
                relations: ["responsive"],
                position: {x: 33, y: 46}
            },
            "ia-diseno": {
                id: "ia-diseno",
                name: "IA en Diseño",
                category: "tech",
                description: "Uso de inteligencia artificial para asistir o automatizar procesos de diseño.",
                examples: ["Generadores de logos", "Diseño asistido por IA"],
                relations: ["impacto-actual", "automatizacion"],
                position: {x: 76, y: 10}
            },
            "automatizacion": {
                id: "automatizacion",
                name: "Automatización",
                category: "tech",
                description: "Implementación de sistemas que ejecutan tareas de diseño sin intervención humana directa.",
                examples: ["Auto-layout", "Sistemas generativos"],
                relations: ["ia-diseno"],
                position: {x: 53, y: 48}
            }

        };
const btnAyuda = document.getElementById('btn-ayuda');
const btnDesarrolladora = document.getElementById('btn-desarrolladora');
const btnMapa = document.getElementById('btn-visual');
const btnIndex = document.getElementById('btn-index');
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
btnIndex.addEventListener('click', () => {
  window.location.href = 'index.html';
});
btnMapa.addEventListener('click', () => {
  window.location.href = 'glosario.html';
});

        // Initialize the concept map
        document.addEventListener('DOMContentLoaded', () => {
            renderConceptMap();
            setupEventListeners();
            
            // Auto-select a starting concept
            setTimeout(() => {
                selectConcept('sintesis-grafica');
            }, 2000);
        });

        // Render the concept map
        function renderConceptMap() {
            const mapContainer = document.getElementById('concept-map');
            
            // Clear the container
            mapContainer.innerHTML = '';
            
            // First pass: create connections
            Object.values(concepts).forEach(concept => {
                concept.relations.forEach(relationId => {
                    if (concepts[relationId]) {
                        createConnection(concept, concepts[relationId]);
                    }
                });
            });
            
            // Second pass: create nodes (on top of connections)
            Object.values(concepts).forEach(concept => {
                createConceptNode(concept);
            });
            //recalcular las posiciones
            setTimeout(() => {
                updateAllConnections();
            }, 0);
        }

        // Create a concept node
        function createConceptNode(concept) {
            const mapContainer = document.getElementById('concept-map');
            const node = document.createElement('div');
            
            node.className = `concept-node ${concept.category}`;
            node.textContent = concept.name;
            node.dataset.id = concept.id;
            
            // Position the node
            const x = (concept.position.x / 100) * mapContainer.clientWidth;
            const y = (concept.position.y / 100) * mapContainer.clientHeight;
            
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            
            // Add click event
            node.addEventListener('click', (e) => {
                e.stopPropagation();
                selectConcept(concept.id);
            });
            
            mapContainer.appendChild(node);
        }

        // Create a connection between two nodes
        function createConnection(source, target) {
            const mapContainer = document.getElementById('concept-map');
            const connection = document.createElement('div');
            connection.className = 'connection';
            connection.dataset.source = source.id;
            connection.dataset.target = target.id;
            
            mapContainer.appendChild(connection);
            updateConnectionPosition(source, target);
        }

        // Update connection position
        function updateConnectionPosition(source, target) {
            const sourceNode = document.querySelector(`.concept-node[data-id="${source.id}"]`);
            const targetNode = document.querySelector(`.concept-node[data-id="${target.id}"]`);
            const connection = document.querySelector(`.connection[data-source="${source.id}"][data-target="${target.id}"]`);
            
            if (!sourceNode || !targetNode || !connection) return;
            
            const sourceRect = sourceNode.getBoundingClientRect();
            const targetRect = targetNode.getBoundingClientRect();
            const mapRect = document.getElementById('concept-map').getBoundingClientRect();
            
            const sourceX = sourceRect.left + sourceRect.width/2 - mapRect.left;
            const sourceY = sourceRect.top + sourceRect.height/2 - mapRect.top;
            const targetX = targetRect.left + targetRect.width/2 - mapRect.left;
            const targetY = targetRect.top + targetRect.height/2 - mapRect.top;
            
            // Calculate distance and angle
            const dx = targetX - sourceX;
            const dy = targetY - sourceY;
            const distance = Math.sqrt(dx*dx + dy*dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            // Position and style the connection
            connection.style.width = `${distance}px`;
            connection.style.left = `${sourceX}px`;
            connection.style.top = `${sourceY}px`;
            connection.style.transform = `rotate(${angle}deg)`;
        }

        // Update all connection positions (for responsiveness)
        function updateAllConnections() {
            Object.values(concepts).forEach(source => {
                source.relations.forEach(relationId => {
                    const target = concepts[relationId];
                    if (target) {
                        updateConnectionPosition(source, target);
                    }
                });
            });
        }

        // Select a concept to show details
        function selectConcept(conceptId) {
            const concept = concepts[conceptId];
            if (!concept) return;
            
            // Highlight selected node
            document.querySelectorAll('.concept-node').forEach(node => {
                node.classList.remove('active');
            });
            document.querySelector(`.concept-node[data-id="${conceptId}"]`).classList.add('active');
            
            // Highlight connections
            document.querySelectorAll('.connection').forEach(conn => {
                conn.classList.remove('highlight');
            });
            
            // Highlight incoming connections
            Object.values(concepts).forEach(c => {
                if (c.relations.includes(conceptId)) {
                    const conn = document.querySelector(`.connection[data-source="${c.id}"][data-target="${conceptId}"]`);
                    if (conn) conn.classList.add('highlight');
                }
            });
            
            // Highlight outgoing connections
            concept.relations.forEach(relId => {
                const conn = document.querySelector(`.connection[data-source="${conceptId}"][data-target="${relId}"]`);
                if (conn) conn.classList.add('highlight');
            });
            
            // Update info panel
            renderInfoPanel(concept);
        }

        // Render the information panel
        function renderInfoPanel(concept) {
            const infoPanel = document.getElementById('info-content');
            let categoryClass = '';
            
            switch(concept.category) {
                case 'history': categoryClass = 'history'; break;
                case 'design': categoryClass = 'design'; break;
                case 'tech': categoryClass = 'tech'; break;
                case 'theory': categoryClass = 'theory'; break;
                case 'ui': categoryClass = 'ui'; break;
            }
            
            // Generate related concepts HTML
            const relatedConceptsHTML = concept.relations
                .filter(id => concepts[id])
                .map(id => {
                    const related = concepts[id];
                    return `<div class="related-concept" data-id="${related.id}">${related.name}</div>`;
                })
                .join('');
            
            // Generate examples HTML
            const examplesHTML = concept.examples
                .map(example => `<div class="example-item">${example}</div>`)
                .join('');
            
            infoPanel.innerHTML = `
                <div class="info-card ${categoryClass}">
                    <h2>${concept.name}</h2>
                    <p>${concept.description}</p>
                    
                    ${examplesHTML ? `
                    <div class="examples">
                        <strong>Ejemplos:</strong>
                        ${examplesHTML}
                    </div>
                    ` : ''}
                    
                    ${relatedConceptsHTML ? `
                    <div class="related-concepts-container">
                        <strong>Conceptos Relacionados:</strong>
                        <div class="related-concepts">
                            ${relatedConceptsHTML}
                        </div>
                    </div>
                    ` : ''}
                </div>
            `;
            
            // Add event listeners to related concepts
            document.querySelectorAll('.related-concept').forEach(el => {
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectConcept(el.dataset.id);
                });
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Handle window resize
            window.addEventListener('resize', () => {
                updateAllConnections();
            });
            
            // Handle search
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                
                if (!searchTerm) {
                    document.querySelectorAll('.concept-node').forEach(node => {
                        node.style.opacity = '1';
                    });
                    return;
                }
                
                // Highlight matching nodes
                document.querySelectorAll('.concept-node').forEach(node => {
                    const conceptId = node.dataset.id;
                    const concept = concepts[conceptId];
                    
                    if (concept.name.toLowerCase().includes(searchTerm) || 
                        concept.description.toLowerCase().includes(searchTerm)) {
                        node.style.opacity = '1';
                        node.style.border = '2px solid white';
                    } else {
                        node.style.opacity = '0.3';
                        node.style.border = 'none';
                    }
                });
            });
            
            // Click on map background to deselect
            document.getElementById('concept-map').addEventListener('click', () => {
                document.querySelectorAll('.concept-node').forEach(node => {
                    node.classList.remove('active');
                });
                
                document.querySelectorAll('.connection').forEach(conn => {
                    conn.classList.remove('highlight');
                });
                
                document.getElementById('info-content').innerHTML = `
                    <div class="empty-state">
                        <h3>Explora el Mapa Conceptual</h3>
                        <p>Haz clic en cualquier concepto para ver su definición, ejemplos y relaciones</p>
                    </div>
                `;
            });
        }