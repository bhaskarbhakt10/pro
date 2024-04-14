<?php

require_once dirname(__FILE__) . '/index.php';

function saveLogo($base64_string)
{
    // Extract the image data from the Base64 string
    if (preg_match('/^data:image\/(\w+);base64,/', $base64_string, $matches)) {
        $image_type = $matches[1];
        $base64_string = preg_replace('/^data:image\/(\w+);base64,/', '', $base64_string);
        $image_data = base64_decode($base64_string);
    } else {
        return false;
    }

    $filename = uniqid() . '.png';
    $folder = dirname(__DIR__) . '/uploads/';
    if (!file_exists($folder)) {
        mkdir($folder, 0777, true);
    }


    $file_path = $folder . $filename;

    return array('filename' => $filename, 'filepath' => $file_path, 'imagedata' => $image_data);
}


if (isset($_POST)) {


    $responseArray = array();
    $responseArray['status'] = false;
    $responseArray['is_empty'] = true;
    $responseArray['empty_field'] = array();


    if (!empty($data['formvalues']) && !empty($data['phone']) && !empty($data['user'])) {

        $base64_string = $data['formvalues']['logo'];
        $image = saveLogo($base64_string);
        // print_r($image);
        if (!empty($base64_string) &&  $image !== false) {
            $data['formvalues']['logo'] = $image['filename'];


            $datajson = json_encode($data['formvalues']);
            $phone = $data['phone'];
            $user = $data['user'];
            $token = $data['token'];


            $cards->CardGetter($user, $phone, $datajson, $token);

            $isInserted = $cards->InsertCardTable();

            if ($isInserted['status'] === true) {

                file_put_contents($image['filepath'], $image['imagedata']);

                $responseArray['status'] = true;
            } else {

                $responseArray['status'] = false;
            }

            $responseArray['msg'] = $isInserted['msg'];
        } else {
            $responseArray['status'] = false;
            $responseArray['msg'] = 'Invalid Image';
        }
    }

    echo json_encode($responseArray);
}
