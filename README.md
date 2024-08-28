<!DOCTYPE html>
<html lang="es-es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <title>Encriptador</title>
</head>
<body>
    <header>
        <img class="logo" src="/imagenes/Logo.png" alt="Logo de alura" >
    </header>
    <main>
        <section>
            <textarea id="inputTexto" class="text-area" cols="30" rows="10" placeholder="Ingrese el texto aquí"></textarea>
            <div>
                <h6 class="informacion">Solo letras minúsculas y sin acentos</h6>
            </div>
            <div class="botones">
                <button id="btnEncriptar" class="btn-encriptar">Encriptar</button>
                <button id="btnDesencriptar" class="btn-desencriptar">Desencriptar</button>
            </div>
        </section>
        <section>
            <textarea id="mensajeEncriptado" class="mensaje" name="mensaje" cols="20" rows="10" readonly></textarea>        
            <div>
                <button id="btnCopiar" class="btnCopiar">Copiar</button>
            </div>
        </section>
    </main>

    <!-- Aquí está el código JavaScript -->
    <script>
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
    </script>
</body>
</html>
