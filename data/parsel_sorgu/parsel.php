<?php
	include('baglanti.php');
	
	$array=array();//json için dizi tanimladik
	
	$ada=  $_POST['id1'];
	$parsel=  $_POST['id2'];

	//$ada= '68';
	//$parsel= '24';
	
	 $sql =<<<EOF
	  select ST_AsText(geom) from parsel where ada='${ada}' and parsel='${parsel}'
EOF;

   $ret = pg_query($db, $sql);

   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
   while($row = pg_fetch_row($ret)){
   
     $array[]=$row[0] ;
	 
	   }
	 
	echo  $array[0];

?>