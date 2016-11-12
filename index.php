<?php
	require("ligarbd.php");
	
?>
<html>
<head>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script src="codigo.js"></script>
	<link rel="stylesheet" type="text/css" href="estilo.css">
	
</head>
<body>
	<table>
	<tr>
	<td valign="top">
		<input type="text" id="txtSearch" placeholder="País a pesquisar"/>
		<div id="myData">
		<table id="tabela" width='100%'>
		</table>
		</div>
	</td>
	<td>
		<div id="googleMap" style='width:1000px;height:600px;'></div>
	</td>
	</tr>
	</table>
	<div class="overlay"></div>
	<div class="modal">
	Dados do ponto:
	<br><br>
	Nome:<input type="text" id="nome"/><br>
	Latitude:<input type="text" id="latitude"/><br>
	Longitude:<input type="text" id="longitude"/>
	<br>
	<button id="ok">Ok</button>
	<button id="cancel">Cancelar</button>
	</div>
</body>
</html>