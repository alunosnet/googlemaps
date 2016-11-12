<?php
	require("ligarbd.php");
	$local=$_GET['local'];
	
	$sql="SELECT * FROM coords WHERE LocationName Like '";
	$sql .= $local."%' ORDER BY LocationName";
	
	$sqldata=mysql_query($sql);
	$registos=array();
	while($registo=mysql_fetch_assoc($sqldata)){
		$registos[]=$registo;
	}
	echo json_encode($registos);
?>