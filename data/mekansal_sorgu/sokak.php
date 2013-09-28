<?php
	
	include('baglanti.php');
	
	$array=array();//json için dizi tanimladik
	
	$mah_id  =  $_POST['id'];
	
	$sok_ad  =  $_POST['sok_ad'];

	//$mah_id  = '437';
	
	//$sok_ad  = 'HATEMİ SOKAK'; 
	 $sql =<<<EOF
      SELECT ST_AsText(geom) from yol where yol_ismi= '${sok_ad}' and mahalle_id =  '${mah_id}' ;
	  
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