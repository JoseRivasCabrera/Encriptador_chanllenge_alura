
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const textArea = document.querySelector(".textoEntrada");
const mensaje = document.querySelector(".textoSalida");


  function btnencriptar(){
      const textoencriptado = encriptar(textArea.value)
      mensaje.value = textoencriptado;
      textArea.vaue = textArea.value = "";
  }

  function encriptar(stringEncriptada){
     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
     stringEncriptada = stringEncriptada.toLowerCase()
     
     for(let i = 0; i < matrizCodigo.length; i++){
         if(stringEncriptada.includes(matrizCodigo[i][0])){
         stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
      }
     return stringEncriptada;
 }

 function eliminatexto() {
    mensaje.value = mensaje.value = "";
}

