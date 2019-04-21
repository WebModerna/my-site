// Variable que toma al canvas
var d = document.getElementById( "dibujito" );
var ancho = d.width;

// Variable para el escuchador de eventos
var texto = document.getElementById( "texto_lineas" );
var boton = document.getElementById( "botoncito" );
boton.addEventListener( "click", dibujoPorClick );

// Método del Canvas. Toma el contexto de 2D. Un Método es una función asignada o que proviene de un objeto.
var lienzo = d.getContext("2d");


// Función que dibuja todo esto y pide 5 parámetros.
function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal )
{
	/*Proceso del dibujo*/
	// Comienzo del procedimiento
	lienzo.beginPath();
	// Color/Estilo de la línea
	lienzo.strokeStyle = color;
	// Comienza desde. Inicio.
	lienzo.moveTo( xinicial, yinicial );
	// Dibuja una línea con las coordenadas de destino.
	lienzo.lineTo( xfinal, yfinal );
	// Línea que dibuja
	lienzo.stroke();
	// Cerrando el camino
	lienzo.closePath();
}

// Función que dibuja por activación del botón
function dibujoPorClick()
{
	// variables necesarias 
	var colorcito = "orange";
	var xi, yi, xf, yf;
	var lineas = parseInt( texto.value );

	// Espacio entre líneas
	espacio = ancho / lineas;

	// Bucle para dibujar líneas Izquierda-abajo
	for( l = 0; l < lineas; l = l + 1 )
	{
		// Ecuaciones que representas las rectas
		yi = l * espacio;
		xf = espacio * ( l + 1 );

		// Dibujando las rectas
		dibujarLinea( colorcito, 0, yi, xf, ancho );
	}

	// Bucle para abajo-Derecha
	for ( l = 0; l < lineas; l = l + 1 )
	{
		xi = l * espacio;
		yf = ancho - (espacio * ( l + 1 ));

		// Dibujando las rectas
		dibujarLinea( colorcito, xi, ancho, ancho, yf );
	}

	// Bucle derecha-arriba
	for ( l = 0; l < lineas; l = l + 1 )
	{
		yi = ancho - l * espacio;
		xf = ancho - espacio * ( l + 1 );

		// Dibujando las rectas
		dibujarLinea( colorcito, ancho, yi, xf, 0 );	
	}

	// Bucle arriba-izquierda
	for ( l = 0; l < lineas; l = l + 1 )
	{
		xi = ancho - l * espacio;
		yf = espacio * ( l + 1 );

		// Dibujando las rectas
		dibujarLinea( colorcito, xi, 0, 0, yf );	
	}

	// Dibujando los bordes del canvas
	dibujarLinea( colorcito, 1, 1, 1, ancho-1 ); // Derecho
	dibujarLinea( colorcito, 1, ancho-1, ancho-1, ancho-1 ); // Abajo
	dibujarLinea( colorcito, 1, 1, ancho-1, 1 ); // Arriba
	dibujarLinea( colorcito, ancho-1, 1, ancho-1, ancho-1 ); // Izquierda
}