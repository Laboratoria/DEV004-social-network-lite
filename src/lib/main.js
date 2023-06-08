// Este es el punto de entrada de tu aplicacion
import { home } from './peaches/home';
import { register } from './peaches/register';
import { wall } from './peaches/wall';
// import { barrier } from './peaches/barrier';
import { addRoutes, onNavigate } from './router/index.js';
// import './router/firebase.js';

addRoutes({
  '/': home,
  '/home': home,
  '/register': register,
  '/wall' : wall,
  // '/barrier': barrier,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
