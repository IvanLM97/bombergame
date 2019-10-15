function mostrarAgregarUsuario(){
	var cadena="<div id='mAU'>";
	cadena=cadena + "<h3>Usuario</h3>";
	cadena=cadena + '<input id="nombre" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';		
	cadena=cadena + '<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Iniciar Usuario</button>';	
	cadena=cadena + "</div>";
	
    $('#inicio').append(cadena);

	$('#inicioBtn').on('click',function(){
        var nombre=$('#nombre').val();
        if (nombre==""){
        	nombre="Loli";
    	}
    	rest.agregarUsuario(nombre);

    });

}

function mostrarCrearPartida(nick){
	var cadena="<div id='mCP'>";
	cadena=cadena + "<h3>Partida</h3>";
	cadena=cadena + '<input id="nombreP" type="text" class="form-control" name="nombreP" placeholder="Nombre partida">';		
	cadena=cadena + '<button type="button" id="iniciomCP" class="btn btn-primary btn-md">Crear Partida</button>';	
	cadena=cadena + "</div>";
	
    $('#inicio').append(cadena);

	$('#iniciomCP').on('click',function(){
        var nombreP=$('#nombreP').val();
        if (nombreP==""){
        	nombreP="una";
    	}
    	rest.crearPartida(nombreP,nick);

    });

}

function mostrarUnirseAPartida(nick){
	var cadena="<div id='mUAP'>";
	cadena=cadena + "<h3>Unirse</h3>";
	cadena=cadena + '<button type="button" id="iniciomUAP" class="btn btn-primary btn-md">Unirse A Partida</button>';	
	cadena=cadena + "</div>";
	
    $('#inicio').append(cadena);

	$('#iniciomUAP').on('click',function(){
        
        mostrarUnirse();
    	rest.obtenerPartidas();

    });

}

function mostrarAviso(msg){
	alert(msg);
	$('#nombre').val('Usa otro nombre')
}

function mostrarPartida(nombre){
	$('#mCP').remove();
	$('#mUAP').remove();
	var cadena="<h3>Estas en la partida "+nombre+"</h3>";
	$('#subtitulo').append(cadena);
}


function mostrarUsuario(nick){
	$('#mAU').remove();
	var cadena="<h3>Bienvenido "+nick+"</h3>";
	$('#subtitulo').append(cadena);
}

function mostrarUnirse(){
	$('#mUAP').remove();
	$('#mCP').remove();
}


function mostrarListaPartidas(data){
	var cadena='<h3>Selecciona la partida a la que quieres unirte</h3>';
	cadena = cadena + '<div class="container">';   
	cadena = cadena +  '<table class="table">';
	cadena = cadena +     '<thead>';
	cadena = cadena +       '<tr>';
	cadena = cadena +         '<th>Nombre</th>';
	cadena = cadena +         '<th>Número de Jugadores</th>';
	cadena = cadena +         '<th>Unirse a Partida</th>';
	cadena = cadena +       '</tr>';
	cadena = cadena +     '</thead>';
	cadena = cadena +     '<tbody>';


	for(var key in data){
		cadena = cadena +'<tr>';
		cadena = cadena + '<td>'+data[key].nombre+'</td>';
		cadena = cadena + '<td>'+Object.keys(data[key].jugadores).length+'</td>';
		cadena = cadena + '<td>'+'<button type="button" id="unirmeAPartidabTN" class="btn btn-primary btn-md">Unirse A Partida</button>'+'</td>';
		cadena = cadena+'</tr>';
	}

	cadena = cadena + '</tbody></table></div>';
	
    $('#inicio').append(cadena);

}
