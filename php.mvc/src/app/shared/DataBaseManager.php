<?php

namespace BJ\Shared;

class ErrDbException extends \RuntimeException
{
}

class DataBaseManager
{
    private static $manager = NULL;

    private $pdo;

    public static function GetConnection()
    {
        if (empty(self::$manager)) {

            self::$manager = new DataBaseManager();

            $dsn = 'mysql:host=localhost;port=3307;dbname=beejee;charset=UTF8';
            $user = 'root';
            $password = 'root';
            $driverOpts = [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                \PDO::ATTR_EMULATE_PREPARES => false,
                \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'",
            ];

            self::$manager->pdo = new \PDO($dsn, $user, $password, $driverOpts);
        }

        return self::$manager;
    }

    public function select($stmt, $vars = [])
    {
        $q = $this->pdo->prepare($stmt);

        if ($q->execute($vars) === FALSE) {
            throw new ErrDbException($stmt);
        };

        return $q->fetchAll();
    }

    public function insert($stmt, $vars, $const_vars = [])
    {
        $ids = [];

        $q = $this->pdo->prepare($stmt);

        foreach ($vars as $index => $var) {
            if ($index === 0) {

                foreach ($const_vars as $k => $v) {
                    $q->bindValue(':' . $k, $v);
                }

                $data = [];
                $i = 0;
                foreach ($vars[0] as $k => $v) {
                    $data[$i] = $v;
                    $q->bindParam(':' . $k, $data[$i]);
                    $i++;
                }

            } else {
                $i = 0;
                foreach ($var as $v) {
                    $data[$i++] = $v;
                }
            }

            if ($q->execute() === FALSE) {
                throw new ErrDbException($stmt);
            };

            $ids[] = $this->pdo->lastInsertId();
        }
        return $ids;
    }

    public function delete($stmt, $vars = [])
    {
        $q = $this->pdo->prepare($stmt);

        if ($q->execute($vars) === FALSE) {
            throw new ErrDbException($stmt);
        }

        return $q->rowCount();
    }

    public function update($stmt, $vars, $const_vars = [])
    {
        $count = 0;

        $q = $this->pdo->prepare($stmt);

        foreach ($vars as $index => $var) {
            if ($index === 0) {

                foreach ($const_vars as $k => $v) {
                    $q->bindValue(':' . $k, $v);
                }

                $data = [];
                $i = 0;
                foreach ($vars[0] as $k => $v) {
                    $data[$i] = $v;
                    $q->bindParam(':' . $k, $data[$i]);
                    $i++;
                }

            } else {
                $i = 0;
                foreach ($var as $v) {
                    $data[$i++] = $v;
                }
            }

            if ($q->execute() === FALSE) {
                throw new ErrDbException($stmt);
            }

            $count = $count + $q->rowCount();
        }

        return $count;
    }

}
