// ===== DATOS DEL CATÁLOGO =====
const productosCatalogo = {
  farmacia: [
    { nombre: 'Paracetamol', descripcion: 'Producto de consulta frecuente dentro de la línea farmacéutica.', imagen: 'assets/images/mauvicam.jpeg', badge: 'Popular', meta: ['Farmacia', 'Tapachula'] },
    { nombre: 'Redoxon', descripcion: 'Opción orientada a bienestar y temporada.', imagen: 'assets/images/redoxon.jpeg', badge: 'Recomendado', meta: ['Vitaminas', 'Toscana'] },
    { nombre: 'PediaSure', descripcion: 'Línea con fuerte presencia visual y valor comercial.', imagen: 'assets/images/pediasure-anuncio.jpeg', badge: 'Destacado', meta: ['Nutrición', 'Ciudad Hidalgo'] },
    { nombre: 'Pomada de la Campana', descripcion: 'Artículo clásico de referencia dentro del catálogo.', imagen: 'assets/images/pomada-campana.jpeg', badge: 'Clásico', meta: ['Cuidado', 'Tuxtla'] },
    { nombre: 'Alka Seltzer', descripcion: 'Alivio rápido para malestares estomacales.', imagen: 'assets/images/alkaseltzer.jpeg', badge: 'Popular', meta: ['Farmacia', 'Tapachula'] },
    { nombre: 'Aspirina Protect', descripcion: 'Protección cardiovascular.', imagen: 'assets/images/aspirina-protect.jpeg', badge: 'Recomendado', meta: ['Cardiovascular', 'Tuxtla'] },
    { nombre: 'Buscapina Compositum', descripcion: 'Alivio de cólicos y dolores menstruales.', imagen: 'assets/images/buscapina-compositum.jpeg', badge: 'Popular', meta: ['Farmacia', 'Toscana'] },
    { nombre: 'Flanax', descripcion: 'Analgésico de acción rápida.', imagen: 'assets/images/flanax.jpeg', badge: 'Más vendido', meta: ['Dolor', 'Ciudad Hidalgo'] }
  ],
  perfumeria: [
    { nombre: 'Caprice Naturals', descripcion: 'Línea capilar con alto valor visual en exhibición.', imagen: 'assets/images/caprice.jpeg', badge: 'Popular', meta: ['Cabello', 'Tapachula'] },
    { nombre: 'Caprice Control Caída', descripcion: 'Producto enfocado a una necesidad específica de cuidado personal.', imagen: 'assets/images/caprice2.jpeg', badge: 'Especial', meta: ['Perfumería', 'Toscana'] },
    { nombre: 'Herbal Essences', descripcion: 'Opción premium para destacar una línea de shampoo.', imagen: 'assets/images/herbal.jpeg', badge: 'Premium', meta: ['Cabello', 'Tuxtla'] },
    { nombre: 'Speed Stick', descripcion: 'Producto funcional con presencia constante en la categoría.', imagen: 'assets/images/speed-stick.jpeg', badge: 'Más pedido', meta: ['Higiene', 'Ciudad Hidalgo'] },
    { nombre: 'Aqua Net', descripcion: 'Fijación profesional para el cabello.', imagen: 'assets/images/aqua-net-ceramidas.jpeg', badge: 'Profesional', meta: ['Cabello', 'Tapachula'] },
    { nombre: 'Nivea', descripcion: 'Cuidado facial y corporal.', imagen: 'assets/images/nivea-agua-de-rosas.jpeg', badge: 'Premium', meta: ['Cuidado', 'Tuxtla'] },
    { nombre: 'Ponds', descripcion: 'Cuidado facial antimanchas.', imagen: 'assets/images/crema-ponds-antimanchas.jpeg', badge: 'Recomendado', meta: ['Facial', 'Toscana'] },
    { nombre: 'Cerave', descripcion: 'Control para piel grasa.', imagen: 'assets/images/cerave-control-gel.jpeg', badge: 'Dermatológico', meta: ['Facial', 'Ciudad Hidalgo'] }
  ],
  abarrotes: [
    { nombre: 'Zote Rosa', descripcion: 'Producto reconocido con aplicación en limpieza del hogar.', imagen: 'assets/images/zote.jpeg', badge: 'Popular', meta: ['Hogar', 'Tapachula'] },
    { nombre: 'Electrolit', descripcion: 'Hidratación y electrolitos.', imagen: 'assets/images/electrolit.png', badge: 'Básico', meta: ['Bebidas', 'Toscana'] },
    { nombre: 'Powerade', descripcion: 'Bebida deportiva.', imagen: 'assets/images/powerade-mora-azul.jpeg', badge: 'Esencial', meta: ['Bebidas', 'Tuxtla'] },
    { nombre: 'Jabón Asepxia', descripcion: 'Cuidado facial para acné.', imagen: 'assets/images/jabon-asepxia.jpeg', badge: 'Popular', meta: ['Higiene', 'Ciudad Hidalgo'] },
    { nombre: 'Vaseline', descripcion: 'Cuidado de la piel.', imagen: 'assets/images/vaseline.jpeg', badge: 'Clásico', meta: ['Cuidado', 'Tapachula'] }
  ],
  ofertas: [
    { nombre: 'Redoxon', descripcion: 'Campaña visual con enfoque estacional.', imagen: 'assets/images/redoxon.jpeg', badge: 'Oferta', meta: ['Temporada', 'Tapachula'] },
    { nombre: 'Silka Medic', descripcion: 'Producto ideal para campaña de impulso.', imagen: 'assets/images/silkamedic.jpeg', badge: 'Promoción', meta: ['Farmacia', 'Toscana'] },
    { nombre: 'PediaSure', descripcion: 'Pieza principal para campaña con mayor visibilidad.', imagen: 'assets/images/pediasure-anuncio.jpeg', badge: 'Fuerte', meta: ['Campaña', 'Tuxtla'] },
    { nombre: 'Caprice Naturals', descripcion: 'Producto atractivo para reforzar la línea de perfumería.', imagen: 'assets/images/caprice.jpeg', badge: 'Impulso', meta: ['Perfumería', 'Ciudad Hidalgo'] }
  ]
};

// ===== PRODUCTOS MÁS BUSCADOS =====
function renderizarMasBuscados() {
  const contenedor = document.getElementById('bestSellersGrid');
  if (!contenedor) return;
  
  const destacados = [
    { nombre: 'PediaSure', etiqueta: 'Mayor visibilidad', descripcion: 'Nutrición para el crecimiento.', imagen: 'assets/images/pediasure-anuncio.jpeg' },
    { nombre: 'Paracetamol', etiqueta: 'Alta rotación', descripcion: 'Referencia frecuente en farmacia.', imagen: 'assets/images/mauvicam.jpeg' },
    { nombre: 'Caprice', etiqueta: 'Recomendado', descripcion: 'Cuidado capilar profesional.', imagen: 'assets/images/caprice.jpeg' },
    { nombre: 'Zote', etiqueta: 'Reconocido', descripcion: 'Producto práctico para el hogar.', imagen: 'assets/images/zote.jpeg' },
    { nombre: 'Electrolit', etiqueta: 'Hidratación', descripcion: 'Recuperación de electrolitos.', imagen: 'assets/images/electrolit.png' },
    { nombre: 'Redoxon', etiqueta: 'Vitaminas', descripcion: 'Refuerzo del sistema inmune.', imagen: 'assets/images/redoxon.jpeg' }
  ];

  contenedor.innerHTML = destacados.map(item => `
    <article class="best-seller-card reveal">
      <div class="best-seller-image">
        <img src="${item.imagen}" alt="${item.nombre}">
      </div>
      <div class="best-seller-info">
        <span class="best-seller-tag">${item.etiqueta}</span>
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
      </div>
    </article>
  `).join('');
}

// ===== MARCAS =====
function renderizarMarcas() {
  const marcas = [
    { nombre: 'Bayer', imagen: 'bayer.png' },
    { nombre: 'Johnsons', imagen: 'johnsons.png' },
    { nombre: 'Electrolit', imagen: 'electrolit.png' },
    { nombre: 'Savilé', imagen: 'savile.avif' },
    { nombre: 'Ensure', imagen: 'ensure.png' },
    { nombre: 'PediaSure', imagen: 'pediasure.png' },
    { nombre: 'Pedialyte', imagen: 'pedialyte.png' },
    { nombre: 'P&G', imagen: 'pyg.png' },
    { nombre: 'Doloneurobión', imagen: 'doloneurobion.jpeg' },
    { nombre: 'Neurobión', imagen: 'neurobion.jpeg' }
  ];
  
  const gallery = document.getElementById('brandsGallery');
  if (gallery) {
    gallery.innerHTML = marcas.map(marca => `
      <div class="brand-card reveal">
        <img src="assets/images/${marca.imagen}" alt="${marca.nombre}" />
      </div>
    `).join('');
  }
}

// ===== FUNCIÓN PARA CREAR TARJETA DE PRODUCTO =====
function crearProductoCard(item, categoriaNombre) {
  return `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${item.imagen}" alt="${item.nombre}">
      </div>
      <div class="product-info">
        <div class="product-top">
          <span class="product-tag">${categoriaNombre}</span>
          <span class="product-badge">${item.badge}</span>
        </div>
        <h3>${item.nombre}</h3>
        <p>${item.descripcion}</p>
        <div class="product-meta">
          ${item.meta.map(m => `<span>${m}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

// ===== RENDERIZAR TABS =====
function renderizarTabs() {
  const farmaciaContainer = document.getElementById('farmaciaProductos');
  const perfumeriaContainer = document.getElementById('perfumeriaProductos');
  const abarrotesContainer = document.getElementById('abarrotesProductos');
  const ofertasContainer = document.getElementById('ofertasProductos');
  
  if (farmaciaContainer) {
    farmaciaContainer.innerHTML = productosCatalogo.farmacia.map(item => crearProductoCard(item, 'Farmacia')).join('');
  }
  if (perfumeriaContainer) {
    perfumeriaContainer.innerHTML = productosCatalogo.perfumeria.map(item => crearProductoCard(item, 'Perfumería')).join('');
  }
  if (abarrotesContainer) {
    abarrotesContainer.innerHTML = productosCatalogo.abarrotes.map(item => crearProductoCard(item, 'Abarrotes')).join('');
  }
  if (ofertasContainer) {
    ofertasContainer.innerHTML = productosCatalogo.ofertas.map(item => crearProductoCard(item, 'Oferta')).join('');
  }
}

// ===== RENDERIZAR SUCURSALES COMPARATIVAS =====
function renderizarComparativaSucursales() {
  const contenedor = document.getElementById('compareSucursales');
  if (!contenedor || typeof sucursalesData === 'undefined') return;
  
  const enfoqueIconos = {
    tapachula: 'fa-solid fa-boxes-stacked',
    toscana: 'fa-solid fa-road',
    ciudadhidalgo: 'fa-solid fa-handshake',
    tuxtla: 'fa-solid fa-city'
  };

  contenedor.innerHTML = Object.keys(sucursalesData).map(key => {
    const sucursal = sucursalesData[key];
    const estado = typeof obtenerEstadoSucursal === 'function' ? obtenerEstadoSucursal(sucursal) : 'Abierto ahora';
    const abierta = estado === 'Abierto ahora';

    return `
      <article class="compare-card reveal">
        <div class="compare-top">
          <h3>${sucursal.nombre}</h3>
          <span class="compare-status ${abierta ? 'open' : 'closed'}">${estado}</span>
        </div>
        <p>${sucursal.direccion}</p>
        <div class="compare-list">
          <div><i class="fa-regular fa-clock"></i><span>${sucursal.horarioTexto}</span></div>
          <div><i class="${enfoqueIconos[key]}"></i><span>${sucursal.enfoque}</span></div>
          <div><i class="fa-solid fa-map-location-dot"></i><span>Ubicación disponible en mapa</span></div>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="abrirSucursal('${key}')">Ver detalle</button>
      </article>
    `;
  }).join('');
}