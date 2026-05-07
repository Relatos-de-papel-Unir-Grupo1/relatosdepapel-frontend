// --- DATOS DE USUARIOS ---
// Usaremos estos datos para simular el inicio de sesión.
export const users = [
  { id: 1, name: 'Ana García', email: 'ana@example.com', password: 'password123' },
  { id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com', password: 'password123' },
  { id: 3, name: 'Beatriz Soler', email: 'beatriz@example.com', password: 'password123' },
];

// --- DATOS DE LIBROS ---
// Una lista extensa de libros para poblar la tienda.
const sampleAuthors = [
  'Elena Vargas', 'Javier Soto', 'Isabel Luna', 'Carlos Mendoza', 'Lucía Ríos',
  'Mateo Castillo', 'Sofía Navarro', 'Adrián Romero', 'Valentina Torres', 'Diego Guerrero'
];

const sampleTitleNouns = [
  'Sombra', 'Eco', 'Jardín', 'Laberinto', 'Río', 'Espejo', 'Viento', 'Secreto',
  'Corazón', 'Memoria', 'Silencio', 'Fuego', 'Noche', 'Estrella', 'Camino'
];

const sampleTitleAdjectives = [
  'Perdido', 'Olvidado', 'Roto', 'Eterno', 'Oculto', 'Antiguo', 'Dorado',
  'Azul', 'Silencioso', 'Último', 'Rojo', 'Lejano'
];

const generatedBooks = [];
for (let i = 1; i <= 100; i++) {
  const noun = sampleTitleNouns[Math.floor(Math.random() * sampleTitleNouns.length)];
  const adjective = sampleTitleAdjectives[Math.floor(Math.random() * sampleTitleAdjectives.length)];
  const author = sampleAuthors[Math.floor(Math.random() * sampleAuthors.length)];

  generatedBooks.push({
    id: i,
    title: `El ${noun} ${adjective}`,
    author: author,
    price: parseFloat((Math.random() * (25 - 10) + 10).toFixed(2)),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
    coverImage: `https://picsum.photos/id/${i + 100}/400/600`,
  });
}

export const books = [
  // Añadimos algunos libros específicos para tener datos consistentes para pruebas
  {
    id: 1,
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    price: 12.99,
    description: 'Un cuento poético y filosófico bajo la apariencia de un cuento para niños.',
    coverImage: 'https://picsum.photos/id/10/400/600',
  },
  {
    id: 2,
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    price: 18.50,
    description: 'La obra maestra del realismo mágico que narra la historia de la familia Buendía.',
    coverImage: 'https://picsum.photos/id/20/400/600',
  },
  {
    id: 3,
    title: 'Rayuela',
    author: 'Julio Cortázar',
    price: 16.50,
    description: 'Una novela que rompe con el orden tradicional de la lectura, ofreciendo múltiples finales.',
    coverImage: 'https://picsum.photos/id/30/400/600',
  },
  // Concatenamos los libros generados aleatoriamente, asegurando que los IDs no se repitan.
  ...generatedBooks.map(book => ({ ...book, id: book.id + 3 })).slice(0, 97)
];

// --- DATOS DE PEDIDOS ---
// Historial de pedidos para la vista de perfil de usuario.
export const orders = [
  {
    id: 101,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-0415-8432',
    date: '2026-04-15T10:30:00Z',
    total: 31.49,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
      { bookId: 2, quantity: 1, price: 18.50 },
    ]
  },
  {
    id: 102,
    userId: 2, // Carlos Ruiz
    orderNumber: '#RP-2026-0418-1129',
    date: '2026-04-18T14:00:00Z',
    total: 16.50,
    items: [
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 103,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-04-20-5541',
    date: '2026-04-20T18:45:00Z',
    total: 25.98,
    items: [
      { bookId: 1, quantity: 2, price: 12.99 },
    ]
  },
  {
    id: 104,
    userId: 3, // Beatriz Soler
    orderNumber: '#RP-2026-05-01-3092',
    date: '2026-05-01T09:12:00Z',
    total: 35.00,
    items: [
      { bookId: 2, quantity: 1, price: 18.50 },
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 105,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-02-7361',
    date: '2026-05-02T11:05:00Z',
    total: 48.49,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
      { bookId: 2, quantity: 1, price: 18.50 },
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 106,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-03-1984',
    date: '2026-05-03T11:05:00Z',
    total: 18.50,
    items: [
      { bookId: 2, quantity: 1, price: 18.50 },
    ]
  },
  {
    id: 107,
    userId: 2, // Carlos Ruiz
    orderNumber: '#RP-2026-05-04-2049',
    date: '2026-05-04T11:05:00Z',
    total: 29.49,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 108,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-05-8821',
    date: '2026-05-05T11:05:00Z',
    total: 12.99,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
    ]
  },
  {
    id: 109,
    userId: 3, // Beatriz Soler
    orderNumber: '#RP-2026-05-06-9012',
    date: '2026-05-06T11:05:00Z',
    total: 18.50,
    items: [
      { bookId: 2, quantity: 1, price: 18.50 },
    ]
  },
  {
    id: 110,
    userId: 2, // Carlos Ruiz
    orderNumber: '#RP-2026-05-07-7777',
    date: '2026-05-07T11:05:00Z',
    total: 31.49,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
      { bookId: 2, quantity: 1, price: 18.50 },
    ]
  },
  {
    id: 111,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-08-6543',
    date: '2026-05-08T11:05:00Z',
    total: 16.50,
    items: [
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 112,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-09-1234',
    date: '2026-05-09T11:05:00Z',
    total: 25.98,
    items: [
      { bookId: 1, quantity: 2, price: 12.99 },
    ]
  },
  {
    id: 113,
    userId: 3, // Beatriz Soler
    orderNumber: '#RP-2026-05-10-5678',
    date: '2026-05-10T11:05:00Z',
    total: 35.00,
    items: [
      { bookId: 2, quantity: 1, price: 18.50 },
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
  {
    id: 114,
    userId: 1, // Ana García
    orderNumber: '#RP-2026-05-11-9876',
    date: '2026-05-11T11:05:00Z',
    total: 48.49,
    items: [
      { bookId: 1, quantity: 1, price: 12.99 },
      { bookId: 2, quantity: 1, price: 18.50 },
      { bookId: 3, quantity: 1, price: 16.50 },
    ]
  },
];