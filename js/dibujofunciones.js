// Englobando todo en una función
function todo()
{
	// Función de consolas
	function consolas(parametro)
	{
		var elId = document.getElementById("cosita");
		elId.innerHTML = parametro;
	}

	var d = document.getElementById( "funcioncitas" );
	var lienzo = d.getContext( "2d" );

	// función para dibujar texto
	function dibujarTexto(leyenda, X, Y, )
	{
		lienzo.font = "bold 12px verdana, sans-serif";
		lienzo.textAlign = "center";
		lienzo.textBaseline = "middle";
		lienzo.shadowColor = "rgba(212,23,178, 0.6)";
		lienzo.shadowOffsetX = 4;
		lienzo.shadowOffsetY = 4;
		lienzo.shadowBlur = 5;
		lienzo.fillText(leyenda, X, Y);
	}

	// Función que dibuja todo esto y pide 5 parámetros.
	function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal )
	{
		// Comienzo del procedimiento
		lienzo.beginPath();
		// Color/Estilo de la línea
		lienzo.strokeStyle = color;
		// Grosor de la línea
		lienzo.lineWidth = 2;
		// Comienza desde. Inicio.
		lienzo.moveTo( xinicial, yinicial );
		// Dibuja una línea con las coordenadas de destino.
		lienzo.lineTo( xfinal, yfinal );
		// Línea que dibuja
		lienzo.stroke();
		// Cerrando el camino
		lienzo.closePath();
	}

	// Ejes de coordenadas
	dibujarLinea("#444", 0, 200, 400, 200);
	dibujarLinea("#444", 200, 0, 200, 400);

	// Dibujar rayitas de marcas grandes
	dibujarLinea("#444", 300, 205, 300, 195);
	dibujarLinea("#444", 100, 205, 100, 195);
	dibujarLinea("#444", 195, 100, 205, 100);
	dibujarLinea("#444", 195, 300, 205, 300);

	// Rayitas chicas absisas
	for( absisa = 50; absisa < 400; absisa = absisa + 100 )
	{
		dibujarLinea("#444", absisa, 200, absisa, 195);
	}

	// Rayitas chicas ordenadas
	for( ordenada = 50; ordenada < 400; ordenada = ordenada + 100 )
	{
		dibujarLinea("#444", 200, ordenada, 205, ordenada);
	}

	// Dibujando las leyendas de las medidas. Fuerzo los número para poder ubicar mejor los textos
	for(reglaX = 50; reglaX < 400; reglaX = reglaX + 50)
	{
		// horizontal
		dibujarTexto((reglaX - 200)/100, reglaX, 215);

		// vertical
		if ( reglaX == 200 )
		{
			dibujarTexto((reglaX - 200)/100, 215, reglaX);
		}
		else
		{
			dibujarTexto((reglaX - 200)/100, 220, reglaX);
		}
	}

	// Generador de Números aleatorios
	function aleatorio( min, maxi )
	{
		var resultado;
		resultado = Math.floor( Math.random() * ( maxi - min + 1 ) ) + min;
		return resultado;
	}

	// Probando una función para graficar
	function ecuacion( xinicial )
	{
		var yinicial = 4000 / xinicial + 200;
		console.log( "Para X=" + xinicial + " => Y= " + yinicial );

		// Le agrego 200 para que se puede centrar en gráfico
		dibujarLinea( "narrow", xinicial + 200, yinicial, xinicial + 201, yinicial + 1 );
	}
	// Graficando la función
	for ( i = -400; i <= 400; i++ )
	{
		ecuacion(i);
	}
	consolas( "se cargó" );
}
window.addEventListener( "load", todo );