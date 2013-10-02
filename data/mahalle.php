	<?php
	include('baglanti.php');
	
//$aa =  $_POST['foo'];	
	$array=array();//json için dizi tanimladik
	

$sth = $db->prepare("SELECT mahalle_ad,mahalle_id from mahalle");
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_BOTH);
echo ' {
  "success": true,
"users": [';

foreach($result as $row){


	    $array['mah_adi']=$row[0] ;
	    $array['mah_id']=$row[1];
  echo  json_encode($array).',';
	}
	
	echo ']
		 }'; 
	
	/*	
	
	
	echo 'test';
	 $sql =<<<EOF
      SELECT mahalle_ad,mahalle_id from mahalle ;
	  
EOF;
  $ret = pg_query($db2, $sql);
   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
  
   <?php 
 echo $aa;
 echo 'test2';
   while($row = pg_fetch_row($ret)){
   
      $array['mah_adi']=$row[0] ;
	  $array['mah_id']=$row[1];
	  echo  json_encode($array);
	  ?>,
	  <?php
	   }
?>
	]
		 } */
  
 ?>


