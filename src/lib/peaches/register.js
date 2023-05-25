import { onNavigate } from "../router";
//importar funcion register con el nombre createUser
import { register as createUser } from "../services.js";

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

  const botonEnviar = div.querySelector("#botonEnviar");
  botonEnviar.addEventListener("click", () => {
    // llama funcion navigate y pasa string con la ruta
    console.log("click");
    //Paso 1: Obtener valor del input de email
    const e = document.querySelector("#emailRegistro").value;
    //Para que usaste el document.querySelector? que hace el document.querySelector?
    //Porque le envias como argument al document.querySelector #emailRegistro ?
    //Para que usas el .value ?

    //Paso 2: Obtener valor del input de password
    const p = document.querySelector("#passwordRegistro").value;
    try {
      //try = intentar
      //paso 3: llamar function register
      const resultadRegister = createUser(e, p); //lanzar error
      //Paso 4. Si resultadRegister es true entonces redireccionar al login

      if (resultadRegister) {
        onNavigate("/");
      }
    } catch (e) {
      console.log(e)
      //atrapar
      //Paso 5 Si resultadRegister no es true entonces mostrar alert al usuario
      const mensajeDiv = document.querySelector("#mensaje");
      mensajeDiv.textContent =
        "No se pudo completar el registro. Por favor, inténtalo de nuevo.";
    }
  });

  //const inputRegistro = document.getElemen
  return div;
};
