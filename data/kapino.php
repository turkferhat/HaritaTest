<?php
	
	include('baglanti.php');
	$i=0;
	$array=array();//json için dizi tanimladik
	
	$Gelen_Sokak_Ad    =  $_POST['sadi'];
//$Gelen_Sokak_Ad    = "BEYATLI SOKAK";


	$sth = $db->prepare("select kapi_no,ST_AsText(geom) from kapino where yol_adi=?");
$sth->execute( array($Gelen_Sokak_Ad));
$result = $sth->fetchAll(PDO::FETCH_BOTH);

foreach($result as $row){

	    $array[$i]['kapi_no']=$row[0] ;
	    $array[$i]['kapi_geom']=$row[1];
	  $i=$i+1;
	
	} 
	echo  json_encode($array);

	/* $sql =<<<EOF
      SELECT  kapi_no,ST_AsText(geom) from kapino where yol_adi= '${Gelen_Sokak_Ad}' ;
	  
EOF;

   $ret = pg_query($db, $sql);

   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
   while($row = pg_fetch_row($ret)){
   
       $array[$i]['kapi_no']=$row[0] ;
	    $array[$i]['kapi_geom']=$row[1];
	  $i=$i+1;
	  
	   }
  */
	 


?>