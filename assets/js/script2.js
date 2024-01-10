var contenido = document.querySelector("#cuerpoTabla");
var arrayDigimones = [];
const modal = $('#detalleamplio');



function cargarDigimon() {
    let url = "https://digimon-api.vercel.app/api/digimon";
    fetch(url)
        .then(response => response.json())
        .then(data => {

            cargarTabla(data);
        })
}

function cargarTabla(digimones) {
  
    let filas= "";
    digimones.forEach((datos) => {
        let detalle = {
            nombre: datos.name,
            imagen: datos.img,
            level: datos.level
        }


        arrayDigimones.push(detalle);
        
        filas += ` 
        <tr class="text-center">
            <td id="nombreFila">${datos.name}</td>
            <td id="logoFila"><img  src="${datos.img}"></td>
            <td id="nivelFila">${datos.level}</td>
            <td id="detalleDigi"><button  class="btn btn-success" id="detalleDigi" data-nombre="${datos.name}"> ${datos.name}</button></td>
          
        </tr>
     
        `;
    });

    contenido.innerHTML = filas;
    actualizarEventosBotones();
}

//capturar evento botones de la tabla y cargar datos

function actualizarEventosBotones(){
  
    let botones = document.querySelectorAll("#cuerpoTabla button");
  
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            let nombreDigimon = boton.dataset.nombre;
            let digimon = arrayDigimones.find(digi => digi.nombre == nombreDigimon);
            mostrarmodal(digimon.nombre, digimon.imagen,digimon.level);
            
            
        // console.log(digimon);
        })
    })
}

 
function mostrarmodal(nombre,imagen,nivel){
    $("#tituloPokemon > h5").text("DIGIMON : "+ nombre.toUpperCase());    
    $("#modalImagen > img").attr("src",imagen); 
    $("#detallePoke > h4").text("NIVEL : " + nivel.toUpperCase());    
    console.log(modal);
    modal.show();
};

function cerrarModal(){
    modal.hide();
}




//capturar el buscar



    var contenidomodal = document.getElementsByClassName("#modal");   
    const btnBuscar = document.getElementById('buscar');


    btnBuscar.addEventListener('click', event => {
          let nombreDigimon = document.getElementById("nombreDigimon").value;

          let digimon = arrayDigimones.find(digi => digi.nombre.toUpperCase() == nombreDigimon.toUpperCase());

          if(digimon){
            $("#tituloPokemon > h5").text("DIGIMON : "+ digimon.nombre.toUpperCase());    
            $("#modalImagen > img").attr("src",digimon.imagen); 
            $("#detallePoke > h4").text("NIVEL : " + digimon.level.toUpperCase());          
             modal.show();
          }else {
                 alert("El DIGIMON : "+ nombreDigimon+" Ingresado no se encuentra")
          }                    
     });














function main() {
    cargarDigimon();
 }
main();