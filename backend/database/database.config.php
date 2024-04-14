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



    function CreateTable($tableName, $columns = array())
    {

        if (!is_array($columns)) {
            throw new InvalidArgumentException('columns must be an array');
            return false;
        }

        $sql = "CREATE TABLE IF NOT EXISTS " . $tableName . " (";
        foreach ($columns as $col) {

            $sql .= $col . ", ";
        }
        $sql = rtrim($sql, ', ');
        $sql .= ")";
        $result = $this->connect()->query($sql);
        if ($result) {
            return true;
        } else {
            echo "Error creating table: " . $this->connect()->error;
            return false;
        }
    }
    
    function __destruct()
    {
        return $this->connection->close();
    }

   
}
