<?php
	
	include('../baglanti.php');
	
	$array=array();//json için dizi tanimladik
	
	$sok_ad    = $_POST['sok_ad'];
	
	$mah_id    =  $_POST['mah_id'];
	
	$kap_no    = $_POST['kap_no'];
	
		$sth = $db->prepare(" SELECT ST_AsText(geom) from kapino where yol_adi=? and mahalle_id =? and kapi_no =?");
$sth->execute( array($sok_ad,$mah_id,$kap_no));
$result = $sth->fetchAll(PDO::FETCH_BOTH);

foreach($result as $row){

	$array[]=$row[0] ;
	
	} 
echo  $array[0];


/*

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
	*/

?>