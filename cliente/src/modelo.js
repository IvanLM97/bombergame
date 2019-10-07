
function Juego(){
	this.partidas=[];
	this.usuarios=[];

	this.crearPartida=function(nombre,nick){
		var idp=nombre+nick; //id de la partida
		if (this.partidas[idp]==null){
			this.partidas[idp]=new Partida(nombre, idp);
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
	}
	this.agregarUsuario=function(nombre){
		if (this.usuarios[nombre]==null){	//Comprueba que el usuario no existe
			this.usuarios[nombre]= new Usuario(nombre);
		}
	}
	this.unirAPartida=function(idp, nick){
		if (this.partidas[idp]!=null){		//Comprueba que la partida existe
			this.partidas[idp].agregarJugador(this.usuarios[nick]);
		}
	}
	this.obtenerPartidas=function(){
		return this.partidas;
	}

	this.salir = function(nombrePartida, nick){
		this.partidas[nombrePartida].salir(nick);
		if (this.comprobarJugadores(nombrePartida)==0){
			this.eliminarPartida(nombrePartida);
		}
	}
	
	this.comprobarJugadores = function(nombrePartida){
		return Object.keys(this.partidas[nombrePartida].jugadores.length); 
	}

	this.eliminarPartida = function(nombrePartida){
		delete this.partidas[nombrePartida];
	}

}

function Partida(nombre,idp){
	this.nombre=nombre;
	this.idp=idp;		
	this.jugadores=[];
	this.fase=new Inicial();
	this.agregarJugador=function(usr){
		this.fase.agregarJugador(usr, this);
	}
	this.puedeAgregarJugador=function(usr){
		this.jugadores[usr.nick]=usr;
	}
	this.salir=function(nick){
		delete this.jugadores[nick];
	}
}

function Inicial(){
	this.nombre="inicial";
	this.agregarJugador=function(usr,partida){
		partida.puedeAgregarJugador(usr);
	}
}

function Jugando(){
	this.nombre="jugando";
	this.agregarJugador=function(usr,partida){
		console.log("El juego ya ha comenzado");
	}
}

function Final(){
	this.nombre="final";
}

function Usuario(nick){
	this.nick=nick;
	this.id=undefined;
}

