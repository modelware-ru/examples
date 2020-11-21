<?php

namespace BJ\Shared;


class MessageManager
{
    public const ERR_SOMETHING_WRONG = 'ERR_SOMETHING_WRONG';
    public const ERR_NOT_ENOUGH_DATA = 'ERR_NOT_ENOUGH_DATA';
    public const ERR_WRONG_NAME_OR_PASSWORD = 'ERR_WRONG_NAME_OR_PASSWORD';
    public const ERR_ACCESS_VIOLATION = 'ERR_ACCESS_VIOLATION';
    public const ERR_WRONG_TASK_ID = 'ERR_WRONG_TASK_ID';
    public const ERR_WRONG_DATA = 'ERR_WRONG_DATA';

    static function GetMessage($code)
    {
        static $messages = [
            'ERR_SOMETHING_WRONG' => 'Что-то пошло не так',
            'ERR_NOT_ENOUGH_DATA' => 'Введите все данные',
            'ERR_WRONG_NAME_OR_PASSWORD' => 'Неправильное имя или пароль',
            'ERR_ACCESS_VIOLATION' => 'Нарушение прав доступа',
            'ERR_WRONG_TASK_ID' => 'Задача не найдена',
            'ERR_WRONG_DATA' => 'Неправильные данные',
//    ERR_EXCEPTION => 'Исключение',
//    ERR_DB_CONNECTION => 'Ошибка при работе с базой данных',
//    ERR_DB_SQL_ERROR => 'Ошибка при выполнении SQL запроса',
//    ERR_SESSION_EXPIRED => 'Сессия закончилась',
//    ERR_ACCESS_VIOLATION => ,
        ];

        return isset($messages[$code]) ? $messages[$code] : '--NO-MESSAGE--';
    }
}

