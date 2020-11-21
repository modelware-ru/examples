<?php

namespace BJ\Controller;

use BJ\Model\PersonModel;
use BJ\Model\TaskModel;

use BJ\Shared\MessageManager;
use BJ\Shared\SessionManager;
use BJ\View\AuthView;
use BJ\View\MessageView;
use BJ\View\TaskView;
use function BJ\Utils\GetPasswordHash;


class TaskController implements IController
{
    public const NAME = 'task';

    private $options;
    private $isAdmin;

    function __construct($options, $isAdmin)
    {
        $this->options = $options;
        $this->isAdmin = $isAdmin;
    }

    function run()
    {
        switch ($this->options['action']) {
            case 'add':
                return $this->add();
            case 'update':
                return $this->update();
            case 'showUpdateForm':
                return $this->showUpdateForm();
            case 'showAddForm':
            default:
                return $this->showAddForm();
        }
    }

    private function add()
    {
        $name = isset($this->options['name']) ? $this->options['name'] : '';
        $email = isset($this->options['email']) ? $this->options['email'] : '';
        $text = isset($this->options['text']) ? $this->options['text'] : '';

        if (empty($name) || empty($email) || empty($text)) {
            $viewData = [
                'title' => 'Task',
                'isAdmin' => $this->isAdmin,
                'action' => 'showAddForm',
                'id' => 0,
                'name' => $name,
                'email' => $email,
                'text' => $text,
                'error' => MessageManager::GetMessage(MessageManager::ERR_NOT_ENOUGH_DATA),
            ];
            return (new TaskView($viewData))->show();
        }

        if (!self::checkTaskData($text, $name, $email)) {
            $viewData = [
                'title' => 'Task',
                'isAdmin' => $this->isAdmin,
                'action' => 'showAddForm',
                'id' => 0,
                'name' => $name,
                'email' => $email,
                'text' => $text,
                'error' => MessageManager::GetMessage(MessageManager::ERR_WRONG_DATA),
            ];
            return (new TaskView($viewData))->show();
        }

        $taskModel = new TaskModel();
        $taskModel->addTask($text, $name, $email);

        return (Factory::Create(TaskListController::NAME, []))->run();
    }

    private function update()
    {
        $id = isset($this->options['id']) ? intval($this->options['id']) : 0;
        $text = isset($this->options['text']) ? $this->options['text'] : '';
        $isCompleted = isset($this->options['isCompleted']) ? $this->options['isCompleted'] : 'off';

        if (empty($text)) {
            $viewData = [
                'title' => 'Task',
                'isAdmin' => $this->isAdmin,
                'action' => 'showUpdateForm',
                'id' => $this->options['id'],
                'text' => $text,
                'error' => MessageManager::GetMessage(MessageManager::ERR_NOT_ENOUGH_DATA),
            ];
            return (new TaskView($viewData))->show();
        }

        if (!self::checkTaskData($text)) {
            $viewData = [
                'title' => 'Task',
                'isAdmin' => $this->isAdmin,
                'action' => 'showUpdateForm',
                'id' => $this->options['id'],
                'text' => $text,
                'error' => MessageManager::GetMessage(MessageManager::ERR_WRONG_DATA),
            ];
            return (new TaskView($viewData))->show();
        }

        $taskModel = new TaskModel();
        $taskDb = $taskModel->getTask($id);
        if (count($taskDb) !== 1) {
            $viewData = [
                'title' => 'Message',
                'text' => MessageManager::GetMessage(MessageManager::ERR_WRONG_TASK_ID),
            ];

            return (new MessageView($viewData))->show();
        }

        $isUpdated = $taskDb[0]['is_updated'] === 'Y' || $taskDb[0]['text'] !== $text;
        $taskModel->updateTask($id, $text, $isCompleted, $isUpdated);

        return (Factory::Create(TaskListController::NAME, []))->run();
    }

    private function showAddForm()
    {
        $viewData = [
            'title' => 'Task',
            'isAdmin' => $this->isAdmin,
            'action' => $this->options['action'],
            'id' => 0,
            'name' => '',
            'email' => '',
            'text' => '',
        ];

        return (new TaskView($viewData))->show();
    }

    private function showUpdateForm()
    {
        $taskModel = new TaskModel();
        $taskDb = $taskModel->getTask($this->options['id']);
        if (count($taskDb) !== 1) {
            $viewData = [
                'title' => 'Message',
                'text' => MessageManager::GetMessage(MessageManager::ERR_WRONG_TASK_ID),
            ];

            return (new MessageView($viewData))->show();
        }

        $viewData = [
            'title' => 'Task',
            'isAdmin' => $this->isAdmin,
            'action' => $this->options['action'],
            'id' => $this->options['id'],
            'text' => $taskDb[0]['text'],
            'isCompleted' => $taskDb[0]['is_completed'] === 'Y',
        ];

        return (new TaskView($viewData))->show();
    }

    private static function checkTaskData($text, $name = 'ok', $email = 'ok@mail.com')
    {
        if (strlen($name) > 50) return false;
        if (strlen($email) > 50) return false;
        if (strlen($text) > 2000) return false;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;

        return true;
    }
}
