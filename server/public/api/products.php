<?php
require_once ('functions.php');
set_exception_handler('errorHandler');
startup();

require_once ('db_connection.php');

if (empty($_GET['id'])) {

  $query = "SELECT * FROM `products`";
  $result = mysqli_query($conn, $query);
    if(!$result){
      throw new Exception('ERROR' . mysqli_error(''));
    }
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      $output[] = $row;
    }
    $output = json_encode($output);
    print($output);

} else {
    if (!is_numeric($_GET['id'])) {
      throw new Exception('ID must be numeric');
    }
    $query = "SELECT * FROM `products` WHERE id = {$_GET['id']}";
    $result = mysqli_query($conn, $query);
    if (!$result) {
      throw new Exception('ERROR' . mysqli_error(''));
    }
     $row = mysqli_fetch_assoc($result);
     if ($row === null){
       throw new Exception('Invalid Id');
     }
    $output = json_encode($row);
    print($output);
}

?>
