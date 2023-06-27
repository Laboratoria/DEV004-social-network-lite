import { onNavigate } from "../router/index.js";
//importar funcion register con el nombre createUser
import { register as createUser } from "../services.js";
import { auth } from "../router/firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js"

export const register = () => {
  const div = document.createElement("div");
  div.innerHTML = `<! Modal content--> <!--formulario de registro que aparece dentro de un modal (ventana emergente) tambien de boostrap .-->
  <div class="modal-content">--
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">Regístrate aquí</h4>
      <img class="center-block" src="img/logo_verde_-removebg-preview.png" alt="logo">
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <input type="email" class="form-control" id="emailRegistro" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="passwordRegistro" placeholder="Password">
        </div>
        <span id="fileSelector">
          <label class="btnProfile btn" for="upload-profile">
            <input id="upload-profile" type="file" accept="image/x-png, image/gif, image/jpeg">
            <i class="fa fa-upload" aria-hidden="true"></i>Sube tu foto de perfil
          </label>
        </span>
        <div>
          <textarea id="description" placeholder="Cuéntanos algo sobre ti..."></textarea>
        </div>
      </form>
    </div>
    <div class="modal-footer">
    <button type="reset" class="btn" id="botonEnviar">Enviar</button> 
         </div>
         <div id="mensaje"></div>
       </div>
     </div>
   </div>
</div>
</div>
</form>`;

  /* aqui Busco dentro del elemento 'div' un elemento con el identificador 
  único '#botonEnviar' y le asigno a la constante 'botonEnviar'.*/
  const botonEnviar = div.querySelector("#botonEnviar");
  /* Agrega un event listener al elemento 'botonEnviar' para el evento de "click". 
  Cuando se produce el evento, se ejecuta la función de callback de manera asíncrona.*/
  botonEnviar.addEventListener("click", async (e) => {
    // Evita que el evento de "click" recargue la página.
    e.preventDefault();

    console.log("click");
    // Obtiene el valor del elemento con el identificador único '#emailRegistro' y lo asigna a la constante 'email'.
    const email = document.querySelector("#emailRegistro").value;


    // Obtiene el valor del elemento con el identificador único '#passwordRegistro' y lo asigna a la constante 'password'.
    const password = document.querySelector("#passwordRegistro").value;
    console.log(password)
  
    //  ejecuto el bloque de código dentro del 'try'. 
    try {
      /* aqui Llamo a la función 'createUserWithEmailAndPassword' con los parámetros 'auth', 'email' y 'password',
       y espero a que la operación se complete de forma asíncrona. El resultado de la operación se guarda en la constante 'userCredentials'.*/
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      // Navego a la ruta "/" utilizando la función 'onNavigate' después de que se haya completado exitosamente el registro del usuario.
      onNavigate("/");
      // Navega a la ruta "/" utilizando la función 'onNavigate' después de que se haya completado exitosamente el registro del usuario.
    } catch (error) {
      console.log(error)

      // se Busca el elemento con el identificador único '#mensaje' y lo asigna a la constante 'mensajeDiv'.
      const mensajeDiv = document.querySelector("#mensaje");
      /* Actualiza el contenido de 'mensajeDiv' con el texto "No se pudo completar el registro. Por favor, inténtalo de nuevo."
       utilizando la propiedad 'textContent'.*/
      mensajeDiv.textContent =
        "No se pudo completar el registro. Por favor, inténtalo de nuevo.";
    }
  });


  return div;
};
