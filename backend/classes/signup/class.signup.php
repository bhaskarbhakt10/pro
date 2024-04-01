<?php

require_once dirname(__FILE__ ,3) .'/database/database.config.php';
require_once dirname(__FILE__ ,3) .'/database/database.tables.php';


class Signup{

    private $database ;

    function __construct()
    {
        $database =  new Database();
    }



}
