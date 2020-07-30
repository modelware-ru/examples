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
                        'description' => 'Идентификатор пользователя',
                        'resolve' => function ($args) {
                            return $args['a_id'] + 1;
                        }
                    ],
                    'a_name' => [
                        'type' => Types::string(),
                        'description' => 'Имя автора',
                        'resolve' => function ($args) {
                            return $args['a_name'];
                        }],
                    'list' => [
                        'type' => Types::listOf(Types::author()),
                        'description' => 'Имена других авторов',
                        'resolve' => function ($args) {
                            $args = [];
                            return [
                                0 =>
                                    [
                                        'a_id' => 1,
                                        'a_name' => '1',
                                    ],
                                1 =>
                                    [
                                        'a_id' => 2,
                                        'a_name' => '2',
                                    ]
                            ];
                        }
                    ]
                ];
            }
        ];
        parent::__construct($config);
    }
}