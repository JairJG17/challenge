function encriptarTexto(texto) {
    let resultado = texto.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    return resultado;
}

function desencriptarTexto(texto) {
    let resultado = texto.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    return resultado;
}

document.getElementById("btnEncriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value;
    document.getElementById("mensajeEncriptado").value = encriptarTexto(texto);
});

document.getElementById("btnDesencriptar").addEventListener("click", function() {
    let texto = document.getElementById("inputTexto").value;
    document.getElementById("mensajeEncriptado").value = desencriptarTexto(texto);
});

document.getElementById("btnCopiar").addEventListener("click", function() {
    let texto = document.getElementById("mensajeEncriptado");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});