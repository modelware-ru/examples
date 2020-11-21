<?php

namespace BJ\Model;

use BJ\Shared\DataBaseManager;

const PAGE_SIZE = 3;

class TaskModel
{
    private $db;

    function __construct()
    {
        $this->db = DataBaseManager::GetConnection();
    }

    function getTaskList($page, $sortName, $sortType)
    {
        $orderStmt = '';
        if (!empty($sortName)) {
            switch ($sortName) {
                case 'name':
                    $orderStmt = " ORDER BY name {$sortType}";
                    break;
                case 'email':
                    $orderStmt = " ORDER BY email {$sortType}";
                    break;
                case 'status':
                    $orderStmt = " ORDER BY is_completed {$sortType}";
                    break;
                default:
                    break;
            }
        }
        $stmt = 'SELECT id, name, email, text, is_completed, is_updated FROM task' .
            $orderStmt .
            ' LIMIT :offset, :limit';

        return $this->db->select($stmt, [
            'offset' => ($page - 1) * PAGE_SIZE,
            'limit' => PAGE_SIZE,
        ]);
    }

    function getTaskPager($page)
    {
        $stmt = 'SELECT count(id) count FROM task';
        $recordDb = $this->db->select($stmt);

        $count = $recordDb[0]['count'];
        return [
            'from' => min(($page - 1) * PAGE_SIZE + 1, $count),
            'to' => min($page * PAGE_SIZE, $count),
            'count' => $count,
            'firstPage' => ($page > 1) ? 1 : 0,
            'prevPage' => ($page > 1) ? ($page - 1) : 0,
            'nextPage' => ($page * PAGE_SIZE < $count) ? ($page + 1) : 0,
            'lastPage' => ($page * PAGE_SIZE < $count) ? intval(ceil($count / ($page * PAGE_SIZE))) : 0,
        ];
    }

    function getTask($id)
    {
        $stmt = 'SELECT id, name, email, text, is_completed, is_updated' .
            ' FROM task' .
            ' WHERE id = :id';

        return $this->db->select($stmt, ['id' => $id]);
    }

    function updateTask($id, $text, $isCompleted, $isUpdated)
    {
        $stmt = 'UPDATE task SET text = :text, is_completed = :isCompleted, is_updated = :isUpdated WHERE id = :id';

        return $this->db->update($stmt, [
            0 => ['id' => $id,
                'text' => $text,
                'isCompleted' => $isCompleted === 'on' ? 'Y' : 'N',
                'isUpdated' => $isUpdated ? 'Y' : 'N',
            ],
        ]);
    }

    function addTask($text, $name, $email)
    {
        $stmt = 'INSERT INTO task (text, name, email) VALUES (:text, :name, :email)';

        return $this->db->insert($stmt, [0 =>
            [
                'text' => $text,
                'name' => $name,
                'email' => $email,
            ]
        ]);
    }

}