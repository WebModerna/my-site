// variables del contexto
var vp = document.getElementById("dibujito");
var papel = vp.getContext("2d");
// Dimesiones del contexto
var ancho = vp.width;
var alto = vp.height;

// Objetos de las imágenes. Buena prácticas: las definiciones completas de un objeto se le coloca la primera con mayúscula.

// No se le puede agregar un objeto a un Json. Hay que agregarlo por fuera
var fondo = {
	url: "img/tile.png",
	cargaOK: false
	// objeto = new Image()
}

var vaca = {
	url: "img/vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "img/cerdo.png",
	cargaOK: false
};

var pollo = {
	url: "img/pollo.png",
	cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);


/************ Funciones. Todas ************/

// Función dibujar en general todo
function dibujar(fuente, absisa, ordenada)
{
	if( fondo.cargaOK )
	{
		papel.drawImage( fondo.objeto, 0 , 0 );
	}
	if( vaca.cargaOK )
	{
		maxX = ancho - vaca.objeto.width;
		maxY = alto - vaca.objeto.height;
		cantidad = aleatorio( 1, vaca.objeto.width / 4 );
		console.log( "Vacas = " + cantidad );
		for( var v = 0; v < cantidad; v++ )
		{
			x = aleatorio( 0, maxX );
			y = aleatorio( 0, maxY );
			papel.drawImage( vaca.objeto, x, y );
		}
	}
	if( cerdo.cargaOK )
	{
		maxX = ancho - cerdo.objeto.width;
		maxY = alto - cerdo.objeto.height;
		cantidad = aleatorio( 1, cerdo.objeto.width / 4 );
		console.log( "Cerdos = " + cantidad );
		for( var v = 0; v < cantidad; v++ )
		{
			x = aleatorio( 0, maxX );
			y = aleatorio( 0, maxY );
			papel.drawImage( cerdo.objeto, x, y );
		}
	}
	if( pollo.cargaOK )
	{
		maxX = ancho - pollo.objeto.width;
		maxY = alto - pollo.objeto.height;
		cantidad = aleatorio( 1, pollo.objeto.width / 4 );
		console.log( "Pollos = " + cantidad );
		for( var v = 0; v < cantidad; v++ )
		{
			x = aleatorio( 0, maxX );
			y = aleatorio( 0, maxY );
			papel.drawImage( pollo.objeto, x, y );
		}
	}
}


// Funciones de control de carga de imágenes
function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}
function cargarVaca()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar();
}
function cargarPollo()
{
	pollo.cargaOK = true;
	dibujar();
}

// Números aleatorios
function aleatorio( min, maxi )
{
	var resultado;
	resultado = Math.floor( Math.random() * ( maxi - min + 1) ) + min;
	return resultado;
}