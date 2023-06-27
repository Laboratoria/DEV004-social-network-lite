import { createPost, getPosts, deletePost, editPost } from "../services.js";
import { app, auth, agrearcolettion } from "../router/firebase.js";

export const wall = () => {
  const Container = document.createElement("section");
  Container.innerHTML = `<textarea id="texto"></textarea>
<button id= 'publicar' >Publicar</button>
`;

  const listaDePost = document.createElement("article");
  // funcion recargar pagina y que figuren cambios dibujar post
  // button id publicar añadirle addEventListener
  const btnPublicar = Container.querySelector("#publicar");
  btnPublicar.addEventListener("click", () => {
    // se captura el valor de text area (id texto)
    // 
    const texto = document.querySelector("#texto").value;
    console.log(texto);
    
    agrearcolettion (texto)
    // se hace con console.log (e)
    // se Traer email del localstorage
    const email = JSON.parse(localStorage.getItem("user"));
    // hacer console.log (email)
    // console.log(email['email'], email.email, '***');
    if (email && email.email) {
      console.log("Email encontrado:", email.email);
    } else {
      console.log("No se encontró ningún email en el localStorage");
    }
    // llmar a createPost y enviarle e y email
    createPost(texto, email.email);
    // se invoca a la funcion
    dibujarPosts();
  });

  //    TRAER POST

  const dibujarPosts = () => {
    listaDePost.innerHTML = '';

    const arrayDePost = getPosts();
    //console.log(arrayDePost)
    // recorrer arraDePots con for, forEach, map
    /********** SOLUCION FOREACH *********/
    arrayDePost.forEach((post) => {
      // dentro del bucle crear una etique p
      const p = document.createElement("p");
      const btnDelete = document.createElement("button");
      btnDelete.textContent = "Eliminar";
      btnDelete.value = post.id;
      //console.log(post);
      // se añadie a etiqueta p texto del post
      p.textContent = post.content;

      btnDelete.addEventListener("click", (event) => {
        // console.log(event.target.value);
        // aqui estoy Obteniendo el ID del post a eliminar desde el atributo 'data-post-id'
        const postId = event.target.value;

        try {
          // aqui se Llama a la función deletePost para eliminar el post
          deletePost(postId);
          // aquie el un mensaje de paso exitoso
          console.log("El post fue eliminado exitosamente.");
          //se invoca a la funcion
          dibujarPosts();
        } catch (error) {
          // aquie que muestre el mensaje de error en la consola
          console.error(error.message);
        }
      });
      // Aqui creo el elemento de boton
      const btnEdit = document.createElement("button");
      //aqui coloco el texto o nombre del boton con textCxotent
      btnEdit.textContent = "Editar";
      //aqui se establece el valor del botón y el valor  se obtiene de la variable post.id
      btnEdit.value = post.id;
      //aqui listaDePost.append utilizo para insertar un párrafo y un botón al final del elemento
      listaDePost.append(p, btnEdit, btnDelete);

      btnEdit.addEventListener("click", (event) => {
        const postId = event.target.value;
        const newContent = prompt("Ingrese el nuevo contenido:");

        try {
          editPost(postId, newContent);
          console.log("El post fue editado exitosamente.");
          p.textContent = newContent;
        } catch (error) {
          console.error(error.message);
        }
      });
    });

    Container.appendChild(listaDePost);
  };


  dibujarPosts();

  return Container;
};

