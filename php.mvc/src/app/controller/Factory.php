<?php

namespace BJ\Controller;

use BJ\Shared\MessageManager;
use BJ\Shared\SessionManager;

class Factory
{
    public static function Create($controllerName, $options): IController
    {
        if (isset($_REQUEST['controllerName']) && $controllerName !== $_REQUEST['controllerName']) {
            header("Location: /index.php?controllerName={$controllerName}");
            exit;
        }

        $isAdmin = !empty(SessionManager::GetInstance()->getValueByKey('person'));

        switch ($controllerName) {
            case TaskListController::NAME:
                $page = isset($options['page']) ? intval($options['page']) : 1;
                if ($page === 0) $page = 1;

                $sortName = isset($options['sort_name']) ? $options['sort_name'] : '';
                if (!empty($sortName) && !in_array($sortName, ['name', 'email', 'status'])) $sortName = '';

                $sortType = isset($options['sort_type']) ? $options['sort_type'] : '';
                if (!empty($sortType) && !in_array($sortType, ['asc', 'desc'])) $sortType = '';

                return new TaskListController($page, $sortName, $sortType, $isAdmin);
            case TaskController::NAME:
                if (!isset($options['action'])) $options['action'] = 'showAddFrom';
                if (!in_array($options['action'], ['showAddForm', 'showUpdateForm', 'add', 'update'])) $options['action'] = 'showAddFrom';

                if (!self::AuthChecker(TaskController::NAME, $options['action'], $isAdmin)) {
                    return new MessageController(MessageManager::ERR_ACCESS_VIOLATION);
                }

                return new TaskController($options, $isAdmin);
            case AuthController::NAME:
                if (!isset($options['action'])) $options['action'] = 'showLoginForm';
                if (!in_array($options['action'], ['login', 'logout', 'showLoginForm'])) $options['action'] = 'showLoginForm';

                return new AuthController($options);
            case MessageController::NAME:
                $code = isset($options['code']) ? $options['code'] : '';
                return new MessageController($code);
            default:
                return new TaskListController(1, '', '', $isAdmin);
        }
    }

    public static function AuthChecker($controller, $action, $isAdmin) {
        if ($controller === TaskController::NAME && $action === 'showUpdateForm' && !$isAdmin) return false;
        if ($controller === TaskController::NAME && $action === 'update' && !$isAdmin) return false;

        return true;
    }
}

