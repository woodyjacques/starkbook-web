
const categoriasEstaticas = [
    { id: 1, name: 'Categoría 1', description: 'Descripción de la categoría 1' },
    { id: 2, name: 'Categoría 2', description: 'Descripción de la categoría 2' },
    { id: 3, name: 'Categoría 3', description: 'Descripción de la categoría 3' },
];

export async function obtenerCategorias() {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return categoriasEstaticas;
    } catch (error) {
        throw error;
    }
}

const librosEstaticos = [
    {
        id: 1,
        name: 'Libro 1',
        categories: 'Categoría 1',
        description: 'Este código mapea los datos recibidos para asegurarse de que cada libro tenga la estructura correcta, con archives como un arreglo de objetos. ',
        price: 10.99,
        linkBuys: 'https://facebook.com',
        linkRead: 'https://google.com',
        linkListen: 'https://instagram.com',
        archives: [
            { id: 1, filename: 'https://media.vandalsports.com/i/1200x900/11-2023/202311209427_1.jpg' },
            { id: 2, filename: 'https://i0.wp.com/popcon.com.ar/wp-content/uploads/2023/12/loki_god_of_stories_by_artsywayne_dgg277e-fullview-e1704830999616.jpg?fit=1279%2C814&ssl=1' }
        ]
    },
    {
        id: 2,
        name: 'Libro 2',
        categories: 'Categoría 2',
        description: 'Este código mapea los datos recibidos para asegurarse de que cada libro tenga la estructura correcta, con archives como un arreglo de objetos.',
        price: 15.99,
        linkBuys: 'https://facebook.com',
        linkRead: 'https://google.com',
        linkListen: 'https://instagram.com',
        archives: [
            { id: 3, filename: 'https://i.blogs.es/76e589/loki-poster/1366_2000.jpeg' },
            { id: 4, filename: 'https://www.mundodeportivo.com/alfabeta/hero/2023/01/Loki.1674154034.8247.jpg?width=768&aspect_ratio=16:9&format=nowebp' }
        ]
    },
];

export async function obtenerLibros() {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return librosEstaticos;
    } catch (error) {
        throw error;
    }
}
