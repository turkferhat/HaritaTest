<?php
	
	include('baglanti.php');
	
	$array=array();//json için dizi tanimladik
	
	$mah_id    =  $_POST['mah_id'];
	
	$sok_ad    =  $_POST['sok_ad'];
	
	$kap_no    =  $_POST['kap_no'];
	

	 $sql =<<<EOF
      SELECT ST_AsText(geom) from kapino where yol_adi= '${sok_ad}' and mahalle_id =  '${mah_id}' and kapi_no = '${kap_no}';
	  
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
	 
	echo $array[0];

?>