export const GATEWAY_URL = import.meta.env.VITE_GATEWAY_URL || 'http://localhost:8762';

// Rutas específicas del gateway
export const API_ROUTES = {
  // Para peticiones de catálogo (productos)
  CATALOGUE: `${GATEWAY_URL}/catalogue`,

  // Para peticiones de órdenes
  ORDERS: `${GATEWAY_URL}/orders-service`,

  // Para comunicaciones (chat WebSocket)
  COMMUNICATIONS: `${GATEWAY_URL}/comms`,

  // Para gestión de usuarios y sesiones
  USERS: `${GATEWAY_URL}/user`
};

// Función helper para construir URLs completas
export const buildApiUrl = (service, endpoint) => {
  const baseUrl = API_ROUTES[service];
  if (!baseUrl) {
    throw new Error(`Unknown service: ${service}`);
  }

  // Asegurar que el endpoint comience con /
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  return `${baseUrl}${normalizedEndpoint}`;
};