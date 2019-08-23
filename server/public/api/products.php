<?php
startup();

require_once ('db_connection.php');

 if(!$conn){
   die("Error:". mysqli_connect_error());
 }

$query = "SELECT * FROM `products`";
$result = mysqli_query($conn, $query);

if (!$result){
  throw new Exception('ERROR'.mysqli_error(''));
}

$output = [];

while ($row = $result->fetch_assoc()){
  $output[] = $row;
}

$output = json_encode($output);
print($output);

function startup(){
  header("Content-type:application/json");
}
?>
