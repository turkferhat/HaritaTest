<?php
	include('baglanti.php');
	$array=array();//json için dizi tanimladik
	$mid=  $_POST['id'];	
	//$mid= '430';

$sql =<<<EOF
      SELECT ST_AsText(geom) from mahalle where mahalle_id= '${mid}' ;	  
EOF;
   $ret = pg_query($db, $sql);

   if(!$ret){
     exit(pg_last_error($db));
      exit;
   } 
   while($row = pg_fetch_row($ret))
   {
      $array[]=$row[0] ;
   } 
echo  $array[0];
?>