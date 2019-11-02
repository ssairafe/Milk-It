<?php
if (!defined("INTERNAL")) {
  throw new Exception('ERROR NO DIRECT ACCESS');
}

if(empty($_SESSION['cartId'])) {
  print(json_encode([]));
  exit('No cart available');
}

$cartId = intval($_SESSION['cartId']);

$query = mysqli_query($conn,
"SELECT * FROM `products` INNER JOIN `cartItems` ON cartItems.productId = products.id WHERE `cartId`= {$cartId}"
);

$output = [];
while ($row = mysqli_fetch_assoc($query)) {
  $output[] = $row;
}
$output = json_encode($output);
print($output);

?>
