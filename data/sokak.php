
  
<?php
	header('Content-Type: text/html; charset=utf-8');//Türkçe Karekter Sorunu Çözümü için belirtilmistir
	
	include('baglanti.php');
	
	$array=array();//json için dizi tanimladik

	$Gelen_Mahalle_id   =  $_POST['foo'];
	//$Gelen_Mahalle_Ad    =  'HAZNEDAR';



	$yol_ismi    = "Yol";//Burasi Sokak ismi yol olmayanlari getirmesi saglanmistir...

	$i=0;

	 $sql =<<<EOF
      SELECT yol_ismi,yol_id from yol where mahalle_id= '${Gelen_Mahalle_id}' and yol_ismi <> '${yol_ismi}' ;
	  
EOF;

   $ret = pg_query($db, $sql);

   if(!$ret){
   //   echo pg_last_error($db);
      exit;
   } 
  // echo "<br>";
   while($row = pg_fetch_row($ret)){
   
      $array[$i]['sok_adi']=$row[0] ;
	  $array[$i]['sok_id']=$row[1] ;
	  $i=$i+1;
	  	//echo $row[0] ;
		//echo("<br>");
	   }
 
//header('Content-Type: text/html; charset=utf-8');
echo  json_encode($array);

?>