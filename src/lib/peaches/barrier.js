export const barrier = () => {
    // crea contenedor principal
    const h1 = document.createElement('h1');
    // modifica propiedades de los elemento
    h1.textContent = 'dentro de barrier';
    // retorna el elemento
    return h1;
  }