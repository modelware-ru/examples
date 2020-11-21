<?php
namespace BJ\View;

class MessageView extends AView
{
    public function __construct($data)
    {
        $this->template = 'app/view/template/message.html.php';
        $this->data = $data;
    }

}