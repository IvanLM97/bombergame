var nombre;

function mostrarAgregarUsuario(){
	var cadena="<div id='mAU'>";
	cadena=cadena + "<h3>Usuario</h3>";
	cadena=cadena + '<input id="nombre" type="text" class="form-control" name="nombre" placeholder="Nombre usuario">';		
	cadena=cadena + '<button type="button" id="inicioBtn" class="btn btn-primary btn-md">Iniciar Usuario</button>';	
	cadena=cadena + "</div>";
	
    $('#inicio').append(cadena);

	$('#inicioBtn').on('click',function(){
        nombre=$('#nombre').val();
        if (nombre==""){
        	nombre="Loli";
    	}
    	rest.agregarUsuario(nombre);

    });

}


function mostrarPartida(nombre){
	$('#mLP').remove();
	$('#mCP').remove();
	$('#mUAP').remove();
	
	var cadena="<h3>Estas en la partida "+nombre.idp+"</h3>";
	$('#subtitulo').append(cadena);
}

function mostrarAviso(msg){
	alert(msg);
	$('#nombre').val('Usa otro nombre')
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
    	//rest.crearPartida(nombreP,nick);
		ws.crearPartida(nombreP);
    });

}


function mostrarUsuario(nick){
	$('#mAU').remove();
	ws = new ClienteWS(nick);
	ws.ini();
	var cadena="<h3>Bienvenido "+nick+"</h3>";
	$('#subtitulo').append(cadena);
}


function mostrarUnirseAPartida(nick){
	var cadena="<div id='mUAP'>";
	cadena=cadena + "<h3>Unirse</h3>";
	cadena=cadena + '<button type="button" id="iniciomUAP" class="btn btn-primary btn-md">Unirse A Partida</button>';	
	cadena=cadena + "</div>";
	
    $('#inicio').append(cadena);

	$('#iniciomUAP').on('click',function(){
        
        //mostrarUnirse();
    	//rest.obtenerPartidas();
    	ws.obtenerPartidas();
    });

}



function mostrarListaPartidas(data){
	$('#mCP').remove();
	$('#mUAP').remove();
	var numeroPartidas=Object.keys(data).length;
	var cadena="<div id='mLP'>";
	cadena=cadena+"<h3>Lista de partidas</h3>";
	//cadena=cadena+'<ul class="list-group">';
  	cadena=cadena+'<table class="table"><thead><tr>';
    cadena=cadena+'<th scope="col">Nombre</th><th scope="col">Número jugadores</th><th>Unirse</th>';
    cadena=cadena+'</tr></thead>';
    cadena=cadena+'<tbody>';


	for(var key in data){
		cadena = cadena +'<tr>';
		cadena = cadena + '<td>'+data[key].idp+'</td>';
		cadena = cadena + '<td>'+Object.keys(data[key].jugadores).length+'</td>';
		cadena = cadena + '<td>'+'<button type="button" id="unirmeAPartidabTN'+data[key].idp+'" class="btn btn-primary btn-md">Unirse A Partida</button>'+'</td>';
		cadena = cadena+'</tr>';
	}

	cadena = cadena + '</tbody></table></div>';
	
    $('#inicio').append(cadena);

    unirseAPartida(data);

}

function mostrarListaJugadores(jugadores){
	$('#mLJ').remove();
	var cadena="<div id='mLJ'>";
	cadena=cadena+"<h3>Lista de jugadores</h3>";
  	cadena=cadena+'<table class="table"><thead><tr>';
    cadena=cadena+'<th scope="col">Nick</th><th scope="col">Vidas</th><th>Listo</th>';
    cadena=cadena+'</tr></thead>';
    cadena=cadena+'<tbody>';
  	for(var key in jugadores){
  		cadena=cadena+'<tr>'
  		cadena=cadena+'<td>'+jugadores[key].nick+'</td>';
  		cadena=cadena+'<td>-</td>';
  		cadena=cadena+'<td>Preparado</td>';
  		cadena=cadena+'</tr>';
  	};

  	cadena = cadena + '<td>'+'<button type="button" id="salirPartidabTN" class="btn btn-primary btn-md">Salir</button>'+'</td>';

  	cadena=cadena+"</tbody></table></div>";
  	$('#inicio').append(cadena);

  	$('#salirPartidabTN').on('click',function(){
    	rest.mostrarUsuario(nombre);
    	rest.mostrarCrearPartida(nombre);
    	mostrarUnirseAPartida();
    });

}



function unirseAPartida(data){

    for(var key in data){

    		
    	$('#unirmeAPartidabTN'+data[key].idp).on('click',function(){
        
        	
        	//rest.unirAPartida(data[key].idp,nombre);
        	ws.unirAPartida(data[key].idp,nombre);

    	});
		


    }

}
