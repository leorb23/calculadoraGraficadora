var cnv;
var ctx;

function inicioVariables()
{
	cnv = document.getElementById("canvas");
	ctx = cnv.getContext("2d");
}

function escribir(num)
{
	var ant = document.getElementById("resultado").value;
	document.getElementById("resultado").value = ant + num;
}

function eliminar()
{
	var ant = document.getElementById("resultado").value;
	var miNum = ant.substring(0,ant.length-1);
	document.getElementById("resultado").value = miNum;
}

function limpiar()
{
	document.getElementById("resultado").value = "";
}

function validarSignos(num)
{
	var ant = document.getElementById("resultado").value;
	if( ant == "" )
	{
		document.getElementById("resultado").value = "";
	}
	else
	{
		var ant = document.getElementById("resultado").value;
		document.getElementById("resultado").value = ant + num;
		nuevoRes = document.getElementById("resultado").value;

		record = 0;
		igual = 1;
		var letraRecord
		var b = 0
		var letra = ""
		for ( i = 1; i < nuevoRes.length; i++)
		{
			if( nuevoRes.charAt(i) == "+" || nuevoRes.charAt(i) == "-" || nuevoRes.charAt(i) == "*" || nuevoRes.charAt(i) == "/")
			{
				igual = igual + 1;
				letra = nuevoRes.charAt(i);
			}
			else
			{
				if(igual > record)
					{
						record = igual; letraRecord = letra
					}
					
				igual = 1;
			}

			if(nuevoRes.charAt(i)=="x")
			{
				nuevoRes = document.getElementById("resultado").value;
			}

			b = i;
		}
		if( igual > record )
		{
			record = igual;
			letraRecord = letra;
		}
		if( record > 2 )
		{
			var ant = nuevoRes;
			var nuevoValor = ant.substring(0, ant.length-1);
			document.getElementById("resultado").value = nuevoValor;
			record = 0; b=0; igual=1; letra=""; letraRecord="";
		}

	}
}

function calcular()
{
	var resultado = eval(document.getElementById("resultado").value);
	document.getElementById("resultado").value = resultado;
}

function raizCuadrada() 
{
    var numeros = document.getElementById("resultado").value;
    numeros = Math.sqrt(numeros) //resolver raíz cuadrada.
    document.getElementById("resultado").value = numeros;
}

function potencia()
{
	var exponente = 2;
	var numeros = document.getElementById("resultado").value;
	numeros = Math.pow(numeros,2); 
	document.getElementById("resultado").value = numeros;
}

function sen()
{	
	var numeros = document.getElementById("resultado").value;
	numeros = Math.sin(numeros); 
	document.getElementById("resultado").value = numeros;
}

function cos()
{
	var numeros = document.getElementById("resultado").value;
	numeros = Math.cos(numeros); 
	document.getElementById("resultado").value = numeros;

}

function tan()
{
	var numeros = document.getElementById("resultado").value;
	numeros = Math.tan(numeros); 
	document.getElementById("resultado").value = numeros;

}

function graficarPlano()
{
	inicioVariables();
	cnv.width = 500;
	cnv.height = 500;
	ctx.beginPath();		
	ctx.moveTo(250,0);
	ctx.lineTo(250,500);
	ctx.moveTo(0,250);
	ctx.lineTo(500,250);
	ctx.moveTo(0,0);
	ctx.lineTo(500,0);
	ctx.moveTo(0,500);
	ctx.lineTo(500,500);
	ctx.moveTo(0,0);
	ctx.lineTo(0,500);
	ctx.moveTo(500,0);
	ctx.lineTo(500,500);
	ctx.closePath();
	ctx.stroke();
}

function graficarFuncion()
{
	inicioVariables();
	var cX = 250;
	var cY = 250;

	ctx.beginPath();
	ctx.moveTo(cX, cY);

	var bool = true;

	var funcion = document.getElementById("resultado").value;
	funcion = funcion.replace(/X2/g, "X*X");

	var ev = "";

	var res = 0;

	for (var i=-80; i<=80; i++){
		ev = funcion.replace(/X/g, i+"");
		res = eval(ev);
		if (bool==true)
			ctx.moveTo(cX+i, cY-res);
		else
			ctx.lineTo(cX+i, cY-res);

		bool = false;
	}
	ctx.closePath();
	ctx.stroke();
}

