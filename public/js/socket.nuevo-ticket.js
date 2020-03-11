//Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conexion establecida');
});

socket.on('disconnect', function() {
    console.log('conexion perdida');
});

//Escuchar estado actual
socket.on('estadoActual', function(resp) {
    // console.log(resp);
    label.text(resp.actual);
});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log(siguienteTicket);
        label.text(siguienteTicket);
    });
});