<?php
startup();

require_once ('db_connection.php');

 if(!$conn){
   die("Error:". mysqli_connect_error());
 }

if (empty($_GET['id'])) {
  $whereClause = '';
} else if(is_numeric($_GET['id'])) {
  $whereClause = "WHERE id = {$_GET['id']}";
} else{
  die('Non-Numeric');
}

$query = "SELECT * FROM `products`";
$query = $query . $whereClause;
$result = mysqli_query($conn, $query);

if (!$result){
  throw new Exception('ERROR'.mysqli_error(''));
}

$output = [];

while ($row = $result->fetch_assoc()){
  $output[] = $row;
}

if($output === [] and is_numeric($_GET['id'])){
  $output[] = "invalid id";
}

$output = json_encode($output);
print($output);

function startup(){
  header("Content-type:application/json");
}
?>
