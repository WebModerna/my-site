
// Variables ================================================
var MazoVirtual		=	[];
var grupos 			=	0;
var Sumatoria		=	0;
var mazo_elegido	= 	0;
var	carta_ingresada	= 	0;

// Funciones reutilizables ================================

// Toma el valor del mazo en el formulario
function MazoElegido()
{
	mazo_elegido = parseInt( $( "#MazoElegido" ).val() );
}

function GeneradorMazo()
{
	// Controlando si es un mazo de 50
	if ( mazo_elegido === 50 )
	{
		grupos = 13;
	}

	// Si es un mazo menor a 50 cartas y múltiplo de 4.
	else
	{
		grupos = mazo_elegido / 4;
	}

	// Creando el mazo y mostrando en consola
	MazoVirtual = new Array( grupos );
	console.log( "Los grupos son " + MazoVirtual.length + "." );
	for ( var i = 0; MazoVirtual.length -1 >= i; i++ )
	{
		MazoVirtual[ i ] = 4;
		Sumatoria = Sumatoria + MazoVirtual[ i ];
		console.log( MazoVirtual[ i ] );
		if ( grupos === 13 )
		{
			MazoVirtual[ 12 ] = 2;
		}
	}
}


$( document ).on( "ready", juego_de_cartas );
function juego_de_cartas()
{
	// Ingreso y validación del mazo de cartas
	$( "#comenzar" ).on( "click", ValidarMazo );
	function ValidarMazo(ev)
	{
		// Prevenir la funcionalidad por defecto
		ev.preventDefault();
		MazoElegido();

		// Validar si es un mazo de 50 cartas
		if ( mazo_elegido === 50 )
		{
			$( "#mazo" ).html( "Elegiste un Mazo de " + mazo_elegido + " cartas. Los comodines valen 13." );
			GeneradorMazo();
			console.log( "El mazo es de " + mazo_elegido + " cartas." );
		}

		// Si es un mazo distinto de un múltiplo de 4
		else if ( mazo_elegido % 4 !== 0 )
		{
			$( "#mazo" ).html( "Debes elegir un número múltiplo de 4 (cuatro)." );
			console.log( "El mazo de " + mazo_elegido + " cartas es incorrecto." );
		}

		// Si es un mazo vacío o negativo
		else if ( mazo_elegido <= 0 )
		{
			$( "#mazo" ).html( "Debes elegir un número entero múltiplo de 4 (cuatro)." );
			console.log( "Mazo de " + mazo_elegido + " cartas es incorrecto." );
		}

		// Si es un mazo correcto por descarte.
		else
		{
			GeneradorMazo();
			$( "#mazo" ).html( "El mazo es de " + mazo_elegido + " cartas. Ahora sacá una carta y marcá acá cuál fue." );
		}
	}


	// Resetear un valor incorrecto
	$( "#resetear" ).on( "click", resetear );
	function resetear(ev)
	{
		// Prevenir la funcionalidad por defecto
		ev.preventDefault();

		// Borrando los datos de las variables y los campos
		MazoVirtual		=	new Array();
		grupos 			=	0;
		Sumatoria		=	0;
		
		$( "#CartaIngresada" ).val( "" );
		$( "#CartaIngresada" ).html( "" );
		$( "#MazoElegido" ).val( "" );
		$( "#MazoElegido" ).html( "" );
		mazo_elegido	=	0;
		carta_ingresada = 	0;
		$( "#mazo" ).html( "Todas las variables se borraron. Todo a foja cero." );
		console.log( MazoVirtual.length );
		console.log( mazo_elegido );
	}


	// Calculador de Probabilidad
	$( "#calculador" ).on( "click", probabilidador );
	function probabilidador(ev)
	{
		// Prevenir la funcionalidad por defecto
		ev.preventDefault();

		// Seleccionando y mostrando la carta que salió
		carta_ingresada = parseInt( $( "#CartaIngresada" ).val() );
		console.log( "La carta obtenida es " + carta_ingresada + "." );

		// Calculador de probabilidad
		function calculador()
		{
			// Restamos del mazo la carta que ya salió
			MazoVirtual[ carta_ingresada -1 ] = MazoVirtual[ carta_ingresada - 1 ] - 1;

			// Calculamos cuantas quedan en el mazo en total
			Sumatoria = 0;
			for (var e = 0; e <= MazoVirtual.length - 1; e++ )
			{
				Sumatoria = Sumatoria + MazoVirtual[ e ];
				console.log(Sumatoria);
			}

			// Definiendo una variable para el bucle
			var sumando = 0;
			for (var i = 0; i <= carta_ingresada - 1; i++ )
			{
				sumando = sumando + MazoVirtual[ i ];
			}

			// Mostrando el resultado control por consola. Pero primero redondearemos
			resultado = Math.round( 100 * sumando / ( Sumatoria ) );
			console.log( sumando );
			console.log( "Probabilidad: " + resultado + "%." );

			if( Sumatoria > 0 )
			{
				// Mostrando la probabilidad final
				$( ".la_probabilidad" ).html( "<p>La probabilidad de que la siguiente carta sea menor o igual a <em>" + carta_ingresada + "</em> es del...</p><p class='destacado'><strong>" + resultado + "%</strong></p>." );
			}
			else
			{
				$( "#mazo" ).html( "Se te acabaron las cartas. Empezá de nuevo." );	
			}
		}
		calculador();

		// Controlar las cartas que van quedando y restando las seleccionadas
		if ( MazoVirtual[ carta_ingresada - 1 ] > 0 )
		{
			// MazoVirtual[ carta_ingresada -1 ] = MazoVirtual[ carta_ingresada - 1 ] - 1;
			console.log( "Quedan " + MazoVirtual[ carta_ingresada - 1 ] );
		}
		else
		{
			$( ".la_probabilidad" ).html( "Esta carta ya se acabó. Elija otra." );
		}
	}
}