// ===== DATOS DE VIDEOS PROMOCIONALES =====
const videosData = [
  {
    id: 1,
    titulo: 'Tour por Sucursal Tapachula',
    descripcion: 'Recorrido por nuestras instalaciones en Tapachula, conoce la variedad de productos y la atención que ofrecemos.',
    archivo: 'tapachula-interior.mp4',
    categoria: 'Sucursal',
    duracion: '1:30',
    destacado: false
  },
  {
    id: 2,
    titulo: 'Video Institucional',
    descripcion: 'Conoce la historia, misión y visión de Distribución G&D.',
    archivo: 'video2.mp4',
    categoria: 'Institucional',
    duracion: '2:15',
    destacado: true
  },
  {
    id: 3,
    titulo: 'Promociones de Temporada',
    descripcion: 'Las mejores ofertas y promociones que tenemos para ti.',
    archivo: 'video3.mp4',
    categoria: 'Promociones',
    duracion: '1:45',
    destacado: false
  },
  {
    id: 4,
    titulo: 'Línea de Productos Farmacéuticos',
    descripcion: 'Descubre nuestra amplia gama de medicamentos y productos de salud.',
    archivo: 'video4.mp4',
    categoria: 'Productos',
    duracion: '2:00',
    destacado: false
  },
  {
    id: 5,
    titulo: 'Sucursal Toscana',
    descripcion: 'Conoce las instalaciones de nuestra sucursal en Toscana.',
    archivo: 'toscana.mp4',
    categoria: 'Sucursal',
    duracion: '1:20',
    destacado: false
  },
  {
    id: 6,
    titulo: 'Perfumería y Cuidado Personal',
    descripcion: 'Las mejores marcas en perfumería y productos de cuidado personal.',
    archivo: 'video5.mp4',
    categoria: 'Perfumería',
    duracion: '1:50',
    destacado: false
  },
  {
    id: 7,
    titulo: 'Abarrotes y Productos de Limpieza',
    descripcion: 'Variedad en productos de abarrotes y limpieza para tu hogar.',
    archivo: 'video6.mp4',
    categoria: 'Abarrotes',
    duracion: '1:35',
    destacado: false
  },
  {
    id: 8,
    titulo: 'Testimonios de Clientes',
    descripcion: 'Nuestros clientes comparten su experiencia con nosotros.',
    archivo: 'video7.mp4',
    categoria: 'Testimonios',
    duracion: '2:30',
    destacado: false
  }
];

// Función para renderizar la galería de videos
function renderizarVideos() {
  const videosGrid = document.getElementById('videosGrid');
  if (!videosGrid) return;
  
  // Filtrar videos que no son el principal destacado
  const videosSecundarios = videosData.filter(v => !v.destacado);
  
  videosGrid.innerHTML = videosSecundarios.map(video => `
    <div class="video-card reveal" onclick="abrirModalVideo(${video.id})">
      <div class="video-card-thumbnail">
        <video preload="metadata">
          <source src="assets/videos/${video.archivo}" type="video/mp4">
        </video>
        <div class="play-overlay">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
      <div class="video-card-info">
        <span class="video-card-badge">${video.categoria}</span>
        <h3>${video.titulo}</h3>
        <p>${video.descripcion}</p>
        <small><i class="fa-regular fa-clock"></i> ${video.duracion}</small>
      </div>
    </div>
  `).join('');
  
  // Configurar thumbnails (mostrar primer frame)
  document.querySelectorAll('.video-card-thumbnail video').forEach(video => {
    video.addEventListener('loadeddata', function() {
      // Opcional: extraer thumbnail del primer frame
    });
  });
}

// Función para abrir modal con video
function abrirModalVideo(videoId) {
  const video = videosData.find(v => v.id === videoId);
  if (!video) return;
  
  const modal = document.getElementById('modalVideo');
  const player = document.getElementById('modalVideoPlayer');
  const titulo = document.getElementById('modalVideoTitle');
  const descripcion = document.getElementById('modalVideoDesc');
  
  // Pausar el video principal si está reproduciéndose
  const mainVideo = document.getElementById('mainVideo');
  if (mainVideo && !mainVideo.paused) {
    mainVideo.pause();
  }
  
  // Configurar el modal
  player.querySelector('source').src = `assets/videos/${video.archivo}`;
  player.load();
  titulo.textContent = video.titulo;
  descripcion.textContent = video.descripcion;
  
  modal.classList.add('show');
  player.play();
}

// Función para cerrar modal de video
function cerrarModalVideo() {
  const modal = document.getElementById('modalVideo');
  const player = document.getElementById('modalVideoPlayer');
  
  player.pause();
  player.currentTime = 0;
  modal.classList.remove('show');
}

// Función para cambiar el video principal
function cambiarVideoPrincipal(videoId) {
  const video = videosData.find(v => v.id === videoId);
  if (!video) return;
  
  const mainVideo = document.getElementById('mainVideo');
  const mainTitle = document.querySelector('.video-principal-info h3');
  const mainDesc = document.querySelector('.video-principal-info p');
  
  mainVideo.querySelector('source').src = `assets/videos/${video.archivo}`;
  mainVideo.load();
  mainTitle.textContent = video.titulo;
  mainDesc.textContent = video.descripcion;
  
  // Scroll suave al video principal
  document.getElementById('videos-promocionales').scrollIntoView({ behavior: 'smooth' });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  renderizarVideos();
});