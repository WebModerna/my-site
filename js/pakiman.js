// Pakiman
var imagenes = [];
imagenes["Cauchín"] = "vaca.png";
imagenes["Pockacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


// La clase Pakimán
class Pakiman
{
	constructor(denominacion, lavida, poder)
	{
		this.imagen = new Image();
		this.nombre = denominacion;
		this.vida = lavida;
		this.ataque = poder;

		this.imagen.src = "img/" + imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{
		document.body.appendChild( this.imagen );
		document.write( "<h2>" + this.nombre + "</h2>" );
		document.write( "Vida: " + this.vida + "<br />" );
		document.write( "Ataque: " + this.ataque );
		document.write( "<hr />" );
	}
}
var cauchin = new Pakiman("Cauchín", 100, 30);
var pokacho = new Pakiman("Pockacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

var coleccion = [];

coleccion.push( cauchin );
coleccion.push( pokacho );
coleccion.push( tocinauro );

/*for( var i = 0; i < coleccion.length; i++ )
{
	coleccion[i].mostrar();
	console.log( coleccion[i] );
}*/

// Otro ciclo para recorrer arrays, arreglos.
for( var p in coleccion )
{
	coleccion[p].mostrar();
	console.log(p);
}
for( var freducho in imagenes )
{
	// coleccion[p].mostrar();
	console.log( freducho );
}

// El of itera sobre el objeto. NO simpre funciona. Guarda!
// El in itera sobre el índice de un array.



