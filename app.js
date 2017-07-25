
//Funcion del evento click del boton contar
function contarLetras(){

    //definir ABECEDARIO
    var ABECEDARIO = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z');

    //tomar texto de entrada 
    var strContar =document.getElementById("txtContainer").value;

    //validar que al menos escriban un caracter
    if(strContar.length==0){

        alert("Ingrese un texto.");
        return;
    }

    //pasar a minusculas el texto escrito
    strContar=strContar.toLowerCase();

    //referenciar el div de resultado
    var containerResultado =document.getElementById("divResultado");

    //limpiar el contenido del div de resultado
    containerResultado.innerHTML="";
    
    //crear elementos table y tr que mostraran el diccionario y el resultado
    var tabla = document.createElement("table");
    tabla.setAttribute("border","1");
    var tablaFilaMuestra = document.createElement("tr");
    var tablaFilaResultado = document.createElement("tr");

    //recorrer el diccionario
    ABECEDARIO.forEach(function(element) {
        
        //crear elemento tipo td y el texto del elemento del diccionario
        var tablaColumna = document.createElement("td");
        var nodeContainer = document.createTextNode(""+element);
        tablaColumna.appendChild(nodeContainer);
        tablaFilaMuestra.appendChild(tablaColumna);

        //recorrer texto de entrada
        var count =0;
        for(var i = 0; i < strContar.length; ++i){
            //validar si el caracter del texto de entrada en igual al caracter del diccionario
            if(strContar.charAt(i) == element)
                count++;
        }

          //crear elemento tipo td y el texto del elemento resultado
        var tablaColumnaResuñtado = document.createElement("td");
        var nodeContainerResultado = document.createTextNode(""+count);

        tablaColumnaResuñtado.appendChild(nodeContainerResultado);
        tablaFilaResultado.appendChild(tablaColumnaResuñtado);

        
    }, this);
    
    //agregar filas a la tabla y la tabla al div de resultado
    tabla.appendChild(tablaFilaMuestra);
    tabla.appendChild(tablaFilaResultado);
    containerResultado.appendChild(tabla);
 
}