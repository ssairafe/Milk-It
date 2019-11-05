<?php
if (!defined("INTERNAL")) {
  throw new Exception('ERROR NO DIRECT ACCESS');
}

$cartId = intval($_SESSION['cartId']);

$postArray = getBodyData();

if(empty($postArray['id'])) {
  $query = mysqli_query($conn,
"DELETE FROM `cartItems` WHERE `cartItems`.`cartId`= {$cartId}"
);
$output = [];
while ($row = mysqli_fetch_assoc($query)) {
  $output[] = $row;
}
$output = json_encode($output);
print($output);
} else {
  $id = $postArray['id'];
 mysqli_query($conn,
"DELETE FROM `cartItems` WHERE (`cartItems`.`cartId`= $cartId) AND (`id`=$id);"
);
$query= mysqli_query($conn, "SELECT * FROM `products` INNER JOIN `cartItems` ON cartItems.productId = products.id WHERE `cartId`= $cartId"
);
$output = [];
while ($row = mysqli_fetch_assoc($query)) {
  $output[] = $row;
}
$output = json_encode($output);
print($output);
    }
