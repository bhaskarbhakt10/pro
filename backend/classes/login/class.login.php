<?php

require_once dirname(__FILE__, 3) . '/database/database.config.php';
require_once dirname(__FILE__, 3) . '/database/database.tables.php';
require_once dirname(__FILE__, 3) . '/classes/users/class.users.php';

class Login extends Users
{
    private $username;
    private $password;


    function loginGetter($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    function checkLogin()
    {

        $emailUsername = $this->checkUserExists('User_Email', $this->username);
        $phoneUsername = $this->checkUserExists('User_PhoneNo', $this->username);
        $userUsername = $this->checkUserExists('User_Username', $this->username);


        if ($emailUsername === true || $phoneUsername === true || $userUsername === true) {

            if ($emailUsername === true) {
                $columnTofind = "User_Email";
            } else if ($phoneUsername === true) {
                $columnTofind = "User_PhoneNo";
            } else if ($userUsername === true) {
                $columnTofind = "User_Username";
            } else {
                return array('status' => false, 'msg' => 'No User Data Found with Username');
            }


            $loggingUserData = $this->getUserData($columnTofind, $this->username);
            if (!empty($loggingUserData)) {
                if ($loggingUserData['User_Password'] === md5($this->password)) {
                    return array('status' => true, 'msg' => 'User Logged In Sucessfully');
                } else {

                    return array('status' => false, 'msg' => 'Incorrect Password');
                }
            } else {

                return array('status' => false, 'msg' => 'No User Data Found');
            }
        }
    }
}
