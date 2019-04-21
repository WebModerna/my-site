document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false);

// Objeto que tiene una colección de variables. Es un bloque de código, una sóla línea de código. Buenas prácticas: las variables que serán constantes son en MAYÚSCULAS.
var teclas =
{
	UP		: 38,
	DOWN	: 40,
	LEFT	: 37,
	RIGHT	: 39
};

var estado = false;
// Escuchador de eventos de las teclas.
document.addEventListener( "keydown", dibujarTeclado );


/*----------- Variables y contexto del canvas ------------*/
var cuadrito = document.getElementById( "dibujito" );
var papel = cuadrito.getContext( "2d" );

ancho	= parseInt( cuadrito.width );
alto	= parseInt( cuadrito.height );

var x = ancho / 2;
var y = alto / 2;
/*--------------------- Fin ------------------------------*/


/*-------- Variables y funciones del colorpicker -----------*/
var colorInput = document.getElementById( "colorSeleccionado" );
var	colorcito = colorInput.value;

// Escuchando para el cambio del color
document.addEventListener( "change", cambiarColor );

// Función que cambia el color.
function cambiarColor( ev )
{
	colorcito = colorInput.value;
	console.log( "El color es: " + colorcito );
}
/*--------------------- Fin -------------------------------*/


// Dibujando bordes
dibujarLineas( colorcito, 149, 149, 151, 151 );

// Buenas prácticas: las funciones se escriben la primer palabra con minúscula y la segunda con mayúscula.
function dibujarTeclado( parametro )
{
	// Variables necesarias para los movimientos
	var movimiento = 10;

	// Opciones de movimiento de las teclas
	switch( parametro.keyCode )
	{
		case teclas.UP:
			dibujarLineas( colorcito, x, y, x, y - movimiento );
			y = y - movimiento;
			if( y <= 0 )
			{
				y = 1;
			}
		break;

		case teclas.DOWN:
			dibujarLineas( colorcito, x, y, x, y + movimiento );
			y = y + movimiento;
			if( y >= alto )
			{
				y = alto - 1;
			}
		break;

		case teclas.LEFT:
			dibujarLineas( colorcito, x, y, x - movimiento, y );
			x = x - movimiento;
			if( x <= 0 )
			{
				x = 1;
			}
		break;

		case teclas.RIGHT:
			dibujarLineas( colorcito, x, y, x + movimiento, y );
			x = x + movimiento;
			if( x >= ancho )
			{
				x = ancho - 1;
			}
		break;
	}
}


/*------------------ eventos de toque ----------------------*/
cuadrito.addEventListener( "touchstart", toquePantalla );
// absisas = x;
// ordenadas = y;
function toquePantalla( parametro )
{
	estado = true;

	// Dibujando el punto
	dibujarLineas( colorcito, parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft - 1, parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop - 1, parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft + 1, parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop + 1 );

	// Monstrando las coordenadas
	console.log( parametro.targetTouches[0].clientX - parametro.targetTouches[0].target.offsetLeft, parametro.targetTouches[0].clientY - parametro.targetTouches[0].target.offsetTop );
}

cuadrito.addEventListener( "touchmove", arrastrarPantalla );
function arrastrarPantalla( parametro )
{
	if( estado )
	{
		dibujarLineas( colorcito, x , y , parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft, parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop);
		console.log(x , y);
	}
	x = parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft;
	y = parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop;
}

cuadrito.addEventListener( "touchend", soltarPantalla );
function soltarPantalla( parametro )
{
	estado = false;
	console.log(parametro);
	x = parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft;
	y = parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop;
	// Definiendo y asigando los valores a las variables
	console.log( x , y );
/*	x = parametro.changedTouches[0].clientX - parametro.changedTouches[0].target.offsetLeft;
	y = parametro.changedTouches[0].clientY - parametro.changedTouches[0].target.offsetTop;*/
}

/*----------------- Fin ------------------------------------*/


/*-------- Variables y Escuchador de eventos del mouse -----*/
cuadrito.addEventListener( "mousedown", ratonApretado );
cuadrito.addEventListener( "mousemove", ratonMovido );
cuadrito.addEventListener( "mouseup", ratonSoltado );
/*----------------- Fin ------------------------------------*/


// Función para dibujar con el ratón, apretado, arrastrado y soltado.
function ratonApretado( parametro )
{
	estado = true;
	dibujarLineas( colorcito, x - 1, parametro.offsetY - 1, parametro.offsetX + 1, parametro.offsetY + 1 );
	console.log( parametro.offsetX, parametro.offsetY );
}
function ratonMovido( parametro )
{
	if( estado )
	{
		dibujarLineas( colorcito, x, y, parametro.offsetX, parametro.offsetY );
	}
	x = parametro.offsetX;
	y = parametro.offsetY;
}
function ratonSoltado( parametro )
{
	estado = false;
	console.log( parametro.offsetX, parametro.offsetY );
}

// Función de dibujar las líneas
function dibujarLineas( color, xinicial, yinicial, xfinal, yfinal )
{
	papel.beginPath();
	papel.strokeStyle = color;
	papel.lineWidth = 3;
	papel.moveTo( xinicial, yinicial );
	papel.lineTo( xfinal, yfinal );
	papel.stroke();
	papel.closePath();
}

var cosa = document.getElementById("dibujito");
cosa.addEventListener("keyup", mostrarEvento);

function mostrarEvento(par)
{
	console.log(par);
}