document.getElementById("formulario").onsubmit=function(e){
       e.preventDefault();
       validar();
     };

document.getElementById('boton').addEventListener("click",validar);
function validar() {

var name = document.getElementById('name').value;
var lastname= document.getElementById('lastname').value;
var born= document.getElementById('born').value;
var id = document.getElementById('dni').value;
var celphone= document.getElementById('celphone').value;
var phone=document.getElementById("phone").value;
var pssw= document.getElementById('pssw').value;
var psswd= document.getElementById('pssw-two').value;
var coments=document.getElementById("coments").value;
var check= document.getElementById("terms").value


 var name_issue= document.getElementById("name_issue").classList.add("tooltip");
 var lastname_issue= document.getElementById("lastname_issue").classList.add("tooltip");
 var born_issue=document.getElementById('born_issue').classList.add("tooltip");
 var dni_issue = document.getElementById('dni_issue').classList.add("tooltip");
 var celphone_issue = 	document.getElementById("celphone_issue").classList.add("tooltip");
 var phone_issue = 	document.getElementById("phone_issue").classList.add("tooltip");
 var  pssw_issue= 	document.getElementById("pssw_issue").classList.add("tooltip");
 var  psswd_issue= document.getElementById("psswd_issue").classList.add("tooltip");
 var coments_issue=document.getElementById("coments_issue").classList.add("tooltip");
 var check_issue=document.getElementById("check_issue").classList.add("tooltip");

 if(name != ""){
 		if(!name.match(/[A-Z]{1,}[a-z]+/)){
 			mostrarTooltip('name_issue');
 			mostrar("name_issue","Se Permite solo letras, Primera letra en Mayúscula");
    }
     }else{
 		mostrarTooltip('name_issue');
 	 	mostrar("name_issue","No debe haber recuadros en blanco*");
  }

   if(lastname  != ""){
       if(!lastname.match(/[A-Z]{1,}[a-z]+/)){
         mostrarTooltip('lastname_issue');
         mostrar("lastname_issue","Se Permite solo letras, Primera letra en Mayúscula")
       }
       }else{
       mostrarTooltip('lastname_issue');
       mostrar("lastname_issue","No debe haber recuadros en blanco*");
     }

     if(born != ""){
       var f1 = Date.parse(1999, 01, 01); // te convierte la fecha en milisegundos.
       var f2= Date.parse(born);
         if(f2 >= f1){
           mostrarTooltip('born_issue');
           mostrar("born_issue","Debe ser mayor de Edad.")
         }
         }else{
         mostrarTooltip('born_issue');
         mostrar("born_issue","No debe haber recuadros en blanco*");
       }

       if(id != ""){
           if(!id.match(/^[0-9]{8}/)){
             mostrarTooltip('dni_issue');
             mostrar("dni_issue","Debe contener 8 digitos")
           }
           }else{
           mostrarTooltip('dni_issue');
           mostrar("dni_issue","No debe haber recuadros en blanco*");
         }
        if(celphone != ""){
          if(!celphone.match( /^[9]{1}([\d]{8})/)){
            mostrarTooltip('celphone_issue');
            mostrar("celphone_issue","Debe contener 9 digitos y comenzar con 9")
             }
        }else{
            mostrarTooltip('celphone_issue');
            mostrar("celphone_issue","No debe haber recuadros en blanco*");
           }
        if(phone != ""){
          if(!phone.match(/[0-9]{7}/)){
            mostrarTooltip("phone_issue");
            mostrar("phone_issue","Debe contener 7 digitos")
            }
          }else{
            mostrarTooltip('phone_issue');
            mostrar("phone_issue","No debe haber recuadros en blanco*");
          }
             if(pssw != ""){
                 if(pssw.length < 6 || pssw.length> 19){
             mostrarTooltip('pssw_issue');
             mostrar('pssw_issue'," La contraseña debe tener entre 6 y 18 caracteres");
             }
           }else{
            mostrarTooltip('pssw_issue');
            mostrar("pssw_issue","No debe haber recuadros en blanco*");
            }

            if(psswd != ""){
                if(psswd!=pssw){
            mostrarTooltip('psswd_issue');
            mostrar('psswd_issue'," La contraseña no coincide");
            }
          }else{
           mostrarTooltip('psswd_issue');
           mostrar("psswd_issue","No debe haber recuadros en blanco*");
         }
         if(coments!=""){
             if(coments.length<=1 || coments.length>=81){
         mostrarTooltip('coments_issue');
         mostrar('coments_issue',"Debe tener un maximo de 80 Letras.");
         }
         }else{
          mostrarTooltip('coments_issue');
          mostrar("coments_issue","No debe haber recuadros en blanco*");
        }
        if(check==""){
        mostrarTooltip('check_issue');
        mostrar('check_issue',"Debe marcar el recuadro.");
        }
         };

function mostrarTooltip(e){
	document.getElementById(e).classList.remove("tooltip");
	document.getElementById(e).classList.add("tooltiptext");
}
function mostrar(element,message) {
  var x = document.getElementById(element);
  x.innerHTML = "";
  x.innerHTML = message;
};
