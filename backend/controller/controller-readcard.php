<?php

require_once dirname(__FILE__) . '/index.php';

if (isset($_POST)) {

    // print_r($data);

    $response = array();
    $response['status']  = false;
    $response['msg']  = "Nothing Found";
    
    $phoneNumber = $data['search'];
    if (!empty($phoneNumber)) {
        $cardData = $cards->ShowMyCard($phoneNumber);
        if ($cardData['status'] === true) {
            
            if ($cardData['data']->num_rows > 0) {
                $response['status']  = true;
                $response['msg']  = "card Found";
                $response['data']  =  array();
                // $response['data']  =  array();
                $response['image_url'] = $root_url = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/pro/backend/uploads/';

                while ($row = $cardData['data']->fetch_assoc()) {
                   
                    $response['data'] = $row['Card_card'];
                    
                }
            }
        }
    }


    echo json_encode($response);
}
