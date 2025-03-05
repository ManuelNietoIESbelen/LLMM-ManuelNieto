let titulo = document.querySelector(".titulo");
let anyo = document.querySelector(".anyo");
let duracion = document.querySelector(".duracion");
const button = document.querySelector(".btn");
const tituloError = document.querySelector(".tituloError");
const tituloError2 = document.querySelector(".tituloError");
button.addEventListener("click", getMovie);



async function getMovie() {
    var tituloPeliculaUsuario;
    element = document.querySelector("#pelicula");
    if (element != null) {
        tituloPeliculaUsuario = element.value;
    } else {
        tituloPeliculaUsuario = null;
    }

    const url =
        "https://www.omdbapi.com/?t=" + tituloPeliculaUsuario + "&apikey=6bd47da3";

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") {
            titulo.innerHTML = data.Title;
            anyo.innerHTML = data.Year;
            duracion.innerHTML = data.Runtime;
            tituloError.innerHTML = "PELICULA ENCONTRADA";
            tituloError.classList.remove('tituloErrorRojo');
            tituloError.classList.add('tituloError');
        } else {
            titulo.innerHTML = "";
            anyo.innerHTML = "";
            duracion.innerHTML = "";
            tituloError.innerHTML = "ERROR AL ENCONTRAR LA PELICULA";
            tituloError.classList.remove('tituloError');
            tituloError.classList.add('tituloErrorRojo');

        }

    } catch (error) {
        console.log(error);
        titulo.innerHTML = "";
        anyo.innerHTML = "";
        duracion.innerHTML = "";
    }
}
