	<?php
	include('baglanti.php');
	
//$aa =  $_POST['foo'];	
	$array=array();//json için dizi tanimladik
	
	 $sql =<<<EOF
      SELECT mahalle_ad,mahalle_id from mahalle  ;
	  
EOF;
  $ret = pg_query($db, $sql);
   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
 ?>
 {
  "success": true,
"users": [
 <?php 
 echo $aa;
   while($row = pg_fetch_row($ret)){
   
      $array['mah_adi']=$row[0] ;
	  $array['mah_id']=$row[1];
	  echo  json_encode($array);
	  ?>,
	  <?php
	   }
?>
	]
		 }