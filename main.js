
let acertijo = parseInt(prompt("Acertijo: Si tengo 100 fósforos encendidos ¿Cuántos encendí?"));
let respuesta = 2;
while (acertijo != respuesta) {
    alert (`La respuesta ${acertijo} no es correcta. ¡Intentalo otra vez!`)
    acertijo = parseInt (prompt("Acertijo: Si tengo 100 fósforos encendidos ¿Cuántos encendí?"));
}
alert ("¡Bien hecho! EncendiDOS"); 