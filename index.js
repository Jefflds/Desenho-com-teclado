var canvas= document.getElementById ("meu-canva");
var papel = canvas.getContext("2d");

var teclas = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39
}

var x = 50;
var y = 50;
var movimento = 10;
document.addEventListener("keydown", DesenhaLinha);

function DesenhaLinha (event) {

    switch (event.keyCode){
        case teclas.Down:
            desenho ("black", x, y, x, y+movimento);
            y = y + movimento;
        break;
    } switch (event.keyCode){
        case teclas.Up:
            desenho ("black", x, y, x, y-movimento);
            y = y - movimento;
        break;
    } switch (event.keyCode){
        case teclas.Left:
            desenho ("black", x, y, x-movimento, y);
            x = x - movimento;
        break;
    } switch (event.keyCode){
        case teclas.Right:
            desenho ("black", x, y, x+movimento, y);
            x = x + movimento;
        break;
    }
} 

function desenho (cor, xIncial, yInicial, xFinal, yFinal) {
    papel.beginPath();
    papel.strokeStyle= cor;
    papel.lineWidht= 3;
    papel.moveTo(xIncial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}