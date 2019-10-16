/***************************************************************
 *     MARIO ANN Developed By Oscar Aviles Miramontes 2015     *
 ***************************************************************
 *            JavaScript, JQuery, CSS3, HTML5                  *
 ***************************************************************/
	 
	//Init variables
	var problemasresueltos = [];
	var mesactual;
	var anoactual = 0;
	
	//Objeto de problema actual
	var problemaactual = {
		id:0,
		ministro:"",
		descripcion:"",
		soluciones: [],
		//Funcion definitoria de problema actual
		definir:function() {			
			problemaactual.ministro = problemas[problemaactual.id].ministro;
			problemaactual.descripcion = problemas[problemaactual.id].descripcion;	
			problemaactual.soluciones = [];
			for(i = 0; i < problemas[problemaactual.id].soluciones.length; i++){
			problemaactual.soluciones.push({solucion:problemas[problemaactual.id].soluciones[i].solucion, respuesta:problemas[problemaactual.id].soluciones[i].respuesta, popularidad:problemas[problemaactual.id].soluciones[i].popularidad, voto:problemas[problemaactual.id].soluciones[i].voto, izquierdaderecha:problemas[problemaactual.id].soluciones[i].izquierdaderecha, estabilidad:problemas[problemaactual.id].soluciones[i].estabilidad});
			}
		}
	};
	
	//Objeto jugador
	var jugador = {
		popularidad:0,
		voto:35,
		izquierdaderecha:50,
		estabilidad:40,
		turno:0
	}; 
	
	//Array de objetos ministro
	var ministros = [{
		nombreindex:"economia",
		nombre:"Ministro de Economia",
		imagen:"images/economia.jpg"
	},{
		nombreindex:"cultura",
		nombre:"Ministro de Cultura",
		imagen:"images/cultura.jpg"	
	},{
		nombreindex:"defensa",
		nombre:"Ministro de Defensa",
		imagen:"images/defensa.jpg"	
	},{
		nombreindex:"fomento",
		nombre:"Ministro de Fomento",
		imagen:"images/fomento.jpg"	
	},{
		nombreindex:"justicia",
		nombre:"Ministro de Justicia",
		imagen:"images/justicia.jpg"	
	},{
		nombreindex:"interior",
		nombre:"Ministro de Interior",
		imagen:"images/interior.jpg"	
	},{
		nombreindex:"educacion",
		nombre:"Ministro de Educacion",
		imagen:"images/educacion.jpg"	
	},{
		nombreindex:"exterior",
		nombre:"Ministro de Exterior",
		imagen:"images/exterior.jpg"	
	},{
		nombreindex:"sanidad",
		nombre:"Ministra de Sanidad",
		imagen:"images/sanidad.jpg"	
	},{
		nombreindex:"empleo",
		nombre:"Ministra de Empleo",
		imagen:"images/empleo.jpg"	
	},{
		nombreindex:"industria",
		nombre:"Ministro de Industria",
		imagen:"images/industria.jpg"	
	}
	]; 	
	
	//Array de objetos problema
	var problemas = [{
		ministro:"fomento",
		descripcion:"Presidente, un petrolero ha tenido un accidente en la costa gallega, es un desastre de gran magnitud, ¿Que recomienda hacer?",
		soluciones: 
			[{solucion:"Decir que son solo unos hilillos y pasar de todo", respuesta:"La gente no se lo ha creído, y el problema sigue ahí y nos ha explotado en la cara. Una fatal decisión si me permite decirlo, señor presidente", popularidad:-10,voto:-5,izquierdaderecha:5,estabilidad:-10},
			{solucion:"Mandar el barco a Portugal", respuesta:"No es una medida muy popular, pero si efectiva. En público no mucha gente lo aprueba, pero en los bares no se habla de otra cosa que de tu buena gestion.", popularidad:-5,voto:5,izquierdaderecha:0,estabilidad:10},
			{solucion:"Asumir nuestra responsabilidad y remolcarlo al puerco mas cercano", respuesta:"El pueblo está generalmente contento con tu rápida y correcta gestion, aunque hay detractores que creen que debiste alejar el barco de nuestras costas.", popularidad:10,voto:5,izquierdaderecha:0,estabilidad:0}]
	},{
		ministro:"cultura",
		descripcion:"Hoy se ha acercado el presidente de la SGAE para decirme que no están muy contentos con nuestra gestión de los derechos de autor. ¿Que hacemos?",
		soluciones: 
			[{solucion:"Dejarle claro que ya tienen bastantes privilegios de los que abusan y revocar el canon de autores", respuesta:"La rama mas comercial del mundo del espectaculo entra en colera, pero tanto la poblacion general como la mayoria de los artistas aplauden tu decision.", popularidad:15,voto:5,izquierdaderecha:-10,estabilidad:0},
			{solucion:"Razonar con él que no estamos en situacion de cambiar la ley en estos momentos", respuesta:"A regañadientes, el presidente de la SGAE acepta y se va con la promesa de volver", popularidad:-5,voto:0,izquierdaderecha:0,estabilidad:0},
			{solucion:"Ceder a sus exigencias y imponer un nuevo canon de autor mas agresivo", respuesta:"Una gran sonrisa se dibuja en el presidente de la SGAE, que alaba tu decision y promete su apoyo en las proximas elecciones", popularidad:-10,voto:-3,izquierdaderecha:10,estabilidad:0}]
	},{
		ministro:"economia",
		descripcion:"Hoy ha salido a la luz en las noticias un escándalo de fraude bancario que ha llevado a una importante entidad a la bancarrota y la gente esta reclamando la cabeza de los responsables.",
		soluciones:
			[{solucion:"Salvar el banco con fondos del Estado y denunciar a los responsables", respuesta:"Los ánimos de la gente parecen calmarse un poco al ver que se enjuiciará a los responsables, aunque no resulta popular la decisión de salvar el banco.", popularidad:-5,voto:5,izquierdaderecha:5,estabilidad:5},
			{solucion:"Salvar el banco con fondos del Estado y hacer la vista gorda con los responsables", respuesta:"Nuestros amigos de las altas esferas agradecen el favor, pero el populacho se enfada y las protestas aumentan.", popularidad:-10,voto:0,izquierdaderecha:15,estabilidad:10},
			{solucion:"Denunciar a los responsables y permitir la bancarrota del banco", respuesta:"El pueblo aplaude tu decisión, pero esta no favorece mucho a la estabilidad económica del Estado.", popularidad:10,voto:5,izquierdaderecha:-15,estabilidad:-15},
			{solucion:"Denunciar a los responsables y nacionalizar el banco", respuesta:"El pueblo aplaude tu decisión, y la nacionalización del banco en vez de su desaparición ha ayudado a que el impacto negativo del desastre en el Estado sea menor.", popularidad:5,voto:10,izquierdaderecha:-20,estabilidad:-5}]
	},{
		ministro:"empleo",
		descripcion:"El paro roza hoy limites inaceptables, y el pueblo reclama soluciones urgentes.",
		soluciones:
			[{solucion:"Abaratar despido para fomentar la contratación", respuesta:"Los empresarios aplauden tu decisión y la mayoría de la población cree que estas medidas incentivarán la contratación, pero los sindicatos no están contentos.", popularidad:-5,voto:5,izquierdaderecha:10,estabilidad:5},
			{solucion:"Incentivar la contratación mediante retribuciones económicas atractivas para los empresarios por nuevos contratos indefinidos", respuesta:"La medida no es muy efectiva, pero agrada tanto a empresarios como trabajadores.", popularidad:5,voto:5,izquierdaderecha:-5,estabilidad:5},
			{solucion:"Blindar a los trabajadores indefinidos con nuevas leyes de protección", respuesta:"El pueblo y los sindicatos se alegran, pero los empresarios ponen el grito en el cielo.", popularidad:10,voto:0,izquierdaderecha:15,estabilidad:-5},
			{solucion:"Impulsar mediante ayudas el programa de autónomos y nuevos emprendedores", respuesta:"La medida es efectiva y la gente empieza a trabajar por cuenta propia y crear nuevas empresas y puestos de trabajo. Una decisión excelente, presidente.", popularidad:5,voto:5,izquierdaderecha:-5,estabilidad:10}]
	},{
		ministro:"sanidad",
		descripcion:"Hay una epidemia de ébola a nivel mundial, y uno de nuestros ciudadanos ha sido infectado mientras desarrollaba labores humanitarias en África. ¿Que protocolo recomienda seguir?",
		soluciones:
			[{solucion:"Tratar al ciudadano en origen pero no traerlo al país", respuesta:"La gente no da crédito y en la calle se escuchan comentarios tachándonos de inhumanos monstruos. Por el contrario, la enfermedad se ha contenido sin problema gracias a las precauciones tomadas.", popularidad:-15,voto:-5,izquierdaderecha:0,estabilidad:10},
			{solucion:"Traer al ciudadano al país y tratarlo en uno de nuestros centros de salud", respuesta:"La medida resulta ser bastante popular pero inefectiva. La falta de un protocolo sanitario en condiciones ha llevado a que el virus se expanda, y ahora tenemos varios casos de infección en el país.", popularidad:-5,voto:0,izquierdaderecha:0,estabilidad:-20}]
	}
	]; 	

	//Funcion isInArray(valor, array) devuelve true si el valor esta en el array
	function isInArray(value, array) {
		return array.indexOf(value) > -1;
	}	
	
	//Funcion QueTurno() transforma el numero de turno en formato Mes Año
	function QueTurno() {
		if (mesactual == "Enero") mesactual = "Febrero";
		else if (mesactual == "Febrero") mesactual = "Marzo";
		else if (mesactual == "Marzo") mesactual = "Abril";
		else if (mesactual == "Abril") mesactual = "Mayo";
		else if (mesactual == "Mayo") mesactual = "Junio";
		else if (mesactual == "Junio") mesactual = "Julio";
		else if (mesactual == "Julio") mesactual = "Agosto";
		else if (mesactual == "Agosto") mesactual = "Septiembre";
		else if (mesactual == "Septiembre") mesactual = "Octubre";
		else if (mesactual == "Octubre") mesactual = "Noviembre";
		else if (mesactual == "Noviembre") mesactual = "Diciembre";
		else {
			mesactual = "Enero";
			anoactual = anoactual + 1;
		}
	}
	
	//Funcion Solucion() procesa una de las posibles soluciones
	function Solucion(solucionelegida) {
		//Ajustamos las variables del jugador en funcion de la solucion elegida
		jugador.popularidad += problemaactual.soluciones[solucionelegida].popularidad;
		jugador.voto += problemaactual.soluciones[solucionelegida].voto;
		jugador.estabilidad += problemaactual.soluciones[solucionelegida].estabilidad;
		jugador.izquierdaderecha += problemaactual.soluciones[solucionelegida].izquierdaderecha;
		
		//Comprobamos que las variables no excedan los limites
		if (jugador.popularidad > 100) jugador.popularidad = 100;
		if (jugador.voto > 100) jugador.voto = 100;
		if (jugador.estabilidad > 100) jugador.estabilidad = 100;
		if (jugador.izquierdaderecha > 100) jugador.izquierdaderecha = 100;
		if (jugador.voto < 0) jugador.voto = 0;
		if (jugador.izquierdaderecha < 0) jugador.izquierdaderecha = 0;
		
		//Creamos la alerta a mostrar con los resultados de nuestra eleccion
		resultados = '<p>' + problemaactual.soluciones[solucionelegida].respuesta  + '</p><p style="text-align:center">';
		if (problemaactual.soluciones[solucionelegida].popularidad > 0) resultados += '<span class="label label-success" style="font-family:Arial">+Popularidad</span> ';
		else if (problemaactual.soluciones[solucionelegida].popularidad < 0) resultados += '<span class="label label-danger" style="font-family:Arial">-Popularidad</span> ';
		if (problemaactual.soluciones[solucionelegida].voto > 0) resultados += '<span class="label label-success" style="font-family:Arial">+Intencion de voto</span> ';
		else if (problemaactual.soluciones[solucionelegida].voto < 0) resultados += '<span class="label label-danger" style="font-family:Arial">-Intencion de voto</span> ';
		if (problemaactual.soluciones[solucionelegida].estabilidad > 0) resultados += '<span class="label label-success" style="font-family:Arial">+Estabilidad</span> ';
		else if (problemaactual.soluciones[solucionelegida].estabilidad < 0) resultados += '<span class="label label-danger" style="font-family:Arial">-Estabilidad</span> ';
		resultados += '</p>';
		
		//Mostramos resultados y ciclamos turno al cerrar
		bootbox.alert(resultados, function () { NuevoTurno(); }); 		
	}
	
	//Funcion FinJuego() finaliza el juego
	function FinJuego() {
		bootbox.alert("Fin");
	}
	
	//Funcion Empezar() reinicia el juego
	function Empezar() {
		//reinicio variables
		jugador.popularidad = 30;
		jugador.voto = 35;
		jugador.izquierdaderecha = 50;
		jugador.estabilidad = 50;
		jugador.turno = 0;
		
		//reinicio de array de problemas resueltos
		while(problemasresueltos.length > 0) {
			problemasresueltos.pop();
		}
		
	    document.getElementById("empezar").style.display = 'none'; //Ocultamos el dialogo de empezar partida
		document.getElementById("juego").style.display = 'block';	//Mostramos el dialogo de juego
		NuevoTurno(); //Iniciamos un nuevo turno
	}
	
	//Funcion NuevoTurno() inicia un nuevo turno
	function NuevoTurno() {
		jugador.turno = jugador.turno + 1; //Sumamos un turno
		
		//Comprobamos si hay que finalizar el juego
		if (jugador.turno == 49 || jugador.estabilidad <= 0 || jugador.popularidad <= 0) FinJuego(); 
		//Si no, continuamos
		else {				
		//Generamos numero aleatorio para recibir un problema, si ese problema ya se ha resuelto antes, generamos otro
		problemaactual.id = Math.floor((Math.random() * problemas.length)); 
		while (isInArray(problemaactual.id,problemasresueltos)) problemaactual.id = Math.floor((Math.random() * problemas.length));
		
		problemaactual.definir(); //Mapeamos el problema elegido al objeto problemaactual
		problemasresueltos.push(problemaactual.id); //Añadimos el problema al array de problemasresueltos
		
		//Iteramos por los ministros para buscar al que corresponde el del problema
		for(i = 0; i < ministros.length; i++){
			if (ministros[i].nombreindex == problemaactual.ministro) var ministroactual = i;
		}
		
		QueTurno(); //Convertimos turno numerico a Mes Año
		document.getElementById("turnobody").innerHTML = mesactual + " 200" + anoactual; //Mostramos turno
		document.getElementById("ministroheader").innerHTML = ministros[ministroactual].nombre;		 //Mostramos el nombre del ministro
		document.getElementById("imagenministro").src=ministros[ministroactual].imagen; //Mostramos la imagen del ministro
		document.getElementById("problemabody").innerHTML = problemaactual.descripcion; //Mostramos el cuerpo del problema
		
		//Listamos las opciones posibles
		var solucionesprint = "<ul>";
		for(i = 0; i < problemas[problemaactual.id].soluciones.length; i++)	solucionesprint += '<li><a href="javascript:Solucion(' + i + ')">' + problemas[problemaactual.id].soluciones[i].solucion + '</a></li>';
		solucionesprint += '</ul>';
		document.getElementById("solucionesbody").innerHTML = solucionesprint;
		
		//Mostramos el menu
		var menutotal = "<h4>Popularidad: ";		
		if (jugador.popularidad == 0) menutotal +=  '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'; 
		else if (jugador.popularidad <= 20) menutotal +=  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'; 
		else if (jugador.popularidad > 20 && jugador.popularidad < 40) menutotal +=  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'; 
		else if (jugador.popularidad >= 40 && jugador.popularidad < 60) menutotal +=  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'; 
		else if (jugador.popularidad >= 60 && jugador.popularidad < 80) menutotal +=  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'; 
		else menutotal +=  '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>'; 
				
		menutotal += " Intencion de Voto: ";
		if (jugador.voto < 30) menutotal += '<span class="label label-danger">'; 
		else if (jugador.voto > 50) menutotal += '<span class="label label-success">'; 
		else menutotal += '<span class="label label-default">';
		menutotal += jugador.voto + "%</span>";
		
		menutotal += " Estabilidad: ";
		if (jugador.estabilidad < 50) menutotal +=  '<span class="glyphicon glyphicon-thumbs-down" style="color:red" aria-hidden="true"></span>'; 
		else if (jugador.estabilidad > 50) menutotal +=  '<span class="glyphicon glyphicon-thumbs-up" style="color:green" aria-hidden="true"></span>'; 
		else menutotal += '-'; 
		
		menutotal += " Ideologia: ";
		if (jugador.izquierdaderecha < 50) menutotal += '<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>'; 
		else if (jugador.izquierdaderecha > 50) menutotal += '<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>'; 
		else menutotal += '-'; 
		
		menutotal += "</h4>";
		
		document.getElementById("menu").innerHTML = menutotal;
		//Fin mostrado menu
		}
	}