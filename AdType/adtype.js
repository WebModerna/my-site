// Making the AdType's test.
var texto = "Este es mi Texto.";
var numero = 92837923857;


class multiplesFunciones
{
	constructor( texto, numero )
	{
		this.texto = texto;
		this.numero = numero;
	}

	// REVERSE A STRING
	reversar()
	{
		texto = texto.reverse();
		document.write(texto);	
		console.log(texto);
	}

	// VALIDATE A PALINDROME
	palindrome()
	{
		
		console.log(texto);
	}

	// REVERSE AN INTEGER
	reverseInterger()
	{

	}

	// CAPITALIZE LETTERS
	capitalizar()
	{
		
		console.log(texto);
	}

	// MAX CHARACTER
	maximizarCaracter()
	{
		
		console.log(texto);
	}
}

var textillo = new multiplesFunciones(texto, numero);

console.log(textillo);