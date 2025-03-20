

let palabraLatin = document.querySelector("#palabraLatin")
let definicion = document.querySelector(".definicion")
const button = document.querySelector('.btn');
button.addEventListener('click', getPalabra);

async function getPalabra() {
    definicion.innerHTML = "";
    var palabraUsuario;
    element = document.querySelector('#buscarPalabra');


    if (element != null) {
        palabraUsuario = element.value;
    } else {
        palabraUsuario = null;
    }

    const url = "https://rae-api.com/api/words/" + palabraUsuario;

    const response = await fetch(url);
    const data = await response.json();
  
       if(data.ok==true){
            palabraLatin.innerHTML = data.data.word +"  "+data.data.meanings[0].origin.raw;
            

            data.data.meanings[0].senses.forEach(elemento => {
                definicion.innerHTML += elemento.raw;
                palabraLatin.classList.add("palabraLatinVerde");
                palabraLatin.classList.remove('palabraErrorRojo')

                
            });
        }else{
            palabraLatin.classList.remove("palabraLatinVerde");
            palabraLatin.classList.add('palabraErrorRojo')
            palabraLatin.innerHTML="PALABRA NO ENCONTRADA";
            definicion.innerHTML="";
        }

}

