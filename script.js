var botonEncriptar = document.querySelector(".btton-encriptar");
var botonDesencriptar = document.querySelector(".btton-desencriptar");
var munieco = document.querySelector(".contenedor-dibujo");
var contenedor = document.querySelector(".cajatexto");
var resultado = document.querySelector(".textor");
var textono = document.querySelector(".parrafo");
var botonCopiar = document.querySelector(".copy");
var textocopy = document.querySelector("resultao");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar = copiartexto;

function encriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  var contenedor = recuperarTexto();
  resultado.textContent = desencriptarTexto(contenedor);
}

function recuperarTexto() {
  var contenedor = document.querySelector(".cajatexto");
  return contenedor.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  textono.classList.add("ocultar");
}

function recuperarTexto() {
  var contenedor = document.querySelector(".cajatexto");
  var texto = contenedor.value.trim();
  var soloLetras = /^[a-z\s]+$/;

  if (!soloLetras.test(texto)) {
    alert("Por favor, ingresa solo letras minúsculas.");
    return "";
  }

  return texto;
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    } else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    } else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    } else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    } else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == "ai") {
      textoFinal = textoFinal + "a";
    } else if (texto[i] == "enter") {
      textoFinal = textoFinal + "e";
    } else if (texto[i] == "imes") {
      textoFinal = textoFinal + "i";
    } else if (texto[i] == "ober") {
      textoFinal = textoFinal + "o";
    } else if (texto[i] == "ufat") {
      textoFinal = textoFinal + "u";
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

function copiartexto() {
  let textocopiar = document.getElementById("resultao");
  let copiaralportapapeles = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert("Copiado");
    } catch (error) {
      alert(error);
    }
  };
  copiaralportapapeles(textocopiar.textContent);
  textocopiar.value = "";
}
