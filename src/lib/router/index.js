import { register } from "../peaches/register";

const ROUTES = {};

/*
 para crear un historial o registro de usuario, de los cambios entre paginas
 */

export const onNavigate = (pathname) => {
  
  
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  if(pathname === '/register'){
    rootSection.append(ROUTES[pathname]());
  }
  if (pathname === '/'){
    rootSection.append(ROUTES[pathname]());
  }
  if (pathname === '/wall'){
    rootSection.append(ROUTES[pathname]());
  }
  
};

export const addRoutes = (routes) => {
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, ROUTES);
};