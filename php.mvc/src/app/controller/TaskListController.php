<?php

namespace BJ\Controller;

use BJ\Model\PersonModel;
use BJ\Model\TaskModel;

use BJ\View\TaskListView;


class TaskListController implements IController
{
    public const NAME = 'tasklist';

    private $page;
    private $sortName;
    private $sortType;
    private $isAdmin;

    function __construct($page, $sortName, $sortType, $isAdmin)
    {
        $this->page = $page;
        $this->sortName = $sortName;
        $this->sortType = $sortType;
        $this->isAdmin = $isAdmin;
    }

    function run()
    {
        $taskModel = new TaskModel();

        $taskListDb = $taskModel->getTaskList($this->page, $this->sortName, $this->sortType);
        $taskList = [];
        foreach ($taskListDb as $row) {
            $taskList[] = [
                'id' => $row['id'],
                'text' => htmlspecialchars($row['text']),
                'isCompleted' => $row['is_completed'] === 'Y',
                'isUpdated' => $row['is_updated'] === 'Y',
                'name' => htmlspecialchars($row['name']),
                'email' => htmlspecialchars($row['email']),
            ];
        }

        $taskPager = $taskModel->getTaskPager($this->page);

        $viewData = [
            'title' => 'TaskList',
            'isAdmin' => $this->isAdmin,
            'taskListInfo' => [
                'page' => $this->page,
                'sortName' => $this->sortName,
                'sortType' => $this->sortType,
            ],
            'taskList' => $taskList,
            'taskPager' => $taskPager,
        ];

        return (new TaskListView($viewData))->show();
    }
}
