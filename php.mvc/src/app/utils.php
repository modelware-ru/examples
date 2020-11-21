<?php
namespace BJ\Utils;

function ProcessView($name, $data)
{
    ob_start();
    require "{$name}";
    $res = ob_get_contents();
    ob_end_clean();
    return $res;
}

function GetPasswordHash($password, $salt)
{
    return crypt($password, $salt);
}