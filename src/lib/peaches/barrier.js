
export const barrier = () => {
  // Crea el contenedor principal

    const Container = document.createElement('section')
    Container.innerHTML= `<textarea id="texto"></textarea>
    <button onclick="publicar()">Publicar</button>`

  //   function publicar() {
  //     var texto = document.getElementById("texto").value;
  //     alert("El texto que has introducido es: " + texto)
  // }
  return Container;
}
