<?php

require_once dirname(__FILE__, 3) . '/database/database.config.php';
require_once dirname(__FILE__, 3) . '/database/database.tables.php';

class Login extends Users
{
    private $username;
    private $password;
    

    function loginGetter($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    function checkLogin(){

        echo $sql = "SELECT * FROM ". USER_TABLE ;
        $results = $this->database->connect()->query($sql);
        if($results->num_rows >0){
            print_r($results);
        }
    }
}
