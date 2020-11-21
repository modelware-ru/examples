<?php

namespace BJ\View;

use function BJ\Utils\ProcessView;

class AView
{
    protected $template;
    protected $data;

    public function show()
    {
        return ProcessView($this->template, $this->data);
    }
}