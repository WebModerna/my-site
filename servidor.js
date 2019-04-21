// ejemplo de construcción de un servidor de javascript
var cafecito = require("express");

var aplicacion = cafecito();

aplicacion.get( "/", inicio );
aplicacion.get( "/cursos", cursos );

function inicio( peticion, resultado )
{
	resultado.send("<u>Este es el home</u> <b>Genial!</b>");
}

function cursos( peticion, resultado )
{
	resultado.send("<h1>Nuestros cursudos.</h1>")
}

aplicacion.listen(8989);