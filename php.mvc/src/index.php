<?php
require_once '../vendor/autoload.php';

use BJ\Controller\Factory;
use BJ\Controller\TaskListController;
use BJ\Controller\MessageController;
use BJ\Shared\MessageManager;


$defaultController = TaskListController::NAME;

$controllerName = $defaultController;
$options = [];
if (isset($_REQUEST)) {
    $options = array_slice($_REQUEST, 0);
    if (isset($_REQUEST['controller'])) {
        $controllerName = $_REQUEST['controller'];
        unset($options['controller']);
    }
}

try {
    $controller = Factory::Create($controllerName, $options);
    echo $controller->run();
} catch (Exception $e) {
    $controller = Factory::Create(MessageController::NAME, ['code' => MessageManager::ERR_SOMETHING_WRONG]);
    echo $controller->run();
}
