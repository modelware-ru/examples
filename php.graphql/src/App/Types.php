<?php

namespace App;

use App\Type\QueryType;
use App\Type\MutationType;
use App\Type\AuthorType;
use App\Type\InputAuthorType;
use GraphQL\Type\Definition\Type;

class Types
{
    private static $query;
    private static $mutation;

    private static $author;
    private static $inputAuthor;

    public static function query()
    {
        return self::$query ?: (self::$query = new QueryType());
    }

    public static function mutation()
    {
        return self::$mutation ?: (self::$mutation = new MutationType());
    }

    public static function author()
    {
        return self::$author ?: (self::$author = new AuthorType());
    }

    public static function inputAuthor()
    {
        return self::$inputAuthor ?: (self::$inputAuthor = new InputAuthorType());
    }

    public static function int()
    {
        return Type::int();
    }

    public static function string()
    {
        return Type::string();
    }

    public static function listOf($type)
    {
        return Type::listOf($type);
    }
}