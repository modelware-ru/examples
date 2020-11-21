<?php
namespace BJ\View;

class AuthView extends AView
{
    public function __construct($data)
    {
        $this->template = 'app/view/template/auth.html.php';
        $this->data = $data;
    }

}