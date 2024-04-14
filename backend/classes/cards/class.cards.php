<?php

require_once dirname(__FILE__, 3) . '/database/database.config.php';
require_once dirname(__FILE__, 3) . '/database/database.tables.php';


class Cards


{

    protected $database;


    private $userID, $phoneNo, $cardsjson, $token;

    function __construct()
    {
        $this->database =  new Database();
        $this->CreateTableCards();
    }

    private function CreateTableCards()
    {
        $columns = array(
            'Card_SrNo INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY',
            'Card_cardID VARCHAR(255) NOT NULL UNIQUE',
            'Card_userID VARCHAR(255) NOT NULL',
            'Card_phone VARCHAR(255) NOT NULL',
            'Card_token LONGTEXT NOT NULL',
            'Card_card LONGTEXT NOT NULL',
            'Card_isActiveCard BIT(1)',
            'Card_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        );

        return $this->database->CreateTable(CARDS_TABLE, $columns);
    }

    private function GenCardId()
    {
        $sql = "SELECT * FROM " . CARDS_TABLE;
        $results = $this->database->connect()->query($sql);
        $userID = "CARD/";
        if ($results->num_rows === 0) {
            $userID .= 1;
        } else {

            $userID .= $results->num_rows + 1;
        }

        return $userID;
    }

    function CardGetter($userID, $phoneNo, $cardsjson, $token)
    {

        $this->userID = $this->database->connect()->real_escape_string($userID);
        $this->phoneNo = $this->database->connect()->real_escape_string($phoneNo);
        $this->cardsjson = $this->database->connect()->real_escape_string($cardsjson);
        $this->token = $this->database->connect()->real_escape_string($token);
    }


    public function checkOneActiveCardExistsForUser()
    {

        $sql = "SELECT * FROM " . CARDS_TABLE . " WHERE Card_userID='" . $this->userID . "' AND Card_isActiveCard=1 ";
        $results = $this->database->connect()->query($sql);
        // print_r($results);
        if ($results->num_rows > 0 && $results->num_rows === 1) {
            return true;
        } else {
            return false;
        }
    }


    public function InsertCardTable()
    {

        $cardId = $this->GenCardId();

        if ($this->checkOneActiveCardExistsForUser()) {
            $activeCard = 0;
        } else {
            $activeCard = 1;
        }

        // echo $activeCard;

        $sql = "INSERT INTO " . CARDS_TABLE . " (Card_cardID,Card_userID,Card_phone,Card_token,Card_card, Card_isActiveCard) VALUES ('" . $cardId . "','" . $this->userID . "','" . $this->phoneNo . "','" . $this->token . "','" . $this->cardsjson . "'," . $activeCard . ")";

        $results = $this->database->connect()->query($sql);
        // $results = false;

        if ($results) {
            return array('status' => true, 'msg' => 'Card Added Successfully');
        } else {
            return array('status' => false, 'msg' => 'Error Adding Card');
        }
    }

    public function ShowMyCard($phoneNo)
    {
       $sql = "SELECT * FROM " . CARDS_TABLE . " WHERE Card_phone='$phoneNo' AND Card_isActiveCard=1";
        $results = $this->database->connect()->query($sql);
        if ($results) {
            return array('status' => true, 'msg' => 'Card Found', 'data' => $results);
        } else {
            return array('status' => false, 'msg' => 'Card Not Found');
        }
    }
}
