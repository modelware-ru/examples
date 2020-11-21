<?php

namespace BJ\Shared;

class SessionManager
{
    private static $session = NULL;

    const SESSION_NAME = 'bj';

    private function __construct()
    {
        ini_set('session.cookie_lifetime', 60*60*24*31);
        ini_set('session.gc_maxlifetime', 60*60*24*31);
        ini_set('session.gc_divisor', 1000);
        session_name(SessionManager::SESSION_NAME);
        session_start();
    }

    static public function Start()
    {
        if (is_null(self::$session)) {
            self::$session = new SessionManager();
        }
    }

    static public function GetInstance()
    {
        self::Start();
        return self::$session;
    }

    public function reset()
    {
        $_SESSION = [];
        unset($_COOKIE[session_name()]);
        session_destroy();
        self::$session = NULL;
    }

    public function setValueByKey($key, $value)
    {
        $_SESSION [$key] = $value;
    }

    public function getValueByKey($key)
    {
        if (array_key_exists($key, $_SESSION))
            return $_SESSION [$key];
        else
            return NULL;
    }

    public function deleteValueByKey($key)
    {
        unset($_SESSION [$key]);
    }

}