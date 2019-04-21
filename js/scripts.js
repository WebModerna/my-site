// El tateti

// Se ejecutará todo cuando se haya cargado la página completamente
$( document ).on( "ready", marcador );


// Función que define del tablero del juego
function marcador()
{
	/** Prototipado para agregar y quitar clases fácilmente ****
	//  Función para buscar la clase en el elemento
	HTMLElement.prototype.hasClass = function ( className )
	{
		var rgx = new RegExp('(\\s|^)' + className + '(\\s|$)');
		var match = this.className.match( rgx );
		return ( match != null );
	}

	// Agrega una clase CSS al elemento
	// @className es el nombre de la clase
	HTMLElement.prototype.addClass = function( className )
	{
		if ( !this.hasClass( className ) )
		this.className += " " + className;
	};

	// Quita una clase CSS al elemento
	// @className es el nombre de la clase
	HTMLElement.prototype.removeClass = function( className )
	{
		if (this.hasClass(className))
		{
			var reg = new RegExp( '(\\s|^)' + className + '(\\s|$)' );
			this.className = this.className.replace( reg,' ' );
		}
	};
	************ fin del prototipado ********************/

	// El tablero
	tablero = $("#tablero");
	
	// Las celdas del tablero
	$( ".fichas" ).on("click", colocarFichaNosotros );

	// Fichas del jugador humano
	NF1 = 1; NF2 = 1; NF3 = 1; nosotros = "circulo";

	// Fichas de nuestro rival; la computadora
	RF1 = 1; RF2 = 1; RF3 = 1; computadora = "cruz";

	// Propiedad de modificación
	modificable = true;

	// Función para colocar nuestras fichas por primera vez
	function colocarFichaNosotros( id, jugador )
	{
		if( NF1 == 1 )
		{
			$( this ).addClass( nosotros );
			console.log( "Nuestra Ficha 1" );
			NF1 = 0;
		}
		else if( NF2 == 1 )
		{
			$( this ).addClass( nosotros) ;
			console.log( "Nuestra Ficha 2" );
			NF2 = 0;
		}
		else if ( NF3 == 1 )
		{
			$( this ).addClass( nosotros );
			console.log( "Nuestra Ficha 3" );
			NF3 = 0;
		}
	}

/*	// Casos en las opciones en las que el jugador comienza primero
	var turno = nosotros;
	if ( turno == nosotros )
	{
		// Caso en que colocamos la primera ficha en el centro
		switch ( E.hasClass( nosotros ) )
		{
			console.log("hola");
		}
	}*/
}
