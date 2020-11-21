<?php
namespace BJ\View;

class TaskListView extends AView
{
    public function __construct($data)
    {
        $this->template = 'app/view/template/tasklist.html.php';
        $this->data = $data;
    }

}