<?php
require_once 'functions.php';
header('Content-Type: application/json');

set_exception_handler('errorHandler');


$output = file_get_contents('dummy-products-list.json');
print($output);

?>
