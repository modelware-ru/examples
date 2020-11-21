<?php


namespace BJ\Controller;

use BJ\Model\PersonModel;
use BJ\Shared\MessageManager;
use BJ\Shared\SessionManager;
use BJ\View\AuthView;
use function BJ\Utils\GetPasswordHash;

class AuthController implements IController
{
    public const NAME = 'auth';

    private $options;

    public function __construct($options)
    {
        $this->options = $options;
    }

    public function run()
    {
        SessionManager::GetInstance()->reset();

        switch ($this->options['action']) {
            case 'login':
                return $this->login();
            case 'logout':
                return $this->logout();
            case 'showLoginForm':
            default:
                return $this->showLoginForm();
        }
    }

    private function showLoginForm()
    {
        $viewData = [
            'title' => 'Login',
        ];

        return (new AuthView($viewData))->show();
    }

    private function login()
    {
        $login = isset($this->options['login']) ? $this->options['login'] : '';
        $password = isset($this->options['password']) ? $this->options['password'] : '';

        if (empty($login) || empty($password)) {
            $viewData = [
                'title' => 'Login',
                'login' => $login,
                'password' => $password,
                'error' => MessageManager::GetMessage(MessageManager::ERR_NOT_ENOUGH_DATA),
            ];
            return (new AuthView($viewData))->show();
        }

        $personModel = new PersonModel();
        $personDb = $personModel->getPersonByLogin($login);

        if (count($personDb) !== 1 ||
            !hash_equals($personDb[0]['password'], GetPasswordHash($password, $personDb[0]['salt']))) {
            $viewData = [
                'title' => 'Login',
                'login' => $login,
                'password' => $password,
                'error' => MessageManager::GetMessage(MessageManager::ERR_WRONG_NAME_OR_PASSWORD),
            ];
            return (new AuthView($viewData))->show();
        }

        SessionManager::GetInstance()->setValueByKey('person', ['id' => $personDb[0]['id']]);
        return (Factory::Create(TaskListController::NAME, []))->run();
    }

    private function logout()
    {
        return (Factory::Create(TaskListController::NAME, []))->run();
    }

}