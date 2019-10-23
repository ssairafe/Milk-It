<?php
if (!defined("INTERNAL")) {
  throw new Exception('ERROR NO DIRECT ACCESS');
}

$cartId = intval($_SESSION['cartId']);

$query = mysqli_query($conn,
"DELETE FROM `cartItems` WHERE `cartItems`.`cartId`= {$cartId}"
);

$output = [];
while ($row = mysqli_fetch_assoc($query)) {
  $output[] = $row;
}
$output = json_encode($output);
print($output);
