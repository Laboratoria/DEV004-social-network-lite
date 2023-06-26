import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js"
import {auth} from '../router/firebase.js'
import { onNavigate } from "../router/index.js";
import { login } from "../services.js";

export const home = () => {
  const div = document.createElement("div");
  div.innerHTML = `<div class="container-fluid first-screen">
    
 <!-- PRIMERA COLUMNA -->
 <div class="row">
   <div class="hidden-xs hidden-sm col-md-5 col-lg-5 firstCol">
     <h4><strong>SportLink Nutrition, la red social para deportistas.</strong></h4>
     <p class="txtcol">Descubre, explora y comparte las mejores experiencias deportivas y de nutrición.</p><br>
     <h4><strong>¿Cómo funciona?</strong></h4>
     <div class="row">
       <div class="col-md-1 col-lg-1">
         <i class="fa fa-compass" aria-hidden="true"></i>
       </div>
       <div class="col-md-11 col-lg-11">
         <h4>Comparte tus experiencias</h4>
         <p class="txtcol"> Compartir tus fotos y videos de las actividades deportivas.</p>
       </div>
     </div>
     <div class="row">
       <div class="col-md-1 col-lg-1">
         <i class="fa fa-map-o" aria-hidden="true"></i>
       </div>
       <div class="col-md-11 col-lg-11">
         <h4>Explora nuevas rutas</h4>
         <p class="txtcol">crear eventos para practicar juntos, Encuentra nuevos lugares para practicar.</p>
       </div>
     </div>
     <div class="row">
       <div class="col-md-1 col-lg-1">
         <i class="fa fa-user-circle-o" aria-hidden="true"></i>
       </div>
       <div class="col-md-11 col-lg-11">
         <h4>Sigue a otros deportistas</h4>
         <p class="txtcol">Comparte consejos y recomendaciones sobre equipo y técnica, conecta con marcas y tiendas especializadas en tu deporte de preferencia.</p>
       </div>
     </div>
   </div><!-- fin primera columna -->
   <!-- SEGUNDA COLUMNA -->
   <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 secondCol">
     <div class="row">
       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 logoCol">
         <img src="img/logo_verde_-removebg-preview.png" alt="logo">
       </div>
     </div>
     <!--FORMULARIO DE AUTENTICACIÓN-->
     <form id="form-autenticacion">
       <!-- INPUT EMAIL -->
       <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           <input id="email" class="form-control" type="text" name="email" placeholder="Email" >
           </div>
       </div>
       <!-- INPUT PASSWORD -->
       <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           <input id="password" class="form-control" type="password" name="password" placeholder="Contraseña" >
         </div>
       </div>
       <!-- BOTON 2 -->  <!--estructura de diseño de tres filas utilizando Bootstrap--> 
       <div class="row">
       <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           <button id="btnSingin" class="btn btn-init btn2">Iniciar sesión</button>
       </div>
     </div>
     <div class="row">
       <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           <button id="btnSingup" class="btn btn-init btn2">registro</button>
       </div>
     </div>
       <!-- PREGUNTA -->
       <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           <p class="before-after-whiteLines text-center">¿No tienes cuenta?</p>
         </div>
       </div>
       <!-- BOTON 1 -->
       <div class="row">
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
           
           
             <!-- MODAL -->
             <div id="myModal" class="modal fade" role="dialog">
               <div class="modal-dialog">
   </div> <!--segunda columna -->

   <!-- buscador por deporte 
 <section>
   <div class="row">
     <div class="col-xs-12 col-md-6 col-md-offset-3">
       <select class="form-control" id="deporte-menu">
         <option value="Seleccion">¿Qué deporte estás buscando?</option>
         <option value="gimnasia">Gimnasia</option>
         <option value="Atletismo">Atletismo</option>
         <option value="Baloncesto">Baloncesto</option>
         <option value="Hockey">Hockey sobre hielo</option>
         <option value="Patinaje">Patinaje artístico</option>
         <option value="Remo">Remo</option>
         <option value="Rugby">Rugby 7</option>
         <option value="Judo">Judo</option>
         <option value="Karate">Karate</option>
         <option value="Crossfit">Crossfit</option>
         <option value="Boxeo">Boxeo</option>
         <option value="Fútbol">Fútbol</option>
         <option value="Waterpolo">Waterpolo</option>
         <option value="Tenis">Tenis</option>
         <option value="Ciclismo">Ciclismo en ruta</option>
        </select>
      </div> -->
    </div>
    
</div>`;
  const inputLogin = div.querySelector("#btnSingin");
  inputLogin.addEventListener("click", async (e) => {
    e.preventDefault();
    // llama funcion navigate y pasa string con la ruta
    //Paso 1: Obtener el valor del input de email
    const email = document.querySelector("#email").value;
    console.log (email)
    //const e = ....
    //Paso 2: Obtener el valor del input de password
    const password = document.querySelector("#password").value;
    console.log (password)

    try{
      console.log('entroelTry')
      
      //Paso 3: Llamar la funcion login
    const resultadoLogin = login(email, password);
    console.log(resultadoLogin)
    //Paso 4: Si resultadoLogin es true entonces redireccionar al muro
    console.log(resultadoLogin)
    if (resultadoLogin === true){
     // onNavigate('/wall');
     window.location.href = '/wall';
    }
    else {
      alert('verifica tus datos')
    }


     } catch(error) {
      console.log(error)
      alert('Ha ocurrido un error al crear el usuario. Verifica tus datos e intenta nuevamente.');
    }

    
     

    
    /*if (userCredentials && userCredentials.user) {
      onNavigate('/wall');
    }
    //const p == .....
    //Paso 3: Llamar la funcion login
    /*const resultadoLogin = login(email, password);
    console.log(resultadoLogin)
    //Paso 4: Si resultadoLogin es true entonces redireccionar al muro
    

    
    //Paso 5: Si resultadoLogin es false entonces mostrar alerta
    else {
      alert('verifica tus datos')
    }*/

   

  });
  //const inputRegistro = document.getElementById ("btnSingup")
  const inputRegistro = div.querySelector("#btnSingup");
  inputRegistro.addEventListener("click", () => {
    // llama funcion navigate y pasa string con la ruta
    onNavigate("/register");

  
  });

  
  return div;
};
