function dibujarcanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";


    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarlinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(540 + (anchura*i), 640)
    }
       tablero.stroke();
       tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 555+(anchura*index),600)
    tablero.stroke() 
}

function escribirLetraIncorrecta(letra, errorleft){
    tablero.font = 'bold 70px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.fillText(letra,535+(70(10-errorleft)),710,70)
}
