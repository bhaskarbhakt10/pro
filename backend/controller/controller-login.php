<?php

require_once dirname(__FILE__) . '/index.php';



if (isset($_POST)) {

    $responseArray = array();
    $responseArray['status'] = false;
    $responseArray['is_empty'] = true;
    
    if(array_key_exists('username', $data) && !empty($data['username'])){
        $username = $data['username']; 
    }


    if(array_key_exists('password', $data) && !empty($data['password'])){
        $username = $data['password']; 
    }


    if(!empty($username) && !empty($password)){
        $responseArray['is_empty'] = false;

        $login->checkLogin();

    }

    
    
    
}
