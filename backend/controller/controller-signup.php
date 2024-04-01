<?php

require_once dirname(__FILE__) . '/index.php';


if (isset($_POST)) {

    // print_r($data);
    $first_name = $last_name = $email = $username = $password = null;

    $responseArray = array();
    $responseArray['status'] = false;
    $responseArray['is_field_empty'] = true;
    $responseArray['empty_field'] = array();

    

    if (array_key_exists('first_name', $data) && !empty($data['first_name'])) {
        $first_name = $data['first_name'];
    } else {
        array_push($responseArray['empty_field'], 'first_name');
    }


    if (array_key_exists('last_name', $data) && !empty($data['last_name'])) {
        $last_name = $data['last_name'];
    } else {
        array_push($responseArray['empty_field'], 'last_name');
    }

    if (array_key_exists('email', $data) && !empty($data['email'])) {
        $email = $data['email'];
    } else {

        array_push($responseArray['empty_field'], 'email');
    }

    if (array_key_exists('phone_number', $data) && !empty($data['phone_number'])) {
        $phone_number = $data['phone_number'];
    } else {
        array_push($responseArray['empty_field'], 'phone_number');
    }

    if (array_key_exists('username', $data) && !empty($data['username'])) {
        $username = $data['username'];
    } else {

        array_push($responseArray['empty_field'], 'username');
    }

    if (array_key_exists('password', $data) && !empty($data['password'])) {
        $password = $data['password'];
    } else {
        array_push($responseArray['empty_field'], 'password');
    }


    if (
        !empty($first_name) && !empty($last_name) && !empty($email) && !empty($phone_number) && !empty($username) && !empty($password)
    ) {
        $responseArray['is_field_empty'] = false;

        $user->UserInfo($first_name, $last_name, $email, $phone_number, $username, $password);
        $insert = $user->InsertUserTable();
        if (is_array($insert) && $insert['status'] === true) {
            $responseArray['status'] = true;
            $responseArray['msg'] = $insert['msg'];
        } else {
            $responseArray['status'] = false;
            $responseArray['msg'] = $insert['msg'];
            
        }
    }

    echo json_encode($responseArray);
}
