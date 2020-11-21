<?php
namespace BJ\Controller;

use BJ\Shared\MessageManager;
use BJ\View\MessageView;

class MessageController implements IController
{
    public const NAME = 'message';

    private $code;

    function __construct($code)
    {
        $this->code = $code;
    }

    function run()
    {
        $viewData = [
            'title' => 'Message',
            'text' => MessageManager::GetMessage($this->code),
        ];

        return (new MessageView($viewData))->show();
    }
}
