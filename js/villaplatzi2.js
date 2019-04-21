/*/**** Bloquear la rotación del dispostitivo ****
$(window).bind( 'orientationchange resize', function( event )
{
	if ( event.orientation )
	{
		if ( event.orientation == 'landscape' )
		{
			if (window.rotation == 90 )
			{
				rotate( this, -90 );
			}
			else
			{
				rotate (this, 90 );
			}
		}
	}
});

function rotate( el, degs )
{
	iedegs = degs / 90;
	if (iedegs < 0) iedegs += 4;
	transform = 'rotate(' + degs + 'deg)';
	iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + iedegs + ')';
	styles = {
		transform: transform,
		'-webkit-transform': transform,
		'-moz-transform': transform,
		'-o-transform': transform,
		filter: iefilter,
		'-ms-filter': iefilter
	};
	$( el ).css( styles );
}
*/
/* Desafío 2: cargar vacas y cerdos de manera aleatoria una sola vez y mover el pollo con las flechas del teclado. */

// Variables del contexto
var vp		=	document.getElementById( "dibujito" );
var papel	=	vp.getContext( "2d" );
var resultado = document.getElementById("resultado");
var condicion = document.getElementById("condicion");
var puntos = document.getElementById("puntos");
var punto = 0;

var xx = 0;
var yy = 0;

// Dimensiones del contexto
var ancho	=	vp.width;
var alto 	=	vp.height;
console.log( "Ancho del Canvas: " + ancho, " - Alto del Canvas: " + alto );

/***** Objetos de cada unos de los animales. ******/
// El fondo
var fondo = {
	url: "img/tile.png",
	cargaOK: false,
	absisa: -180,
	ordenada: -100
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener( "load", cargarFondo );

// La Vaca
var vaca = {
	url: "img/vaca.png",
	cargaOK: false
};
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener( "load", cargarVaca );

// El Cerdo
var cerdo = {
	url: "img/cerdo.png",
	cargaOK: false
};
cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener( "load", cargarCerdo );

// El Pollo
var pollo = {
	url: "img/pollo.png",
	cargaOK: false,
	absisa: 0,
	ordenada: 0
};
pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener( "load", cargarPollo );
var anchoPollo;
var altoPollo;


// Cantidades aleatoras de Vacas y Cerdos
cantidadVacas = aleatorio( 5, 10 );
cantidadCerdos = aleatorio( 5, 10 );
console.log( "Vacas: " + cantidadVacas, "Cerdos: " + cantidadCerdos );

// Límites para mover el pollo
maxX = ancho - pollo.objeto.width;
maxY = alto - pollo.objeto.height;

/***** Coordenadas cartográficas para ubicar a cada una de las vacas y cerdos. ***/
var coordenadasVacasX = [cantidadVacas];
var coordenadasVacasY = [cantidadVacas];
var coordenadasCerdosX = [cantidadCerdos];
var coordenadasCerdosY = [cantidadCerdos];
function coordenador()
{
	console.log(" ");
	console.log("Coordenadas de Vacas:")
	for( v = 0; v < cantidadVacas; v++ )
	{
		if( coordenadasVacasX[v] != anchoPollo || coordenadasVacasY != altoPollo )
		{
			coordenadasVacasX[v] = Math.floor( ( aleatorio( 0, maxX ) ) / 10 ) * 10 ;
			coordenadasVacasY[v] =  Math.floor( ( aleatorio( 0, maxY ) ) / 10 ) * 10 ;
			console.log( "Vaca N°: " + ( v + 1)  + " - X = " + coordenadasVacasX[v] + " ; Y = " + coordenadasVacasY[v] );
		}
	}
	console.log(" ");
	console.log("Coordenadas de Cerdos:");
	
	for( c = 0; c < cantidadCerdos; c++ )
	{
		if( coordenadasCerdosX[c] != anchoPollo || coordenadasCerdosY != altoPollo )
		{
			coordenadasCerdosX[c] = Math.floor( (  aleatorio( 0, maxX ) ) / 10 ) * 10 ;
			coordenadasCerdosY[c] = Math.floor( (  aleatorio( 0, maxY ) ) / 10 ) * 10 ;
			console.log( "Cerdo N°: " + ( c + 1 ) + " - X = " + coordenadasCerdosX[c] + " ; Y = " + coordenadasCerdosY[c] );
		}
	}
}
coordenador();


/****** Escuchadores de eventos para mover el pollo y coordenadas para el pollo ******/
var teclas = {
	ARRIBA		: 38,
	ABAJO		: 40,
	IZQUIERDA	: 37,
	DERECHA		: 39
};

var brujula = {
	NORTE	: "norte",
	NORESTE	: "noreste",
	ESTE 	: "este",
	SURESTE	: "sureste",
	SUR 	: "sur",
	SUROESTE: "suroeste",
	OESTE	: "oeste",
	NOROESTE: "noroeste"
}

// Escuchador de eventos de las teclas.
document.addEventListener( "keydown", moverPollo );

// Escuchador de eventos del joystick
var boton = document.getElementsByClassName('tecla');

for( var i = 0; i < boton.length; i++ )
{
	boton[i].addEventListener( "click", moverPollito );
}


/************ Funciones. Todas ************/
// Función dibujar en general todo
function dibujar()
{
	if( fondo.cargaOK )
	{
		papel.drawImage( fondo.objeto, fondo.absisa , fondo.ordenada );
	}
	if( vaca.cargaOK )
	{
		for( var v = 0; v < cantidadVacas; v++ )
		{
			papel.drawImage( vaca.objeto, coordenadasVacasX[v], coordenadasVacasY[v] );
		}
	}
	if( cerdo.cargaOK )
	{
		for( var c = 0; c < cantidadCerdos; c++ )
		{
			papel.drawImage( cerdo.objeto, coordenadasCerdosX[c], coordenadasCerdosY[c] );
		}
	}
	if( pollo.cargaOK )
	{
		papel.drawImage( pollo.objeto, xx, yy );
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
	anchoPollo = pollo.objeto.width;
	altoPollo = pollo.objeto.height;
	dibujar();
}

// Números aleatorios
function aleatorio( min, maxi )
{
	var resultado;
	resultado = Math.floor( Math.random() * ( maxi - min + 1 ) ) + min;
	return resultado;
}

// Funciones para abrir y cerrar el modal
function mostrador()
{
	$("#modal").show("normal");
}
$("#condicion").on( "click", cerrador );
function cerrador()
{
	$("#modal").hide("normal");
}

// Función si uno pierde
function perdedor()
{
	condicion.innerHTML = "¡Perdiste! :-(";
	punto = punto - 1;
	puntos.innerHTML = "Puntos: " + punto;
	xx = 0;
	yy = 0;
	coordenador();
	dibujar();
	mostrador();
}

// Función para movel el pollo con los botones
function moverPollito( parametro )
{
	parametro.preventDefault();
	// Variables necesarias para los movimientos
	var movimiento = 10;
	
	// Opciones de movimiento de los botones
	switch( parametro.target.id )
	{
		case brujula.NORTE:
			if( pollo.cargaOK && yy > 0 )
			{
				yy = yy - movimiento;
				dibujar();
			}
		break;

		case brujula.SUR:
		if( pollo.cargaOK && yy < alto - altoPollo )
			{
				yy = yy + movimiento;
				dibujar();
			}
		break;

		case brujula.ESTE:
		if( pollo.cargaOK && xx < ancho - anchoPollo )
			{
				xx = xx + movimiento;
				dibujar();
			}
		break;

		case brujula.OESTE:
		if( pollo.cargaOK && xx > 0)
			{
				xx = xx - movimiento;
				dibujar();
			}
		break;

		// Inclinados
		case brujula.NORESTE:
		if( pollo.cargaOK && yy > 0 )
			{
				yy = yy - movimiento;
				dibujar();
			}
		if( pollo.cargaOK && xx < ancho - anchoPollo )
			{
				xx = xx + movimiento;
				dibujar();
			}
		break;

		case brujula.SURESTE:
		if( pollo.cargaOK && yy < alto - altoPollo )
			{
				yy = yy + movimiento;
				dibujar();
			}
		if( pollo.cargaOK && xx < ancho - anchoPollo )
			{
				xx = xx + movimiento;
				dibujar();
			}
		break;

		case brujula.NOROESTE:
		if( pollo.cargaOK && yy > 0 )
			{
				yy = yy - movimiento;
				dibujar();
			}
		if( pollo.cargaOK && xx > 0)
			{
				xx = xx - movimiento;
				dibujar();
			}
		break;

		case brujula.SUROESTE:
		if( pollo.cargaOK && yy < alto - altoPollo )
			{
				yy = yy + movimiento;
				dibujar();
			}
		if( pollo.cargaOK && xx > 0)
			{
				xx = xx - movimiento;
				dibujar();
			}
		break;
	}
	console.log( "Coordenadas Actuales: " + xx, yy );
	controlDePartida();
}

// Función para mover el pollo por el campo
function moverPollo( parametro )
{
	// Variables necesarias para los movimientos
	var movimiento = 10;
	
	// Opciones de movimiento de las teclas
	switch( parametro.keyCode )
	{
		case teclas.ARRIBA:
			if( pollo.cargaOK && yy > 0 )
			{
				yy = yy - movimiento;
				dibujar();
			}
		break;

		case teclas.IZQUIERDA:
			if( pollo.cargaOK && xx > 0)
			{
				xx = xx - movimiento;
				dibujar();
			}
		break;

		case teclas.ABAJO:
			if( pollo.cargaOK && yy < alto - altoPollo )
			{
				yy = yy + movimiento;
				dibujar();
			}
		break;

		case teclas.DERECHA:
			if( pollo.cargaOK && xx < ancho - anchoPollo )
			{
				xx = xx + movimiento;
				dibujar();
			}
		break;
	}

	console.log( "Coordenadas Actuales: " + xx, yy );

	controlDePartida();
}

function controlDePartida()
{
	var movimiento = 10;
	// Control de final de partida y jugada Exitosa.
	if( xx == ( ancho - anchoPollo ) && yy == ( alto - altoPollo ) )
	{
		condicion.innerHTML = "¡Ganaste!" + "<br />" + ":D";
		punto = punto + 1;
		puntos.innerHTML = "Puntos: " + punto;
		xx = 0;
		yy = 0;
		coordenador();
		dibujar();
		mostrador();
	}

	// Control si perdiste contra vacas
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] && yy == coordenadasVacasY[i] )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] - 10 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 10 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 20 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 30 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 40 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 50 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 60 )
		{
			perdedor();
		}
	}
	for ( var i = 0; i < cantidadVacas; i++ )
	{
		if( xx == coordenadasVacasX[i] - 20 && yy == coordenadasVacasY[i] + 70 )
		{
			perdedor();
		}
	}

	// Control si perdiste contra cerdos
	for ( var i = 0; i < cantidadCerdos; i++ )
	{
		if( xx == coordenadasCerdosX[i] && yy == coordenadasCerdosY[i] )
		{
			perdedor();
		}
	}
}