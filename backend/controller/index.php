<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization");
header('Content-Type: application/json');

require_once dirname(__FILE__ ,2) .'/classes/users/class.users.php';
require_once dirname(__FILE__ ,2) .'/classes/login/class.login.php';


$user = new Users();
$login = new Login();

$data = json_decode(file_get_contents("php://input"), true);

