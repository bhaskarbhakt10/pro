<?php

class Database
{

    private $hostname = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "pro";
    private $connection;

    function __construct()
    {
        $this->connection = new mysqli($this->hostname, $this->username, $this->password, $this->database);
    }

    function connect()
    {
        return $this->connection;
    }

    function __destruct()
    {
        return $this->connection->close();
    }
}
