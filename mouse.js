//document.addEventListener("mousedown", dibujarMouse);


var arte = document.getElementById("area_dibujo_mouse");
var diseno = arte.getContext("2d");
arte.addEventListener("mousedown", puntoInicial);
arte.addEventListener("mouseup", puntoFinal);
arte.addEventListener("mousemove", trazoLinea);

var colorPincel = "red";
var mouse = false;

function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal, diseno){
    diseno.beginPath();
    diseno.strokeStyle = colorPincel;
    diseno.lineWidth = 1;
    diseno.moveTo(xinicial, yinicial);
    diseno.lineTo(xfinal, yfinal);
    diseno.stroke();
    diseno.closePath();
}

function puntoInicial(){
    mouse = true;
}

function puntoFinal(){
    mouse = false;
}

function trazoLinea(evento){
    if(mouse == true){
        dibujarLinea("colorPincel", evento.layerX - 1, evento.layerY - 1, evento.layerX + 1, evento.layerY + 1, diseno);
        console.log("El punto Y es " + evento.layerY);
    }
}

