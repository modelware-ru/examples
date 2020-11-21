<?php

namespace BJ\Model;

use BJ\Shared\DataBaseManager;

class PersonModel {

    private $db;

    function __construct()
    {
        $this->db = DataBaseManager::GetConnection();
    }

    function getPersonByLogin($login) {
        $stmt = 'SELECT id, password, salt FROM person WHERE login = :login';
        return $this->db->select($stmt, ['login' => $login]);
    }


}