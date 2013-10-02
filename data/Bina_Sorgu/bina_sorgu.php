<?php
	
	include('baglanti.php');
	
	$array=array();//json için dizi tanimladik
	
	$bina_kodu=  $_POST['id1'];
	$bina_ad=  $_POST['id2'];

	//$bina_kodu= '114100881';
	//$bina_ad= 'Trafo';
	//$mah_id  = '437';
	
	//$sok_ad  = 'HATEMİ SOKAK'; 
	 $sql =<<<EOF
	  select ST_AsText(geom) from yapi where yapi_adi='${bina_ad}' and yapi_id='${bina_kodu}'
	  
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