<?php
namespace App\Type;

use App\DB;
use App\Types;
use GraphQL\Type\Definition\ObjectType;

class MutationType extends ObjectType
{
    public function __construct()
    {
        $config = [
            'fields' => function () {
                return [
                    'changeAuthorName' => [
                        'type' => Types::author(),
                        'description' => 'Изменение имени автора',
                        'args' => [
                            'id' => Types::int(),
                            'name' => Types::string()
                        ],
                        'resolve' => function ($root, $args) {
                            DB::update("UPDATE authors SET a_name = '{$args['name']}' WHERE a_id = {$args['id']}");

                            $author = DB::selectOne("SELECT * from authors WHERE a_id = {$args['id']}");
                            if (is_null($author)) {
                                throw new \Exception('Нет пользователя с таким id');
                            }
                            return $author;
                        }
                    ],
                    'addAuthor' => [
                        'type' => Types::author(),
                        'description' => 'Добавление пользователя',
                        'args' => [
                            'author' => Types::inputAuthor()
                        ],
                        'resolve' => function ($root, $args) {
                            $userId = DB::insert("INSERT INTO authors (a_name) VALUES ('{$args['author']['a_name']}')");
                            return DB::selectOne("SELECT * from authors WHERE a_id = $userId");
                        }
                    ]
                ];
            }
        ];
        parent::__construct($config);
    }
}