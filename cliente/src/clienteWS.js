function ClienteWS(nick){
	this.socket=undefined;
	this.nick=nick;
	this.idp=undefined;
	this.ini=function(){
		this.socket=io.connect();
		this.lanzarSocketSrv();
	}

	this.crearPartida=function(nombrePartida){
		//this.nombrePartida=nombre;
		this.socket.emit("crearPartida", this.nick,nombrePartida);
   		console.log("Usuario "+this.nick+" crea partida "+nombrePartida);
	}

	this.obtenerPartidas=function(){
		//this.nombrePartida=nombre;
		this.socket.emit("obtenerPartidas");
   		
	}

	this.unirAPartida=function(idp,nick){
		//this.nombrePartida=nombre;
		this.socket.emit("unirAPartida", idp,nick);
   		
	}

	this.lanzarSocketSrv=function(){
		var cli=this;
		this.socket.on("connect", function(){   						
   			console.log("Usuario conectado al servidor de WebSockets");
		});
		this.socket.on("partidaCreada",function(partida){
			console.log("partida creada: ",partida);
			cli.idp=partida.idp;
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);
		});

		this.socket.on("listaPartidas",function(partidas){
			mostrarListaPartidas(partidas);
		});

		this.socket.on("unido",function(partida){
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);

		});
		this.socket.on('nuevoJugador',function(jugadores){
				mostrarListaJugadores(jugadores);
		});
	}



}