
var propDescripcion={
    pregunta: document.getElementsByClassName('titulo'),
    respuesta: document.querySelectorAll('.preguntas > p'),
    contFlecha: 0,
    flecha: null,
    estado: 0,
    contenidoActivo: null
}

var metDescripcion={

    
    inicio: function(){
        for(var i=0; i<propDescripcion.pregunta.length; i++){
            propDescripcion.pregunta[i].addEventListener('click', metDescripcion.abrir_cerrar);
        }
        
    },

     abrir_cerrar: function(){

         if(propDescripcion.estado==0){
             this.className='titulo activo';
             propDescripcion.contenidoActivo=this.getAttribute('href');
             document.querySelector(propDescripcion.contenidoActivo).className='descripcion descripcion_activo';
             propDescripcion.estado=1;
         }
         else{
            this.className='titulo';
            propDescripcion.contenidoActivo=this.getAttribute('href');
            document.querySelector(propDescripcion.contenidoActivo).className='desactivado';
            propDescripcion.estado=0;
         }
        
    },
        
}

metDescripcion.inicio();



