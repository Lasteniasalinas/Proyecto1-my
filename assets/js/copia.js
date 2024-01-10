var contenidomodal = document.getElementsByClassName("modal")   
const btns = document.querySelectorAll('#buscar');


btns.forEach((btn) => {
  btn.addEventListener('click', e => {
    let nombreDigimon = document.getElementById("nombreDigimon").value;
      arrayDigimones.forEach(datos =>{
        if (nombreDigimon== datos.nombre){
                 
            $("#tituloPokemon > h5").text("DIGIMON : "+ datos.nombre.toUpperCase());    
            $("#modalImagen > img").attr("src",datos.imagen); 
            $("#detallePoke > h4").text("NIVEL : " + datos.level.toUpperCase());    
          
           
            console.log(datos.level);
            console.log("encontrado");
            $('#ejModal').modal({ show:true });
         
        }

    })

  });
});