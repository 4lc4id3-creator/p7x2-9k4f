const CODIGO_SECRETO = "1003";

const pantallaPin = document.getElementById("pantalla-pin");
const pin = document.getElementById("pin");
const app = document.getElementById("app");

pantallaPin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (pin.value === CODIGO_SECRETO) {
        // Código correcto: fuera cortina, entra la app
        pantallaPin.classList.add("oculto");
        app.classList.remove("oculto");
    } else {
        // Código incorrecto: limpiar y avisar
        pin.value = "";
        pin.placeholder = "Ese no es po 😅";
        pin.focus();
    }
});