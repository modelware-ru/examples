<?php

namespace App\Type;

use App\DB;
use App\Types;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;

class QueryType extends ObjectType
{
    public function __construct()
    {
        $config = [
            'fields' => function () {
                return [
                    'hello' => [
                        'type' => Types::string(),
                        'description' => 'Возвращает приветствие',
                        'resolve' => function () {
                            return 'Привет, GraphQL!';
                        }
                    ],
                    'author' => [
                        'type' => Types::author(),
                        'description' => 'Возвращает автора по id',
                        'args' => [
                            'id' => Types::int()
                        ],
                        'resolve' => function ($root, $args) {
                            return DB::selectOne("SELECT * from authors WHERE a_id = {$args['id']}");
                        }
                    ],
                    'allAuthors' => [
//                        'type' => Types::listOf(Types::author()),
                        'type' => Types::combine(),
                        'description' => 'Список авторов',
                        'resolve' => function () {
//                            return DB::select('SELECT * from authors');
                            return [
                                'a_id' => 1,
                                'a_name' => 'a_name',
                                'something' => 100,
                            ];
                        }
                    ],
                    'combine' => [
                        'type' => Types::combine(),
                        'description' => 'Список авторов',
                        'resolve' => function ($root, $args, $context, ResolveInfo $info) {
                            $ret = [
                                'a_id' => 1,
                                'a_name' => 'name',
                                'list' => [
                                    [
                                        'a_id' => 1,
                                        'a_name' => 'name',
                                    ],
                                ]
                            ];
                            return $ret;
                        }

                    ]
                ];
            }
        ];
        parent::__construct($config);
    }
}