<?php
namespace BJ\View;

class TaskView extends AView
{
    public function __construct($data)
    {
        $this->template = 'app/view/template/task.html.php';
        $this->data = $data;
    }

}