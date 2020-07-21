<?php
namespace App\Type;

use App\Types;
use GraphQL\Type\Definition\InputObjectType;

class InputAuthorType extends InputObjectType
{
    public function __construct()
    {
        $config = [
            'description' => 'Добавление автора',
            'fields' => function() {
                return [
                    'a_name' => [
                        'type' => Types::string(),
                        'description' => 'Имя автора'
                    ],
                ];
            }
        ];
        parent::__construct($config);
    }
}