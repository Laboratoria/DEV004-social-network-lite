import { onNavigate } from '../router/index.js';

export const home = () => {
  // crea contenedor principal
  const article = document.createElement('article');
  
  // aqui estoy creando los elementos HTML necesarios
  const divRow1 = document.createElement('div');
  divRow1.classList.add('row');
  
  const divCol1 = document.createElement('div');
  divCol1.classList.add('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-8');
  
  const inputLogin = document.createElement('input');
  inputLogin.id = 'btnSingup';
  inputLogin.classList.add('btn', 'btn-init', 'btn2');
  inputLogin.type = 'submit';
  inputLogin.value = 'Iniciar sesión';
  
  const divRow2 = document.createElement('div');
  divRow2.classList.add('row');
  
  const divCol2 = document.createElement('div');
  divCol2.classList.add('col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-8');
  
  const inputRegistro = document.createElement('input');
  inputRegistro.id = 'btnSingup';
  inputRegistro.classList.add('btn', 'btn-init', 'btn2');
  inputRegistro.type = 'submit';
  inputRegistro.value = 'Registro';
  
  // añade evento a los botones
  inputLogin.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/login');
  });
  
  inputRegistro.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/register');
  });
  
  // suma elementos al contenedor madre
  divCol1.appendChild(inputLogin);
  divRow1.appendChild(divCol1);
  article.appendChild(divRow1);
  
  divCol2.appendChild(inputRegistro);
  divRow2.appendChild(divCol2);
  article.appendChild(divRow2);
  
  // retorna contenedor madre
  return article;
};
