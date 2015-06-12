// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	function flash(boton)
	{
		boton.stop().animate({opacity:'1.5'}, {
			duration: 80,
			complete: function(){
				boton.stop().animate({opacity:'1'}, 200);
	}
			});
	}
	
	
	
	var basedatos = window.sqlitePlugin.
	openDatabase({name: "coloresBD.db", createFromLocation:1});
	
	
	audio = window.plugins.LowLatencyAudio;
	
	audio.preloadFX('B1', 'audio/C.mp3', function(){},
	function(msg) { alert("error "+ msg);});
	
	audio.preloadFX('B2', 'audio/D.mp3', function(){},
	function(msg) { alert("error "+ msg);});
	
	audio.preloadFX('B3', 'audio/E.mp3', function(){},
	function(msg) { alert("error "+ msg);});                                                                                 
	
	audio.preloadFX('B4', 'audio/F.mp3', function(){},
	function(msg) { alert("error "+ msg);});
	
		
	});
	
	cargarnombrejugador();
		
		
		function quien (q)
	{
		audio.play (q);
		return q.substring(1);
	}	
	
	
	
	$('.cuadro').on('tap', function(){
		flash($(this)),
		audio.play(($this).attr('id'));
	});
	
	
	function cargarnombrejugador()
	{
		basedatos.transaction(function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
			
		ejecutar.executeSql(sql, undefined, function(ejecutar, resultado){
				var datosJugador=resultado.rows.item(0);
				$('#jugador').text(datosJugador.NombreUsuario);
			});
		});
	}
	
	
	
	$('#btn_jugar').on('click', function(){
		var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight();
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('ui.content').outerHeight();
		var alto = (pantalla - encabezado - pie)/2;
		$('.cuadro').height(alto);
		
		});//btnjugar.click
		
		$('#btn_config').on ('tap', function (){
			
		$('#txtnombre').val($('#jugador').text());
		
	});
	
	$('#btn_guardar').on('tap', function(){
		var nuevonombre=$('#txtnombre').val();
		basedatos.transaction(function(consulta){
			consulta.executeSql("UPDATE Usuario SET NombreUsuario=? WHERE ClaveUsuario='1';",[nuevonombre]);
		
		});
		
		

});
});
		
	
		//$('.cuadro').on('mousedown', function(){
			//$(this).addClass('pulsado');
		
		
		//});//mousedown
		
		//$('.cuadro').on('mouseup', function (){
			//$('#pantalla').append(quien($(this).attr('id')));
			//$(this).removeClass('pulsado');
		//});

	