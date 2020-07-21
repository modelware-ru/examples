<?php

require_once ('vendor/autoload.php');

use App\DB;
use App\Types;
use GraphQL\GraphQL;
use GraphQL\Type\Schema;

try {
    $config = [
        'host' => 'localhost',
        'port' => '3307',
        'database' => 'test_book',
        'username' => 'root',
        'password' => 'root'
    ];

    DB::init($config);

    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];

    $variables = isset($input['variables']) ? $input['variables'] : null;

    $schema = new Schema([
        'query' => Types::query(),
        'mutation' => Types::mutation()
    ]);

//$query = <<< EOF
//query {
//   allAuthors {
//    a_id
//  }
//}
//EOF;
//
//$query = <<< EOF
//mutation {
//   changeAuthorName(id: 1, name: "Name") {
//    a_id
//  }
//}
//EOF;

    $result = GraphQL::executeQuery($schema, $query, null, null, $variables);
    $output = $result->toArray();
} catch (\Exception $e) {
    $output = [
        'errors' => [
            [
                'message' => $e->getMessage()
            ]
        ]
    ];
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($output);