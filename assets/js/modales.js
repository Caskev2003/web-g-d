// ===== FUNCIONES DE MODALES =====
function abrirModal(tipo) {
  const modal = document.getElementById('modalEmpresa');
  const titulo = document.getElementById('modalTitulo');
  const texto = document.getElementById('modalTexto');
  const imagen = document.getElementById('modalImg');

  if (tipo === 'mision') {
    titulo.textContent = 'Misión';
    imagen.src = 'assets/images/mision.png';
    imagen.alt = 'Misión';
    texto.textContent = 'Somos una empresa enfocada en ofrecer una alternativa de salud y productos abarroteros siendo proveedores de una gran gama de productos farmacéuticos, apegados a las normas que nos brinde la secretaría de salud con responsabilidad.';
  } else if (tipo === 'vision') {
    titulo.textContent = 'Visión';
    imagen.src = 'assets/images/vision.png';
    imagen.alt = 'Visión';
    texto.textContent = 'Somos una empresa con una ambición: seguir cuidando de tu salud apoyando tu economía. Nos caracterizamos por brindar más de una solución y seguir ofreciendo nuestra principal vocación: tu bienestar.';
  } else if (tipo === 'valores') {
    titulo.textContent = 'Valores';
    imagen.src = 'assets/images/Valores.jpg';
    imagen.alt = 'Valores';
    texto.textContent = 'Distribuidora G&D tiene muy presentes valores como responsabilidad, respeto, comunicación clara, integridad, honestidad y disciplina, buscando siempre mejorar día a día y servir mejor a clientes y aliados.';
  }

  modal.classList.add('show');
}

function cerrarModal() {
  document.getElementById('modalEmpresa').classList.remove('show');
}

function abrirSucursal(tipo) {
  const modal = document.getElementById('modalSucursal');
  const titulo = document.getElementById('sucursalTitulo');
  const direccion = document.getElementById('sucursalDireccion');
  const mapa = document.getElementById('sucursalMapa');
  const link = document.getElementById('sucursalLink');
  const horario = document.getElementById('sucursalHorario');
  const estado = document.getElementById('sucursalEstado');

  const sucursal = sucursalesData[tipo];
  const estadoActual = obtenerEstadoSucursal(sucursal);

  titulo.textContent = sucursal.nombre;
  direccion.textContent = sucursal.direccion;
  horario.textContent = sucursal.horarioTexto;
  estado.textContent = estadoActual;
  estado.className = estadoActual === 'Abierto ahora' ? 'estado-open' : 'estado-closed';
  mapa.src = sucursal.mapa;
  link.href = sucursal.link;

  modal.classList.add('show');
}

function cerrarSucursal() {
  const modal = document.getElementById('modalSucursal');
  const mapa = document.getElementById('sucursalMapa');
  modal.classList.remove('show');
  mapa.src = ''; // Limpiar el iframe para evitar que siga reproduciéndose en segundo plano
}