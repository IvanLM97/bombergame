describe("Bombergame", function() {
  var juego;
  

  beforeEach(function() {
    juego = new Juego();
  });

  it("comprobaciones iniciales", function() {
    
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
    
  });

  it("agregar usuarios", function() {
    
    juego.agregarUsuario('pepe');
    expect(Object.keys(juego.usuarios).length).toEqual(1);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
  });

  it("pepe crea partida una", function(){

    juego.agregarUsuario('pepe');
    

    juego.crearPartida('una','pepe');

    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].jugadores["pepe"]).not.toBe(undefined);

  });

  it("comprobar usuario juan se una a partida unapepe", function(){

    juego.agregarUsuario('pepe');
    juego.agregarUsuario('juan');

    juego.crearPartida('una','pepe');

    juego.unirAPartida("unapepe","juan");

    expect(Object.keys(juego.partidas["unapepe"].jugadores).length).toEqual(2);


  });

});
