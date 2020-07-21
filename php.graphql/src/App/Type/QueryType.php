<?php

namespace App\Type;

use App\DB;
use App\Types;
use GraphQL\Type\Definition\ObjectType;

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
                        'type' => Types::listOf(Types::author()),
                        'description' => 'Список авторов',
                        'resolve' => function () {
                            return DB::select('SELECT * from authors');
                        }
                    ]
                ];
            }
        ];
        parent::__construct($config);
    }
}