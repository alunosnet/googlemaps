<?php
	$bd="mvcgooglemaps";
	$servidor="localhost";
	$user="aulas";
	$password="12345";
	$ligacao=mysql_connect($servidor,$user,$password);
	if(!$ligacao){
		die("Não foi possível ligar à base de dados.");
	}
	$basedados=mysql_select_db($bd,$ligacao);
	if(!$basedados){
		die("Não foi possível selecionar a base de dados.");
	}
?>