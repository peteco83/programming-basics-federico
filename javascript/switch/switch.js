//

const nota = 10;
let mensaje = "";
switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    mensaje = "Suspenso"; // si el mensaje se repite se puede dejar solo el case y dejar el último
    break;
  case 5:
    mensaje = "Suficiente";
    break;
  case 6:
    mensaje = "Bien";
    break;
  case 7:
  case 8:
    mensaje = "Notable";
    break;
  case 9:
  case 10:
    mensaje = "Sobresaliente";
    break;
  default:
    mensaje = "No es válido";
}

console.log(mensaje);
