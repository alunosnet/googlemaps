<?php
	require("ligarbd.php");
	$local=$_POST['local'];
	$latitude=$_POST['lat'];
	$longitude=$_POST['lng'];
	
	$sql="INSERT INTO coords VALUES (null,'{$local}',{$latitude},{$longitude});";
	
	$sqldata=mysql_query($sql);
	if($sqldata!=1)
		echo "erro".$sql;
	else
		echo "ok";
?>