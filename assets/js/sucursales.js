// ===== DATOS DE SUCURSALES =====
const sucursalesData = {
  tapachula: {
    nombre: 'Sucursal Tapachula',
    direccion: 'Carr. a Puerto Madero km 4, Los Naranjos, Canta Ranas, 30797 Tapachula de Córdova y Ordóñez, Chis.',
    horarioTexto: 'Lun a vie · 8:00 am a 6:00 pm · Sáb 8:00 am a 4:00 pm',
    enfoque: 'Cobertura amplia y atención de alto flujo',
    horarios: {
      lunesViernes: { abre: '08:00', cierra: '18:00' },
      sabado: { abre: '08:00', cierra: '16:00' }
    },
    mapa: 'https://www.google.com/maps?q=Tapachula,Chiapas,Mexico&output=embed',
    link: 'https://maps.app.goo.gl/iCP9EMFZsKTdKKQ9A',
    lat: 14.907038641809468,
    lng: -92.2834320129711
  },
  toscana: {
    nombre: 'Sucursal Toscana',
    direccion: 'Plaza Toscana Libramiento Sur Oriente, 30785 Tapachula de Córdova y Ordóñez, Chis.',
    horarioTexto: 'Lun a vie · 8:00 am a 6:00 pm · Sáb 8:00 am a 5:00 pm',
    enfoque: 'Ubicación estratégica y acceso rápido',
    horarios: {
      lunesViernes: { abre: '08:00', cierra: '18:00' },
      sabado: { abre: '08:00', cierra: '17:00' }
    },
    mapa: 'https://www.google.com/maps?q=Toscana,Tapachula,Chiapas,Mexico&output=embed',
    link: 'https://maps.app.goo.gl/hv1utfDiUdBwcUieA',
    lat: 14.85721410750208,
    lng: -92.2782996
  },
  ciudadhidalgo: {
    nombre: 'Sucursal Ciudad Hidalgo',
    direccion: 'Tercera avenida Oriente entre Primera y Tercera Norte, Ciudad Hidalgo, 30840 Cdad. Hidalgo, Chis.',
    horarioTexto: 'Lun a vie · 7:30 am a 5:30 pm · Sáb 7:30 am a 3:30 pm',
    enfoque: 'Atención regional y servicio cercano',
    horarios: {
      lunesViernes: { abre: '07:30', cierra: '17:30' },
      sabado: { abre: '07:30', cierra: '15:30' }
    },
    mapa: 'https://www.google.com/maps?q=Ciudad+Hidalgo,Chiapas,Mexico&output=embed',
    link: 'https://maps.app.goo.gl/F6ryDvbnRQXbtqWa9',
    lat: 14.6813187,
    lng: -92.1494964
  },
  tuxtla: {
    nombre: 'Sucursal Tuxtla Gutiérrez',
    direccion: 'De la Octava Sur Ote. 1535-Locales 07 y 08, entre 13 y 15 Oriente, Santa Cruz, 29073 Tuxtla Gutiérrez, Chis.',
    horarioTexto: 'Lun a vie · 8:00 am a 6:00 pm · Sáb 8:00 am a 4:00 pm',
    enfoque: 'Cobertura urbana y atención ágil',
    horarios: {
      lunesViernes: { abre: '08:00', cierra: '18:00' },
      sabado: { abre: '08:00', cierra: '16:00' }
    },
    mapa: 'https://www.google.com/maps?q=Tuxtla+Gutierrez,Chiapas,Mexico&output=embed',
    link: 'https://maps.app.goo.gl/2pcGG943xgzVTg6v8',
    lat: 16.74520249631762,
    lng: -93.10482933216417
  }
};

// Función para obtener el estado actual de una sucursal (Abierto/Cerrado)
function obtenerEstadoSucursal(sucursal) {
  const ahora = new Date();
  const dia = ahora.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

  if (dia === 0) return 'Cerrado hoy'; // Domingo

  let horarioDelDia = null;
  if (dia >= 1 && dia <= 5) {
    horarioDelDia = sucursal.horarios.lunesViernes;
  } else if (dia === 6) {
    horarioDelDia = sucursal.horarios.sabado;
  }

  if (!horarioDelDia) return 'Cerrado hoy';

  const [abreH, abreM] = horarioDelDia.abre.split(':').map(Number);
  const [cierraH, cierraM] = horarioDelDia.cierra.split(':').map(Number);
  const minutosActuales = ahora.getHours() * 60 + ahora.getMinutes();
  const minutosAbre = abreH * 60 + abreM;
  const minutosCierra = cierraH * 60 + cierraM;

  if (minutosActuales >= minutosAbre && minutosActuales < minutosCierra) {
    return 'Abierto ahora';
  }
  return 'Cerrado por el momento';
}