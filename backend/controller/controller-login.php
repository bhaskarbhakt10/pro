<?php

require_once dirname(__FILE__) . '/index.php';




if (isset($_POST)) {


    $responseArray = array();
    $responseArray['status'] = false;
    $responseArray['is_empty'] = true;
    $responseArray['empty_field'] = array();

    if (array_key_exists('username', $data) && !empty($data['username'])) {
        $username = $data['username'];
    }
    else{

        array_push($responseArray['empty_field'], 'username');
    }


    if (array_key_exists('password', $data) && !empty($data['password'])) {
        $password = $data['password'];
    } else {
        array_push($responseArray['empty_field'], 'password');
    }


    if (!empty($username) && !empty($password)) {
        $responseArray['is_empty'] = false;

        $login->loginGetter($username, $password);
        $loggedIn = $login->checkLogin();

        $responseArray['status'] = $loggedIn['status'];
        $responseArray['msg'] = $loggedIn['msg'];
    }

    echo json_encode($responseArray);
}
