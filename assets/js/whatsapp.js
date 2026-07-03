// ===== BOTÓN FLOTANTE DE WHATSAPP =====
document.addEventListener('DOMContentLoaded', function() {
  const whatsappToggle = document.getElementById('whatsappToggle');
  const whatsappOptions = document.getElementById('whatsappOptions');

  if (whatsappToggle && whatsappOptions) {
    whatsappToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      whatsappOptions.classList.toggle('show');
    });

    // Cerrar el menú de WhatsApp si se hace clic fuera de él
    document.addEventListener('click', function(e) {
      const container = document.querySelector('.whatsapp-container');
      if (container && !container.contains(e.target)) {
        whatsappOptions.classList.remove('show');
      }
    });
  }
});