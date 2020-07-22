<?php

namespace App\Type;

use App\DB;
use App\Types;
use GraphQL\Type\Definition\ObjectType;

class CombineType extends ObjectType
{
    public function __construct()
    {
        $config = [
            'description' => 'Автор',
            'fields' => function () {
                return [
                    'a_id' => [
                        'type' => Types::int(),
                        'description' => 'Идентификатор пользователя'
                    ],
                    'a_name' => [
                        'type' => Types::string(),
                        'description' => 'Имя автора'
                    ],
                    'list' => [
                        'type' => Types::listOf(Types::author()),
                        'description' => 'Имена других авторов'
                    ]
                ];
            }
        ];
        parent::__construct($config);
    }
}