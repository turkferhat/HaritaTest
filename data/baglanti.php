<?php
   $host        = "host=127.0.0.1";//Normalde 127.0.0.1
   $port        = "port=5432";
   $dbname      = "dbname=GungorenYeniDB";
   $credentials = "user=postgres password=anka";

   $db2 = pg_connect( "$host $port $dbname $credentials"  );
   if(!$db){
     // echo "Error : Unable to open database\n";
   } else {
     echo "Opened database successfully\n";
   }
   
   try {
            $db = new PDO("pgsql:dbname=GungorenYeniDB;host=localhost", "postgres", "anka" );
         //  echo "PDO connection!";
        }
    catch(PDOException $e)
        {
         // echo $e->getMessage();
        }
?>
