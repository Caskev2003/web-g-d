// ===== LÓGICA PRINCIPAL (INICIALIZACIÓN Y EVENTOS GLOBALES) =====
document.addEventListener('DOMContentLoaded', function() {
  // ---- Menú móvil ----
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('#navMenu a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      menuToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 860) {
          navMenu.classList.remove('show');
          menuToggle.textContent = '☰';
        }
      });
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 860) {
        navMenu.classList.remove('show');
        menuToggle.textContent = '☰';
      }
    });
  }

  // ---- Sistema de Tabs (Explorar catálogo) ----
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const activePanel = document.getElementById(target);
        if (activePanel) activePanel.classList.add('active');
      });
    });
  }

  // ---- Configurar el botón de ubicación ----
  const locationButton = document.getElementById('locationButton');
  if (locationButton) {
    locationButton.addEventListener('click', solicitarUbicacion);
  }

  // ---- Inicializar renders ----
  renderizarTabs();
  renderizarMasBuscados();
  renderizarComparativaSucursales();
  // Mostrar sucursales por defecto (sin ubicación)
  renderizarSucursalesCercanas(obtenerSucursalesPorDefecto(), false);
  setLocationMessage('Pulsa "Usar mi ubicación" para calcular sucursales cercanas.');

  // ---- Cerrar modales al hacer clic fuera del contenido o presionar ESC ----
  window.addEventListener('click', function(e) {
    const modalEmpresa = document.getElementById('modalEmpresa');
    const modalSucursal = document.getElementById('modalSucursal');
    if (e.target === modalEmpresa) cerrarModal();
    if (e.target === modalSucursal) cerrarSucursal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      cerrarModal();
      cerrarSucursal();
    }
  });
});

// ---- Intersection Observer para animaciones "reveal" ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.14 });

// Observar todos los elementos con clase "reveal" que ya existan en el DOM
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Nota: Si se agregan nuevos elementos .reveal dinámicamente (como las sucursales cercanas),
// asegúrate de llamar a observer.observe() sobre ellos. En renderizarSucursalesCercanas ya lo hacemos.