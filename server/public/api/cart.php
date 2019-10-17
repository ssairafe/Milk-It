<?php
define("INTERNAL", true);
require_once ('functions.php');
session_start();
startup();
set_exception_handler('errorHandler');
require_once ('db_connection.php');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
  require ('cart-get.php');
} else if ($method == 'POST') {
  http_response_code(201);
  require ('cart-add.php');
} else {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/cart.php"
  ]));
}

?>
