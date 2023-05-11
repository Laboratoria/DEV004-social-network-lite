import { onNavigate } from '../router';

export const register = () => {
  // crea contenedor principal
  const section = document.createElement('section');

  // Obtiene el formulario existente del DOM
  const form = document.getElementById('form-autenticacion');

  // Agrega el botón de registro al formulario
  const btnRegister = document.createElement('input');
  btnRegister.setAttribute('type', 'button');
  btnRegister.setAttribute('value', 'Regístrate');
  btnRegister.classList.add('btn', 'btn-init', 'btn1');
  btnRegister.addEventListener('click', () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate('/barrier');
  });

  // Agrega el botón de inicio de sesión al formulario
  const btnLogin = form.querySelector('#btnSingup');
  btnLogin.addEventListener('click', () => {
    // procesa la acción del usuario cuando hace clic en el botón de inicio de sesión
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    console.log(`Iniciar sesión con email: ${email} y contraseña: ${password}`);
    // Aquí puede agregar su lógica para procesar el inicio de sesión del usuario
  });

  // Agrega los elementos al contenedor principal
  section.append(form, btnRegister);

  // Retorna contenedor principal
  return section;
};