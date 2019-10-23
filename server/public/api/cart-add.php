<?php
$id = null;
$cartId = null;
$price = null;
$count = null;

if(!defined("INTERNAL")){
  throw new Exception('ERROR NO DIRECT ACCESS');
}

$postArray = getBodyData();

if(empty($postArray['id'])) {
  $postArray = json_encode($postArray);
  print($postArray);
  throw new Exception('ERROR DATA DOES NOT EXIST');
} else {
  $id = intval($postArray['id']);
  $count = intval($postArray['counter']);
    if($id <= 0){
      throw new Exception('ERROR ID IS EMPTY');
    }
  }

if(!array_key_exists('cartId', $_SESSION)) {
 $queryResult = mysqli_query($conn, "INSERT INTO `cart`(created) VALUES (NOW());");
  if (!$queryResult) {
    throw new Exception('ERROR' . mysqli_error($conn));
  }
 $_SESSION['cartId'] = mysqli_insert_id($conn);
 $cartId = $_SESSION['cartId'];
} else {
  $cartId = $_SESSION['cartId'];
}

mysqli_query($conn , "START TRANSACTION");

$priceDataResult =mysqli_query($conn, "SELECT `products`.`price` from `products` WHERE `id`={$id}");
$priceData = mysqli_fetch_assoc($priceDataResult);
$price = $priceData['price'];

$insertQuery = "INSERT INTO `cartItems`(`productID`, `price`, `cartID`, `count`, `added`) VALUES ({$id}, {$price}, {$cartId}, {$count}, NOW())";
$queryInsertResult = mysqli_query($conn,$insertQuery);
if (mysqli_errno($conn)){
  throw new Exception(mysqli_error($conn));
}
if (mysqli_affected_rows($conn) == 0 ){
  mysqli_query($conn, "ROLLBACK");
  throw new Exception('not added to cart');
}

mysqli_query($conn, "COMMIT");
print(json_encode(['success'=>true]));
?>
