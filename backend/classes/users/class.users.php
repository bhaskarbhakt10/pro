<?php

require_once dirname(__FILE__, 3) . '/database/database.config.php';
require_once dirname(__FILE__, 3) . '/database/database.tables.php';


class Users
{

    private $database;

    private $userID;
    private $firstname;
    private $lastname;
    private $email;
    private $phoneno;
    private $username;
    private $password;

    function __construct()
    {
        $this->database =  new Database();
        $this->CreateTableUser();
    }

    private function CreateTableUser()
    {


        $columns = array(
            'User_SrNo INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY',
            'User_ID VARCHAR(255) NOT NULL UNIQUE',
            'User_Firstname VARCHAR(255) NOT NULL',
            'User_Lastname VARCHAR(255) NOT NULL',
            'User_Email VARCHAR(255) NOT NULL UNIQUE',
            'User_PhoneNo VARCHAR(15) NOT NULL UNIQUE',
            'User_Username VARCHAR(255) NOT NULL',
            'User_Password LONGTEXT NOT NULL',
            'User_Status BIT(1) DEFAULT 1',
            'User_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        );

        return $this->database->CreateTable(USER_TABLE, $columns);
    }

    private function GenUserId()
    {
        $sql = "SELECT * FROM " . USER_TABLE;
        $results = $this->database->connect()->query($sql);
        $userID = "USR/";
        if ($results->num_rows === 0) {
            $userID .= 1;
        } else {

            $userID .= $results->num_rows + 1;
        }

        return $userID;
    }

    public function UserInfo($firstname, $lastname, $email, $phoneno, $username, $password)
    {
        $this->userID = $this->GenUserId();
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->phoneno = $phoneno;
        $this->username = $username;
        $this->password = md5($password);
    }

    public function checkUserExists($columns, $value)
    {

        $sql = "SELECT * FROM " . USER_TABLE . " WHERE " . $columns . "='" . $value . "' AND User_Status=1 ";
        $results = $this->database->connect()->query($sql);
        if ($results->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function InsertUserTable()
    {

        $checkEmail = $this->checkUserExists('User_Email', $this->email);
        $checkPhoneNumber = $this->checkUserExists('User_PhoneNo', $this->phoneno);

        if ($checkEmail === false && $checkPhoneNumber === false) {


            $sql = "INSERT INTO " . USER_TABLE . " (User_ID,User_Firstname,User_Lastname,User_Email,User_PhoneNo,User_Username,User_Password) VALUES ('" . $this->userID . "','" . $this->firstname . "','" . $this->lastname . "','" . $this->email . "','" . $this->phoneno . "','" . $this->username . "','" . $this->password . "')";

            $results = $this->database->connect()->query($sql);

            if ($results) {
                return array('status'=> true,'msg'=>'User Added Sucessfully');
            } else {
                return array('status'=> false,'msg'=>'Error Adding User');
            }
        }
        else{
            return array('status'=> false,'msg'=>'User Alreday Exist With Email and Phone No.');
        }
    }
}
