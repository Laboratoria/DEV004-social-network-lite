// Este es el punto de entrada de tu aplicacion
import { home } from './peaches/home';
import { register } from './peaches/register';
import { wall } from './peaches/wall';
// import { barrier } from './peaches/barrier';
import { addRoutes, onNavigate } from './router/index.js';
//import './router/firebase.js';

// aqui se Configura las rutas y sus correspondientes componentes.
addRoutes({
  '/': home,
  '/home': home,
  '/register': register,
  '/wall': wall,
  // '/barrier': barrier,
});
// aqui es  Cuando se carga la ventana, se llama a la función 'onNavigate' con la ruta actual.
window.onload = () => {
  onNavigate(window.location.pathname);
};
// aqui es Cuando se produce un cambio en el historial de navegación, se llama a la función 'onNavigate' con la ruta actual.
window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
