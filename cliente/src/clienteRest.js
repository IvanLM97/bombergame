function ClienteRest(){

	this.agregarUsuario=function(nick){
		$.getJSON("/agregarUsuario/"+nick,function(data){    
			if(data.nick!=""){
    			console.log(data);
    			mostrarUsuario(data.nick);	
    			mostrarCrearPartida(data.nick);
    			mostrarUnirseAPartida();
			}
			else{
				mostrarAviso("El nick ya existe");
			}
		});
	}
	this.crearPartida=function(nombrePartida,nick){
		$.getJSON("/crearPartida/"+nombrePartida+"/"+nick,function(data){

    		console.log(data);
    		mostrarPartida(nombrePartida+nick);
		});
	}
	this.unirAPartida=function(nombrePartida,nick){
		$.getJSON("/unirAPartida/"+nombrePartida+"/"+nick,function(data){    
    		console.log(data);
    		//mostrarPartida(data);
		});
	}
	this.obtenerPartidas=function(){
		$.getJSON("/obtenerPartidas",function(data){    
    		console.log(data);
    		mostrarListaPartidas(data);
		});
	}
	this.obtenerJugadores=function(nombrePartida){
		$.getJSON("/obtenerJugadores/"+nombrePartida,function(data){
			console.log(data);
		})
	}
}