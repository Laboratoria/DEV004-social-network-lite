// Este es el punto de entrada de tu aplicacion
import { home } from './peaches/home';
import { register } from './peaches/register';
import { barrier } from './peaches/barrier'
import { addRoutes, onNavigate } from './router/index.js';

addRoutes({
  '/': home,
  '/register': register,
  '/barrier': barrier,
});

window.onload = () => {
  onNavigate(window.location.pathname);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname);
};
