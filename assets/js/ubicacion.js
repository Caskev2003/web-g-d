// ===== LÓGICA DE UBICACIÓN Y DISTANCIAS =====
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

function calcularDistanciaKm(lat1, lng1, lat2, lng2) {
  const radioTierra = 6371;
  const dLat = gradosARadianes(lat2 - lat1);
  const dLng = gradosARadianes(lng2 - lng1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(gradosARadianes(lat1)) * Math.cos(gradosARadianes(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radioTierra * c;
}

function encontrarSucursalesMasCercanas(latUsuario, lngUsuario) {
  const sucursalesOrdenadas = [];
  for (const key in sucursalesData) {
    const sucursal = sucursalesData[key];
    const distancia = calcularDistanciaKm(latUsuario, lngUsuario, sucursal.lat, sucursal.lng);
    sucursalesOrdenadas.push({ key, distancia });
  }
  sucursalesOrdenadas.sort((a, b) => a.distancia - b.distancia);
  return sucursalesOrdenadas.slice(0, 2);
}

function obtenerSucursalesPorDefecto() {
  return ['tapachula', 'toscana'].map(key => ({ key, distancia: null }));
}

function setLocationMessage(texto, color = '#5e6f88') {
  const locationMessageEl = document.getElementById('locationMessage');
  if (locationMessageEl) {
    locationMessageEl.textContent = texto;
    locationMessageEl.style.color = color;
  }
}

function renderizarSucursalesCercanas(sucursalesCercanas, usandoUbicacionReal = false) {
  const nearestBranchesEl = document.getElementById('nearestBranches');
  if (!nearestBranchesEl) return;
  nearestBranchesEl.innerHTML = '';

  sucursalesCercanas.forEach(item => {
    const sucursal = sucursalesData[item.key];
    const estadoActual = obtenerEstadoSucursal(sucursal);
    const distanciaHTML = item.distancia === null
      ? '<span>📍 Distancia no disponible</span>'
      : `<span>📍 ${item.distancia.toFixed(1)} km</span>`;

    const card = document.createElement('div');
    card.className = 'nearest-card reveal';
    card.innerHTML = `
      <h4>${sucursal.nombre}</h4>
      <p>${sucursal.direccion}</p>
      <div class="nearest-meta">
        ${distanciaHTML}
        <span>🕒 ${sucursal.horarioTexto}</span>
        <span>${estadoActual === 'Abierto ahora' ? '✅ Abierto ahora' : '⏳ ' + estadoActual}</span>
      </div>
      <div class="nearest-actions">
        <button onclick="seleccionarSucursal('${item.key}')">Elegir sucursal</button>
        <a href="${sucursal.link}" target="_blank">Cómo llegar</a>
      </div>
    `;
    nearestBranchesEl.appendChild(card);
  });

  // Resaltar la primera sucursal si se usó ubicación real
  if (usandoUbicacionReal && sucursalesCercanas.length > 0) {
    const primera = sucursalesCercanas[0];
    const sucursal = sucursalesData[primera.key];
    const estadoActual = obtenerEstadoSucursal(sucursal);
    document.getElementById('highlightRightTitle').textContent = sucursal.nombre;
    document.getElementById('highlightRightText').textContent = `${sucursal.direccion} · ${sucursal.horarioTexto}`;
    const pill = document.getElementById('highlightStatusPill');
    pill.textContent = estadoActual;
    pill.className = estadoActual === 'Abierto ahora' ? 'status-pill status-open' : 'status-pill status-closed';
  }

  // Re-observar los nuevos elementos .reveal
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function manejarErrorGeolocalizacion(error) {
  let mensaje = 'No fue posible obtener la ubicación del dispositivo.';
  if (error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        mensaje = 'No se otorgó permiso para acceder a la ubicación.';
        break;
      case error.POSITION_UNAVAILABLE:
        mensaje = 'La ubicación no está disponible en este momento.';
        break;
      case error.TIMEOUT:
        mensaje = 'La solicitud de ubicación excedió el tiempo de espera.';
        break;
      default:
        mensaje = 'Ocurrió un problema al obtener la ubicación.';
        break;
    }
  }
  setLocationMessage(mensaje + ' Se muestran sucursales sugeridas.', '#b3261e');
  renderizarSucursalesCercanas(obtenerSucursalesPorDefecto(), false);
  const locationButton = document.getElementById('locationButton');
  if (locationButton) {
    locationButton.disabled = false;
    locationButton.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Reintentar ubicación';
  }
}

function solicitarUbicacion() {
  if (!navigator.geolocation) {
    setLocationMessage('El navegador no soporta geolocalización. Se muestran sucursales sugeridas.', '#b3261e');
    renderizarSucursalesCercanas(obtenerSucursalesPorDefecto(), false);
    return;
  }

  setLocationMessage('Obteniendo ubicación...', '#0f3d91');
  const locationButton = document.getElementById('locationButton');
  if (locationButton) {
    locationButton.disabled = true;
    locationButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Ubicando...';
  }

  navigator.geolocation.getCurrentPosition(
    (posicion) => {
      const latUsuario = posicion.coords.latitude;
      const lngUsuario = posicion.coords.longitude;
      const precision = posicion.coords.accuracy;
      const sucursalesCercanas = encontrarSucursalesMasCercanas(latUsuario, lngUsuario);
      renderizarSucursalesCercanas(sucursalesCercanas, true);

      if (precision && precision > 1000) {
        setLocationMessage(`Ubicación aproximada obtenida (precisión aprox. ${Math.round(precision)} m).`, '#d97706');
      } else if (precision) {
        setLocationMessage(`Ubicación obtenida correctamente (precisión aprox. ${Math.round(precision)} m).`, '#15803d');
      } else {
        setLocationMessage('Ubicación obtenida correctamente.', '#15803d');
      }

      if (locationButton) {
        locationButton.disabled = false;
        locationButton.innerHTML = '<i class="fa-solid fa-location-crosshairs"></i> Actualizar ubicación';
      }
    },
    (error) => manejarErrorGeolocalizacion(error),
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
  );
}

// Función para seleccionar una sucursal desde las opciones cercanas
function seleccionarSucursal(key) {
  const sucursal = sucursalesData[key];
  const estadoActual = obtenerEstadoSucursal(sucursal);
  document.getElementById('highlightRightTitle').textContent = sucursal.nombre;
  document.getElementById('highlightRightText').textContent = `${sucursal.direccion} · ${sucursal.horarioTexto}`;
  const pill = document.getElementById('highlightStatusPill');
  pill.textContent = estadoActual;
  pill.className = estadoActual === 'Abierto ahora' ? 'status-pill status-open' : 'status-pill status-closed';
  abrirSucursal(key);
}