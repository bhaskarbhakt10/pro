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

        if($loggedIn['status'] === true){

            
            $responseArray['ID'] = $login->getLogInInfo('User_ID');
            $responseArray['f_name'] = $login->getLogInInfo('User_Firstname');
            $responseArray['l_name'] = $login->getLogInInfo('User_Lastname');
            $responseArray['phone_no'] = $login->getLogInInfo('User_PhoneNo');
            $responseArray['email'] = $login->getLogInInfo('User_Email');
            $responseArray['u_name'] = $login->getLogInInfo('User_Username');
        }
    }

    echo json_encode($responseArray);
}
