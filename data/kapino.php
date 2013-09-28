<?php
	
	include('baglanti.php');
	$i=0;
	$array=array();//json için dizi tanimladik
	
	$Gelen_Sokak_Ad    =  $_POST['sadi'];
//$Gelen_Sokak_Ad    = "BEYATLI SOKAK";
	 $sql =<<<EOF
      SELECT kapi_no from kapino where yol_adi= '${Gelen_Sokak_Ad}' ;
	  
EOF;

   $ret = pg_query($db, $sql);

   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
   while($row = pg_fetch_row($ret)){
   
       $array[$i]['kapi_no']=$row[0] ;
	  $i=$i+1;
	  
	   }
  
	 
	echo  json_encode($array);

?>